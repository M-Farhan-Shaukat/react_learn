import React, { useEffect, useRef, useState } from 'react';
import { franc } from 'franc';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [detectedLang, setDetectedLang] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isUrduAvailable, setIsUrduAvailable] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioUrlRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const synthVoices = window.speechSynthesis.getVoices();
      setVoices(synthVoices);

      // Check for Urdu support
      const urduVoice = synthVoices.find((v) => v.lang.startsWith('ur'));
      setIsUrduAvailable(!!urduVoice);

      const bestVoice = synthVoices.find((v) =>
        ['Google US English', 'Siri Female', 'Microsoft Zira', 'Samantha'].includes(v.name)
      );
      if (bestVoice) setSelectedVoice(bestVoice);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  // Detect language of the input text
  const detectLanguage = (inputText) => {
    const langCode = franc(inputText);
    return langCode;
  };

  // Map the detected language code to an appropriate voice
  const mapLangCodeToVoice = (langCode) => {
    if (!voices.length) return null;

    const langPrefix = langCode.slice(0, 2);
    const preferredVoices = [
      'Google US English',
      'Siri Female',
      'Siri Male',
      'Microsoft Zira',
      'Microsoft David',
      'Samantha',
    ];

    // Check for Urdu voice
    if (langPrefix === 'ur') {
      const urduVoice = voices.find((voice) => voice.lang.startsWith('ur'));
      if (urduVoice) return urduVoice;
      else {
        alert('Urdu voice is not available in this browser.');
        return voices[0]; // fallback to first available voice
      }
    }

    const match = voices.find(
      (voice) =>
        preferredVoices.includes(voice.name) &&
        voice.lang.toLowerCase().startsWith(langPrefix)
    );

    return match || voices.find((voice) => voice.lang.toLowerCase().startsWith(langPrefix)) || voices[0];
  };

  // Handle speech synthesis (speech from text)
  const handleSpeak = async () => {
    if (!text.trim()) return;

    window.speechSynthesis.cancel(); // stop any current speech
    const langCode = detectLanguage(text);
    setDetectedLang(langCode);

    const utterance = new SpeechSynthesisUtterance(text);
    const voiceToUse = selectedVoice || mapLangCodeToVoice(langCode);

    if (voiceToUse) {
      utterance.voice = voiceToUse;
      utterance.lang = voiceToUse.lang;
    }

    utterance.rate = rate;
    utterance.pitch = pitch;

    // Record speech
    const stream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: false }).catch(() => null);
    if (stream) {
      audioChunksRef.current = [];
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
      };
      mediaRecorderRef.current.start();
    }

    utterance.onend = () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  // Handle speech stop
  const handleStop = () => {
    window.speechSynthesis.cancel();
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  // Handle downloading audio
  const handleDownload = () => {
    if (audioUrlRef.current) {
      const a = document.createElement('a');
      a.href = audioUrlRef.current;
      a.download = 'speech.webm';
      a.click();
    } else {
      alert('No recording available. Please speak first.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌐 Text to Speech (All Devices Supported)</h2>

      <textarea
        rows="4"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type in any language..."
      />

      <div style={{ marginTop: '10px' }}>
        <label>Voice: </label>
        <select
          onChange={(e) =>
            setSelectedVoice(voices.find((v) => v.name === e.target.value))
          }
          value={selectedVoice?.name || ''}
        >
          <option value="">Auto-select</option>
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Rate: </label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />{' '}
        {rate}
      </div>

      <div>
        <label>Pitch: </label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(parseFloat(e.target.value))}
        />{' '}
        {pitch}
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSpeak}>🔊 Speak</button>{' '}
        <button onClick={handleStop}>🛑 Stop</button>{' '}
        <button onClick={handleDownload}>⬇️ Download</button>
      </div>

      {detectedLang && <p>Detected Language Code: {detectedLang}</p>}
      {!isUrduAvailable && <p>Urdu voice is not available in your browser.</p>}
    </div>
  );
};

export default TextToSpeech;

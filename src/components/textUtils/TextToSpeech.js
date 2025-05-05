import React, { useEffect, useRef, useState } from 'react';
import { franc } from 'franc';
import { FaMicrophone } from 'react-icons/fa';

const TextToSpeech = ({ mode = 'light', showAlert }) => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [detectedLang, setDetectedLang] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isUrduAvailable, setIsUrduAvailable] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(null);

  const utteranceRef = useRef(null);
  const isCancelled = useRef(false);
  const speechQueue = useRef([]);

  useEffect(() => {
    const loadVoices = () => {
      const synthVoices = window.speechSynthesis.getVoices();
      setVoices(synthVoices);

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

  const detectLanguage = (inputText) => {
    return franc(inputText);
  };

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

    if (langPrefix === 'ur') {
      const urduVoice = voices.find((voice) => voice.lang.startsWith('ur'));
      if (urduVoice) return urduVoice;
      showAlert?.('Urdu voice not available in this browser.', 'warning');
      return voices[0];
    }

    const match = voices.find(
      (voice) =>
        preferredVoices.includes(voice.name) &&
        voice.lang.toLowerCase().startsWith(langPrefix)
    );

    return match || voices.find((voice) => voice.lang.toLowerCase().startsWith(langPrefix)) || voices[0];
  };

  const splitText = (input) => {
    return input.match(/[^.!?]+[.!?]+|\s*$/g)?.filter(Boolean) || [];
  };

  const handleSpeak = () => {
    if (!text.trim()) return;

    window.speechSynthesis.cancel();
    isCancelled.current = false;
    setIsSpeaking(true);

    const langCode = detectLanguage(text);
    setDetectedLang(langCode);

    const voiceToUse = selectedVoice || mapLangCodeToVoice(langCode);
    const chunks = splitText(text);
    speechQueue.current = [...chunks];

    speakChunks(chunks, voiceToUse);
  };

  const speakChunks = (chunks, voice) => {
    if (!chunks.length) {
      setSpeakingIndex(null);
      setIsSpeaking(false);
      return;
    }

    const chunk = chunks.shift();
    const currentIndex = speechQueue.current.length - chunks.length - 1;
    setSpeakingIndex(currentIndex);

    utteranceRef.current = new SpeechSynthesisUtterance(chunk.trim());
    const utterance = utteranceRef.current;

    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onend = () => {
      if (isCancelled.current) {
        setIsSpeaking(false);
        setSpeakingIndex(null);
        return;
      }
      speakChunks(chunks, voice);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setSpeakingIndex(null);
      showAlert?.('Speech error occurred.', 'error');
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    isCancelled.current = true;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setSpeakingIndex(null);
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <h2
        style={{
          backgroundColor: mode === 'light' ? 'white' : '#21292C',
          color: mode === 'light' ? 'black' : 'white',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        Text to Speech
      </h2>

      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text here..."
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '20px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
        disabled={isSpeaking}
      />

      {/* Displayed highlighted sentences */}
      {text.trim() && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #eee',
            borderRadius: '6px',
            backgroundColor: '#f8f9fa',
            whiteSpace: 'pre-wrap',
            minHeight: '60px',
          }}
        >
          {splitText(text).map((sentence, index) => (
            <span
              key={index}
              style={{
                backgroundColor: index === speakingIndex ? '#ffeeba' : 'transparent',
              }}
            >
              {sentence}
            </span>
          ))}
        </div>
      )}

      <div style={{ marginTop: '10px' }}>
        <label>Voice: </label>
        <select
          disabled={isSpeaking}
          onChange={(e) =>
            setSelectedVoice(voices.find((v) => v.name === e.target.value))
          }
          value={selectedVoice?.name || ''}
          style={{
            width: '100%',
            padding: '6px',
            borderRadius: '6px',
            marginTop: '6px',
            cursor: isSpeaking ? 'not-allowed' : 'pointer',
          }}
        >
          <option value="">Auto-select</option>
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={handleSpeak}
          disabled={isSpeaking}
          className="btn btn-success"
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            cursor: isSpeaking ? 'not-allowed' : 'pointer',
          }}
        >
          <FaMicrophone /> Speak
        </button>
        <button
          onClick={handleStop}
          className="btn btn-danger"
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Stop
        </button>
      </div>

      {detectedLang && (
        <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Detected Language Code: <strong>{detectedLang}</strong>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;

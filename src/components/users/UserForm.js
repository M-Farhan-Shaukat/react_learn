import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm(props) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    address: '',
    city: '',
    state: '',
    district: '',
    country:'',
    linkedin_profile: '',
    portfolio: '',
    description: '',
    objectives: '',
    CNIC: '',
    marital_status: '',
    // education: [{ institute: '', degree: '', year_of_degree_start: '', year_of_degree_end: '', educational_achievements: '' }],
    // job: [{ job_title: '', company_name: '', year_of_employment_start: '', year_of_employment_end: '', responsibilities: '', job_achievements: '' }],
    // skills: [{ skill_type: '', skill_name: '' }],
    // projects: [{ project_name: '', project_description: '', technologies_used: '', your_role: '' }],
    // language: [{ language: '' }],
    // reference: '',
    // hobbies: [{ hobbies: '' }]
  });
  
  const handleInputChange = (e) => {
   
    const { name, value } = e.target;
    const nameParts = name.split('.'); // Handle nested fields using dot notation
  
    if (nameParts.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    } else {
      // Check for valid object structure before accessing properties
      const [parentKey, index, childKey] = nameParts;
      if (formData[parentKey] && formData[parentKey][index]) {
        setFormData((prevData) => {
          const newData = [...prevData[parentKey]];
          newData[index][childKey] = value;
          return { ...prevData, [parentKey]: newData };
        });
      } else {
        console.error(`Invalid field structure for name: ${name}`);
      }
    }
    
  }

  const handleSelectChange = (event) => {
    handleInputChange(event);
  };

  const handleNextClick=(e)=>{
    e.preventDefault();
    console.log(formData)
  } 
  
  return (
    <>
      <form className="row g-3"  style={{
          backgroundColor: props.mode === "light" ? "white" : "#21292C",
          color: props.mode === "light" ? "black" : "white",
        }}>
        <div className="col-md-6">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            onChange={handleInputChange}
            value={formData.name}
          />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail4"
            onChange={handleInputChange}
            value={formData.email}
          />
        </div>
        <div className="col-md-6">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="inputPhone"
            onChange={handleInputChange}
            value={formData.phone}
          />
        </div>
        <div className="col-md-6">
          <label>Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            className="form-control"
            id="date_of_birth"
            onChange={handleInputChange}
            value={formData.date_of_birth}
          />
        </div>
        <div className="col-12">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            onChange={handleInputChange}
            value={formData.address}
          />
        </div>
        <div className="col-md-6">
          <label>City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            id="inputCity"
            onChange={handleInputChange}
            value={formData.city}
          />
        </div>
        <div className="col-md-6">
          <label>State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            id="inputState"
            onChange={handleInputChange}
            value={formData.state}
          />
        </div>
        <div className="col-md-6">
          <label>District</label>
          <input
            type="text"
            name="district"
            className="form-control"
            id="inputDistrict"
            onChange={handleInputChange}
            value={formData.district}
          />
        </div>
        <div className="col-md-6">
          <label>Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            id="inputCountry"
            onChange={handleInputChange}
            value={formData.country}
          />
        </div>

        <div className="col-md-6">
          <label>LinkedIn Profile</label>
          <input
            type="text"
            className="form-control"
            id="inputLinkedInProfile"
            name="linkedin_profile"
            onChange={handleInputChange}
            value={formData.linkedin_profile}
          />
        </div>
        <div className="col-md-6">
          <label>Portfolio</label>
          <input
            type="text"
            className="form-control"
            id="inputPortfolio"
            name="portfolio"
            onChange={handleInputChange}
            value={formData.portfolio}
          />
        </div>

        <div className="col-12">
          <label>Description</label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            name="description"
            onChange={handleInputChange}
            value={formData.description}
          />
        </div>

        <div className="col-12">
          <label>Objectives</label>
          <textarea
            className="form-control"
            id="objectives"
            rows={3}
            name="objectives"
            onChange={handleInputChange}
            value={formData.objectives}
          />
        </div>

        <div className="col-md-6">
          <label>CNIC</label>
          <input type="text" name="CNIC" className="form-control" id="CNIC" onChange={handleInputChange}
            value={formData.CNIC} />
        </div>
        <div className="col-md-6">
          <label>Marital Status</label>
          
          <select className="form-select" aria-label="Marital Status"  name="marital_status" value={formData.marital_status} onChange={handleSelectChange}>
  <option value="">Select Marital Status</option>
                  <option value="1">yes</option>
                  <option value="0">no</option>
</select>



        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary mx-1" onClick={handleNextClick}>
            Next
          </button>

          <button type="submit" className="btn btn-primary" onClick={()=>navigate('/users')}>
            Cancel
          </button>
        </div>
      </form>
    </>           
  );
}

export default UserForm;

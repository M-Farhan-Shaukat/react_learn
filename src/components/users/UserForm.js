import React from "react";

function UserForm() {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label>Name</label>
          <input type="text" name="name"className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input type="email" name="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label>Phone</label>
          <input type="text" name="phone" className="form-control" id="inputPhone" />
        </div>
        <div className="col-md-6">
          <label>Date of Birth</label>
          <input type="date" name="date_of_birth"  className="form-control" id="date_of_birth" />
        </div>
        <div className="col-12">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
          />
        </div>
        <div className="col-md-6">
          <label>City</label>
          <input type="text" name="city" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-6">
          <label>State</label>
          <input type="text" name="state" className="form-control" id="inputState" />
        </div>
        <div className="col-md-6">
          <label>District</label>
          <input type="text" name="district" className="form-control" id="inputDistrict" />
        </div>
        <div className="col-md-6">
          <label>Country</label>
          <input type="text" name="country" className="form-control" id="inputCountry" />
        </div>

        <div className="col-md-6">
          <label>LinkedIn Profile</label>
          <input
            type="text"
            className="form-control"
            id="inputLinkedInProfile"
            name="linkedin_profile"
          />
        </div>
        <div className="col-md-6">
          <label>Portfolio</label>
          <input type="text" className="form-control" id="inputPortfolio" name="portfolio" />
        </div>

        <div className="col-12">
          <label>Description</label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            defaultValue={""}
            name="description"
          />
        </div>

        <div className="col-12">
          <label>Objectives</label>
          <textarea
            className="form-control"
            id="objectives"
            rows={3}
            defaultValue={""}
            name="objectives"
          />
        </div>

        <div className="col-md-6">
          <label>CNIC</label>
          <input type="text" name="CNIC" className="form-control" id="CNIC" />
        </div>
        <div className="col-md-6">
          <label>Marital Status</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inputmaritalStatus"
                defaultValue="yes"
                name="marital_status"
              />
              <label>yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inputmaritalStatus"
                defaultValue="no"
                name="marital_status"
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default UserForm;

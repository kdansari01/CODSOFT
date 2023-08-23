import React, { useState } from "react";

const Modal = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    role: "",
    phone: "",
    email: "",
    address: "",
    github: "",
    linkedin: "",
    profile: null,
  });
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(createJob(formData, setLoading, navigate));
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} action="#">
                <div className="user__details">
                  <div className="input__box">
                    <span className="details">Full Name</span>
                    <input
                      name="fullname"
                      onChange={handleInputChange}
                      value={formData.fullname}
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Role</span>
                    <input
                      name="title"
                      onChange={handleInputChange}
                      value={formData.role}
                      type="text"
                      placeholder="Full stack developer"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Profile pictue</span>
                    <input
                      name="profile"
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Phone Number</span>
                    <input
                      name="phone"
                      value={formData.phone}
                      type="number"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      placeholder="email .."
                      name="email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Address</span>
                    <input
                      type="text"
                      placeholder="address"
                      required
                      name="address"
                      onChange={handleInputChange}
                      value={formData.address}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Github</span>
                    <input
                      type="text"
                      placeholder="Github Url"
                      name="github"
                      onChange={handleInputChange}
                      value={formData.github}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Linkedin url</span>
                    <input
                      type="text"
                      placeholder="linkedin url"
                      name="linkedin"
                      onChange={handleInputChange}
                      value={formData.linkedin}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancle
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Update
      </button>
    </div>
  );
};

export default Modal;

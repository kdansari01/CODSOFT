import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { formFields } from "./formsField";
import { useSelector } from "react-redux";

const ApplicationFormPage = () => {
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  console.log(user);
  const { title, id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.username || "",
    email: user?.email || "",
    experience: "Less than a year",
    message: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Form submitted successfully!",
      text: `You have applied for job "${title} ${id}")`,
    }).then(() => {
      navigate("/");
    });

    setFormData({
      name: "",
      email: "",
      experience: "Less than a year",
      message: "",
      cv: null,
    });
  };

  return (
    <>
      {user?.email ? (
        <div className="container mb-4 ">
          <div className="row mx-0 justify-content-center">
            <div className="col-md-8 col-lg-10 col-12 ">
              <form
                onSubmit={handleSubmit}
                className="w-100 rounded-1 p-4 border bg-white shadow"
                encType="multipart/form-data"
              >
                {formFields.map((field, index) => (
                  <div key={index} className="form-group mb-4">
                    <label className="d-block mb-1 form-label">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="form-select"
                        required={field.required}
                      >
                        {field.options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="form-control"
                        rows="3"
                        placeholder={field.placeholder}
                      />
                    ) : field.type === "file" ? (
                      <input
                        type="file"
                        name={field.name}
                        onChange={handleChange}
                        className="form-control"
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="form-control"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <div className="mb-4 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary px-3 rounded-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        navigate("/jobs")
      )}
    </>
  );
};

export default ApplicationFormPage;

import { useState,useEffect } from "react";

const initialFormData = {
  name: "",
  regId: "",
  email: "",
  age: "",
  city: "",
  role: "student",
};

function Inputs() {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedDataList, setSubmittedDataList] = useState(()=>{
    const savedData = localStorage.getItem("students");

    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(()=>{
    localStorage.setItem(
      "students",
      JSON.stringify(submittedDataList)
    );
  },[submittedDataList])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedDataList((currentList) => [...currentList, formData]);
    setFormData(initialFormData);
  };

  return (
    <>
      <h1 className="form-title">Form</h1>
      <form className="student-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Name</span>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>

        <label className="field">
          <span>Reg Id</span>
          <input
            className="form-input"
            type="number"
            name="regId"
            value={formData.regId}
            onChange={handleChange}
            placeholder="Enter registration id"
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
          
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>

        <label className="field">
          <span>Age</span>
          <input
            className="form-input"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </label>

        <label className="field">
          <span>City</span>
          <input
            className="form-input"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </label>

        <label className="field">
          <span>Role</span>
          <select
            className="form-input"
            name="role"
            value={formData.role}
            onChange={handleChange}
            id="role"
          >
            <option value="student">Student</option>
            <option value="scholar">Scholar</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      {submittedDataList.length > 0 && (
        <section className="submitted-card">
          <h2>Submitted Forms</h2>
          <div className="submitted-list">
            {submittedDataList.map((submittedData, index) => (
              <article
                className="submitted-grid"
                key={`${submittedData.name}-${submittedData.regId}-${index}`}
              >
                <h3>Entry {index + 1}</h3>
                <p>
                  <span>Name:</span> {submittedData.name}
                </p>
                <p>
                  <span>Reg Id:</span> {submittedData.regId}
                </p>
                <p>
                  <span>Email:</span> {submittedData.email}
                </p>
                <p>
                  <span>Age:</span> {submittedData.age}
                </p>
                <p>
                  <span>City:</span> {submittedData.city}
                </p>
                <p>
                  <span>Role:</span> {submittedData.role}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default Inputs;

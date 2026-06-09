import { useState } from "react";
import "../components/EmployeeRegistration.css";

function EmployeeRegistration() {

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = () => {

    if (name === "") {
      setError("Please enter name");
      return;
    }

    if (role === "") {
      setError("Please enter role");
      return;
    }

    if (company === "") {
      setError("Please enter company");
      return;
    }

    setError("");

    setEmployees([
      ...employees,
      {
        name,
        role,
        company
      }
    ]);

    setName("");
    setRole("");
    setCompany("");
  };

  return (
    <div className="registration-container">

      <h1>Employee Registration</h1>

      <p>Name</p>

      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Role</p>

      <input
        type="text"
        placeholder="Enter employee role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <p>Company</p>

      <input
        type="text"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br />
      <br />

      {error && <p>{error}</p>}

      <button onClick={handleSubmit}>
        Add Employee
      </button>

      <h2>Employee List</h2>

      {employees.map((employee, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          <p><strong>Company:</strong> {employee.company}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default EmployeeRegistration;
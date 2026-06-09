import { useState } from "react";

function EmployeeCard(props) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="profile-container">

      <img
        src={props.image}
        alt={props.name}
        className="profile-image"
      />

      <div className="profile-details">

        <h2>{props.name}</h2>

        <button
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Mobile:</strong> {props.mobile}</p>
            <p><strong>Role:</strong> {props.role}</p>
            <p><strong>Company:</strong> {props.company}</p>
            <p><strong>Address:</strong> {props.address}</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default EmployeeCard;
import { useRef } from "react";

function UncontrolledForm() {

  const nameRef = useRef();
  const roleRef = useRef();

  const handleSubmit = () => {
    alert(
      "Name: " +
      nameRef.current.value +
      "\nRole: " +
      roleRef.current.value
    );
  };

  return (
    <div>
      <h1>Uncontrolled Form</h1>

      <p>Name</p>
      <input type="text" ref={nameRef} />

      <p>Role</p>
      <input type="text" ref={roleRef} />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default UncontrolledForm;
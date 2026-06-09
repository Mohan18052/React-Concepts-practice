import { useEffect, useState } from "react";

function ApiUsers() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });

  }, []);

  return (
    <div>

      <h1>API Users Page</h1>

      {loading && <h2>Loading Users...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error &&
        users.map((user) => (
          <div key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default ApiUsers;
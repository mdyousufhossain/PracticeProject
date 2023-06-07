import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const [updateUser, setUpdateUser] = useState({ name: "" });

  useEffect(() => {
    // Fetch users from the Express.js API
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChangeUser = (e) => {
    setUpdateUser({
      ...updateUser,
      name: e.target.value,
    });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/user", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    }).then((res) => res.json());
    setUpdateUser(updateUser);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          name="name"
          placeholder="New Name"
          value={updateUser.name}
          onChange={handleChangeUser}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default App;

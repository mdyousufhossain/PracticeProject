import { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    firstName: "balamar",
    email: "heda",
  });

  function handleChangeFirstName(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleChangeEmail(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        Your first name :
        <input value={person.firstName} onChange={handleChangeFirstName} />
      </label>
      
      <label>
        Your Email :
        <input value={person.email} onChange={handleChangeEmail} />
      </label>

      <div>
        <h2>
          {" "}
          {person.firstName} {person.lastName}
        </h2>
        <p>{person.email}</p>
      </div>
    </>
  );
}

export default Form;

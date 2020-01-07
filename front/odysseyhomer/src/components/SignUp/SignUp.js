import React, { useState } from "react";

const Signup = () => {
  const [info, setInfo] = useState({
    email: "bilbon@email.com",
    password: "myPrecious",
    name: "Frodon",
    lastname: "Sacquet"
  });

  const updateForm = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div>
      <h1>{JSON.stringify(info, 1, 1)}</h1>
      <form className="form" onSubmit={submitForm}>
        <input type="text" name="name" onChange={updateForm} />
        <input type="text" name="lastname" onChange={updateForm} />
        <input type="email" name="email" onChange={updateForm} />
        <input type="password" name="password" onChange={updateForm} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;

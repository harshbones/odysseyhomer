import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("test@test.com");

  const updateEmailField = e => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>{email}</h1>
      <input type="email" name="email" onChange={updateEmailField} />
    </div>
  );
};

export default Signup;

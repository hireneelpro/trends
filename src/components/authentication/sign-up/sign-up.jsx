import "./sign-up.scss";
import { useState } from "react";
import {
  signupWithEmail,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firbase.utils";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // =====reset formfield after completing signup===========//
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  // ====== reading inputs and storing into state ======//
  const handler = (event) => {
    // const { name:newName, value } = event.target;
    const newName = event.target.name;
    const value = event.target.value;
    console.log(newName, value);
    setFormFields({ ...formFields, [newName]: value });
  };
  // console.log(formFields);
  // =========== checking conditions of input values =======//

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const response = await signupWithEmail(email, password);
      // console.log(response);
      await createUserDocumentFromAuth(response.user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can not create user,email already in use");
      }
      console.log(error);
    }
  };

  // ======== return block============//
  return (
    
      <form className="sign-up-form" onSubmit={submitHandler}>
        <h4>sign up with your email and password</h4>
        <label>Display Name </label>
        <input
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handler}
        />

        <label>email </label>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={handler}
        />
        <label>password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={handler}
        />
        <label>confirm password </label>
        <input
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handler}
        />
        <button className="btn btn-signup" type="submit">
          sign up
        </button>
      </form>
    
  );
};

export default SignUpForm;

import "./sign-up.scss";
import { useState,useContext } from "react";
import {
  signupWithEmail,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firbase.utils";
// import { UserContext } from "../../../context/user.context";
import Button from "../../button/button";
import InputForm from "../form-input";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // const { setCurrentUser } = useContext(UserContext);
   
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
      console.log(response);
      await createUserDocumentFromAuth(response.user, { displayName });
      setFormFields(defaultFormFields);
      // setCurrentUser(response.user)
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
      <h4>sign up with email and password</h4>
      <InputForm
        label="Display Name"
        type="text"
        required
        name="displayName"
        value={displayName}
        onChange={handler}
      />

      <InputForm
        label="Email"
        type="email"
        required
        name="email"
        value={email}
        onChange={handler}
      />
      <InputForm
        label="Password"
        type="password"
        required
        name="password"
        value={password}
        onChange={handler}
      />
      <InputForm
        label="Confirm Password"
        type="password"
        required
        name="confirmPassword"
        value={confirmPassword}
        onChange={handler}
      />
      <button className="btn sign-up-btn" type="submit">
        Sign Up Here
      </button>
    </form>
  );
};

export default SignUpForm;

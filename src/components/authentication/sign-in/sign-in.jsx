import { useState, useContext } from "react";
// import { UserContext } from "../../../context/user.context";
import {
  createUserDocumentFromAuth,
  signInWithEmail,
  signInWithGoogle,
} from "../../../utils/firebase/firbase.utils";
import Button from "../../button/button";
import { SignInStyles,ButtonContainer } from "./sign-in.styles";

const SignInForm = () => {
  // ========context========
  // const { setCurrentUser } = useContext(UserContext);

  //=========================
  // ======== sign-in with google =======
  const logGoogleUser = async (e) => {
    e.preventDefault();
    const data = await signInWithGoogle();
    console.log(data);
    createUserDocumentFromAuth(data.user);
    // setCurrentUser(data.user);
  };
  // =================sign in with email======//
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handler = (event) => {
    event.preventDefault();
    const newName = event.target.name;
    const value = event.target.value;
    console.log(newName, value);
    setFormFields({ ...formFields, [newName]: value });
  };
  // console.log(formFields);
  // email signin//
  const emailSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithEmail(email, password);
      // console.log(response);
      // setCurrentUser(response.user);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        alert("user not found");
      } else if (error.code === "auth/wrong-password") {
        alert("wrong password");
      } else if (error.code === "auth/invalid-email") {
        alert(" invalid email");
      } else {
        alert("sign-in error / pls try again");
      }
    }
    setFormFields(defaultFormFields);
  };

  // ===========
  return (
    <SignInStyles>
      <h4>Having email and password</h4>
      <h5> Sign In Here</h5>
      <label>email</label>
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
      <ButtonContainer>
        <Button onClick={emailSignin}>sign-in</Button>
        <Button buttonType="google" onClick={logGoogleUser}>
          google
        </Button>
      </ButtonContainer>
    </SignInStyles>
  );
};
export default SignInForm;

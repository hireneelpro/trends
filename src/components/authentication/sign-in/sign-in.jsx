import { useState, useContext } from "react";
// import { UserContext } from "../../../context/user.context";
import {
  createUserDocumentFromAuth,
  signInWithEmail,
  signInWithGoogle,
} from "../../../utils/firebase/firbase.utils";
// import Button from "../../button/button";
import "./sign-in.styles.scss"

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
    // event.preventDefault();
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
      console.log(response);
      // setCurrentUser(response.user);
    } catch (error) {
      alert(error)
      // or alert(error.code)
      // or====a below to be more specific.
      // if (error.code === "auth/user-not-found") {
      //   alert("user not found");
      // } else if (error.code === "auth/wrong-password") {
      //   alert("wrong password");
      // } else if (error.code === "auth/invalid-email") {
      //   alert(" invalid email");
      // } else {
      //   alert("sign-in error / pls try again");
      // }
    }
    setFormFields(defaultFormFields);
  };

  // ===========
  return (
    <form className="signin-page" onSubmit={emailSignin}>
      
      <h4> Sign In Here</h4>
      <label>email</label>
      <br />
      <input
        type="email"
        required
        name="email"
        value={email}
        onChange={handler}
      />
      <label>password</label>
      <br />
      <input
        type="password"
        required
        name="password"
        value={password}
        onChange={handler}
      />
      <div className="btn-container">
        <button className="sign-in-btn btn" type="submit">
          Log in Trends
        </button>
        <span className="or">
          --------------------------------- OR --------------------------------
        </span>
        <button className="google-btn btn" onClick={logGoogleUser}>
          <i className="fab fa-google"></i>
          Log in with Google
        </button>
      </div>
    </form>
  );
};
export default SignInForm;

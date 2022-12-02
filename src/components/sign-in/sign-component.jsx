import { signInWithGooglePopup } from "../../utils/firebase/firbase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firbase.utils";
import SignUpForm from "../sign-up form/sign-up";

const SignIn = () => {
  const logGoogleUser = async () => {
    const data = await signInWithGooglePopup();
    createUserDocumentFromAuth(data.user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}> sign in with google popup</button>
      <SignUpForm/>
      </div>
  );
};

export default SignIn;

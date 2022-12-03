import { Fragment } from "react";
import SignUpForm from "../sign-up/sign-up";
import SignInForm from "../sign-in/sign-in";
import './main-sign-page.scss';
const MainSignPage = () => {
  return (
    <div className="main-signin-page">
      <div className="sign-in">
        <SignInForm />
      </div>
      <div className="sign-up">
        <SignUpForm />
      </div>
    </div>
  );
};
export default MainSignPage

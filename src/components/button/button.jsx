import {
  BaseButton,
  GoogleSignInButton,
  Inverted,
  ButtonSpinner,
} from "./button.styles.jsx";
// Method 1 as per tutorials//
// const BUTTON_TYPE_CLASSES = {
//     google: 'google',
//     inverted: 'inverted'
// }
// const Button = ({ children, buttonType, ...otherProps }) => {
//     return (
//         <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}
//         >
//             {children}
//         </button>
//     )
// }

// ======method 2 simple i write=========//
const Button = ({ children, buttonType, loading, ...otherProps }) => {
  // let CustomBtn = {buttonType};
  let CustomBtn = BaseButton;
  if (buttonType === "google") {
    CustomBtn = GoogleSignInButton;
  } else if (buttonType === "inverted") {
    CustomBtn = Inverted;
  }

  return (
    <CustomBtn {...otherProps}>
      {loading ? <ButtonSpinner /> : children}
    </CustomBtn>
  );
};
export default Button;

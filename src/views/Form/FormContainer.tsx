import { connect } from "react-redux";
import { updatePassword } from "../../actions/updateWizard";
import FormComponent from "./Form";

const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (password: string) => dispatch(updatePassword(password)),
  };
};

export const Form = connect(null, mapDispatchToProps)(FormComponent);

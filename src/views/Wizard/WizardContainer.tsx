import { connect } from "react-redux";
import { updateLoading, apiResponseRequest } from "../../actions/updateWizard";
import { Step } from "../../model/models";
import { State } from "../../reducers";
import { WizardComponent } from "./Wizard";

interface Props {
  steps: Step[];
}

const mapStateToProps = (state: State & Props) => {
  return {
    password: state.wizardReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoading: (isLoading: boolean) => dispatch(updateLoading(isLoading)),
    apiResponseRequest: (password) => dispatch(apiResponseRequest(password)),
  };
};

export const Wizard = connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardComponent);

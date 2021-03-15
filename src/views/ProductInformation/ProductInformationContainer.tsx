import { connect } from "react-redux";
import { updateAcceptConditions } from "../../actions/updateWizard";
import { State } from "../../reducers";
import ProductInformationComponent from "./ProductInformation";

const mapStateToProps = (state: State) => {
  return {
    acceptConditions: state.wizardReducer.acceptConditions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAcceptConditions: (acceptConditions: boolean) =>
      dispatch(updateAcceptConditions(acceptConditions)),
  };
};

export const ProductInformation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInformationComponent);

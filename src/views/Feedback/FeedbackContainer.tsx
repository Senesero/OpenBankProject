import { connect } from "react-redux";
import { State } from "../../reducers";
import FeedbackComponent from "./Feedback";

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.wizardReducer.isLoading,
    apiResponse: state.wizardReducer.apiResponse,
  };
};

export const Feedback = connect(mapStateToProps)(FeedbackComponent);

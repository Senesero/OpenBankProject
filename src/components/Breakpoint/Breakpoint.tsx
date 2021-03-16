import * as React from "react";
import { withBreakpoints, BreakpointTypes } from "./withBreakpoints";

interface Props {
  media: BreakpointTypes;
}

interface InjectedBreakpointsProps {
  breakpoint: BreakpointTypes;
}

const BreakpointComponent: React.FC<Props & InjectedBreakpointsProps> = ({
  media,
  breakpoint,
  children,
}) => {
  if (media === breakpoint) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default withBreakpoints(BreakpointComponent);

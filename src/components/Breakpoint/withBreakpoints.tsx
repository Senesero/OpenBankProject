import * as React from 'react';
import { theme } from '../../utils/theme/theme';

export type BreakpointTypes = 'mobile' | 'desktop';

const currentBreakpoint = (): BreakpointTypes =>
  window.innerWidth < theme.breakpoints.desktop ? 'mobile' : 'desktop';

interface InjectedBreakpointsProps {
  breakpoint: BreakpointTypes;
}

const BreakpointsContext = React.createContext<InjectedBreakpointsProps>({
  breakpoint: currentBreakpoint(),
});

export const BreakpointsProvider: React.FC = ({ children }) => {
  const [breakpoint, setBreakpoint] = React.useState(currentBreakpoint());

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    const newBreakpoint = currentBreakpoint();
    if (newBreakpoint !== breakpoint) {
      setBreakpoint(newBreakpoint);
    }
  };

  return (
    <BreakpointsContext.Provider value={{ breakpoint: breakpoint }}>
      {children}
    </BreakpointsContext.Provider>
  );
};

export const withBreakpoints = <P extends object>(
  Component: React.ComponentType<P & InjectedBreakpointsProps>,
) => props => (
  <BreakpointsContext.Consumer>
    {(context: InjectedBreakpointsProps) => {
      return <Component {...context} {...props} />;
    }}
  </BreakpointsContext.Consumer>
);

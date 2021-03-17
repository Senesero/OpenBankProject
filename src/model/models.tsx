export interface Step {
  step: number;
  title: string;
  component: any;
  onContinue?: () => void;
}

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { BreakpointsProvider } from "./components/Breakpoint";
import store from './redux/configureStore'
 
 
describe('App', () => {
  test('se renderiza el componente App', async () => {
    render(
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <BreakpointsProvider>
            <App />
          </BreakpointsProvider>
        </Provider>
      </React.Suspense>)
      
    // screen.debug();

    const step1WizardTitle = await screen.findByText('wizard.stepTitle')    
    expect(step1WizardTitle).toBeDefined();

    const blockTitle = await screen.findByText('productInformation.textBlock1')    
    expect(blockTitle).toBeDefined();
  });

  test('al intentar continuar sin aceptar terminos, se muestra mensaje de error', async () => {
    render(
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <BreakpointsProvider>
            <App />
          </BreakpointsProvider>
        </Provider>
      </React.Suspense>)
    
    const step1WizardTitle = await screen.findByText('wizard.stepTitle')    
    expect(step1WizardTitle).toBeDefined();

    const blockTitle = await screen.findByText('productInformation.textBlock1')    
    expect(blockTitle).toBeDefined();

    const buttonNext = screen.getByText("wizard.next");
    fireEvent.click(buttonNext)

    const requiredErrorText = await screen.findByText('requiredError')    
    expect(requiredErrorText).toBeDefined();
  });

  test('Cuando aceptamos los terminos y pulsamos continuar, pasa a la siguiente pantalla correctamente', async () => {
    render(
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <BreakpointsProvider>
            <App />
          </BreakpointsProvider>
        </Provider>
      </React.Suspense>)
        
    const step1WizardTitle = await screen.findByText('wizard.stepTitle')    
    expect(step1WizardTitle).toBeDefined();

    const blockTitle = await screen.findByText('productInformation.textBlock1')    
    expect(blockTitle).toBeDefined();

    expect(screen.getByRole('checkbox')).toBeDefined();
    fireEvent.change(screen.getByRole('checkbox'), {
      target: { checked: true },
    });

    const buttonNext = screen.getByText("wizard.next");
    fireEvent.click(buttonNext)

    const step2PasswordTitle = await screen.findByText('form.password.title')    
    expect(step2PasswordTitle).toBeDefined();
  });

  test('Al llegar a la pantalla de formulario e intentar continuar sin rellenar los datos, nos muestra el mensaje de error', async () => {
    render(
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <BreakpointsProvider>
            <App />
          </BreakpointsProvider>
        </Provider>
      </React.Suspense>)
        
    const step1WizardTitle = await screen.findByText('wizard.stepTitle')    
    expect(step1WizardTitle).toBeDefined();

    const blockTitle = await screen.findByText('productInformation.textBlock1')    
    expect(blockTitle).toBeDefined();

    expect(screen.getByRole('checkbox')).toBeDefined();
    fireEvent.change(screen.getByRole('checkbox'), {
      target: { checked: true },
    });

    const buttonNext = screen.getByText("wizard.next");
    fireEvent.click(buttonNext)

    const step2PasswordTitle = await screen.findByText('form.password.title')    
    expect(step2PasswordTitle).toBeDefined();

    fireEvent.click(buttonNext)

    const requiredErrorText = await screen.findByText('requiredError')    
    expect(requiredErrorText).toBeDefined();
  });
});

// screen.debug();
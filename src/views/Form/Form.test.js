import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './Form';
import { Provider } from "react-redux";
import { BreakpointsProvider } from "../../components/Breakpoint";
import store from '../../redux/configureStore'
 
 
describe('Form', () => {
  test('se renderiza el componente Form', async () => {
    render(
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <BreakpointsProvider>
            <Form />
          </BreakpointsProvider>
        </Provider>
      </React.Suspense>
    )
      
    // screen.debug();

    const step2PasswordTitle = await screen.findByText('form.password.title')    
    expect(step2PasswordTitle).toBeDefined();
  });

  test('se muestran los distintos errores en los campos de las contraseña', async () => {
    render(
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <BreakpointsProvider>
            <Form />
          </BreakpointsProvider>
        </Provider>
      </React.Suspense>
    )
      
    const step2PasswordTitle = await screen.findByText('form.password.title');
    expect(step2PasswordTitle).toBeDefined();

    const inputPassword = await screen.getByPlaceholderText('form.password.placeholder');
    expect(inputPassword).toBeDefined();

    const inputConfirmPassword = await screen.getByPlaceholderText('form.confirmPassword.placeholder');
    expect(inputConfirmPassword).toBeDefined();

    fireEvent.change(inputPassword, {
      target: { value: 'aa' },
    });

    const errorPasswordTitle = await screen.findByText(/form.inputError.text/);
    expect(errorPasswordTitle).toBeDefined();

    const errorPasswordMinimumCharacters = await screen.findByText(/form.inputError.minimumCharacters/);
    expect(errorPasswordMinimumCharacters).toBeDefined();

    const errorPasswordACapitalLetter = await screen.findByText(/form.inputError.aCapitalLetter/);
    expect(errorPasswordACapitalLetter).toBeDefined();

    const errorPasswordANumber = await screen.findByText(/form.inputError.aNumber/);
    expect(errorPasswordANumber).toBeDefined();

    fireEvent.change(inputConfirmPassword, {
      target: { value: 'a' },
    });

    const errorConfirmPassword = await screen.findByText("form.inputError.notSamePassword");
    expect(errorConfirmPassword).toBeDefined();

    fireEvent.change(inputPassword, {
      target: { value: 'aaaaaaaaa' },
    });

    const errorPasswordTitle2 = await screen.findByText(/form.inputError.text/);
    expect(errorPasswordTitle2).toBeDefined();

    const errorPasswordMinimumCharacters2 = await screen.queryByText(/form.inputError.minimumCharacters/)
    expect(errorPasswordMinimumCharacters2).toBeNull()

    const errorPasswordACapitalLetter2 = await screen.findByText(/form.inputError.aCapitalLetter/);
    expect(errorPasswordACapitalLetter2).toBeDefined();

    const errorPasswordANumber2 = await screen.findByText(/form.inputError.aNumber/);
    expect(errorPasswordANumber2).toBeDefined();

    fireEvent.change(inputPassword, {
      target: { value: 'aaaaaaaaaB' },
    });

    const errorPasswordTitle3 = await screen.findByText(/form.inputError.text/);
    expect(errorPasswordTitle3).toBeDefined();
    
    const errorPasswordMinimumCharacters3 = await screen.queryByText(/form.inputError.minimumCharacters/)
    expect(errorPasswordMinimumCharacters3).toBeNull()

    const errorPasswordACapitalLetter3 = await screen.queryByText(/form.inputError.minimumCharacters/)
    expect(errorPasswordACapitalLetter3).toBeNull()

    const errorPasswordANumber3 = await screen.findByText(/form.inputError.aNumber/);
    expect(errorPasswordANumber3).toBeDefined();

    fireEvent.change(inputPassword, {
      target: { value: 'aaaaaaaaaB2' },
    });

    const errorPasswordTitle4 = await screen.queryByText(/form.inputError.text/)
    expect(errorPasswordTitle4).toBeNull()
    
    const errorPasswordMinimumCharacters4 = await screen.queryByText(/form.inputError.minimumCharacters/)
    expect(errorPasswordMinimumCharacters4).toBeNull()

    const errorPasswordACapitalLetter4 = await screen.queryByText(/form.inputError.minimumCharacters/)
    expect(errorPasswordACapitalLetter4).toBeNull()

    const errorPasswordANumber4 = await screen.queryByText(/form.inputError.aNumber/)
    expect(errorPasswordANumber4).toBeNull()

    fireEvent.change(inputConfirmPassword, {
      target: { value: 'aaaaaaaaaB2' },
    });

    const errorConfirmPassword2 = await screen.queryByText("form.inputError.notSamePassword")
    expect(errorConfirmPassword2).toBeNull()
  });
});
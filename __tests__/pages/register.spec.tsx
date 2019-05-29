import * as React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import RegisterPage from '../../pages/register';
import { InputField } from '../../components/InputField';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { LoadingBar } from '../../components/LoadingBar';
import { Alert } from '../../components/Alert';
import { MockedProvider } from 'react-apollo/test-utils';
import { REGISTER_MUTATION } from '../../graphql/auth/register';
import {
  UNFILLED_FIELDS_ERROR,
  INVALID_EMAIL_ERROR,
  PASS_MISMATCH_ERROR,
  PASS_LENGTH_ERROR
}
  from '../../utilities/errorMessages';

const populateInputFields = (wrap: any) => {
  const emailInput = wrap.find('input[id="Email"]');
  const passInput = wrap.find('input[id="Password"]');
  const passConfirmInput = wrap.find('input[id="Confirm password"]');

  emailInput.simulate('change', {
    target: {
      value: 'test@gmail.com'
    }
  });

  passInput.simulate('change', {
    target: {
      value: 'password'
    }
  });

  passConfirmInput.simulate('change', {
    target: {
      value: 'password'
    }
  });
};

describe('Register page', () => {
  let wrap: any;

  const registerUser = {
    signUp: { email: 'test@gmail.com', password: 'password' }
  };

  describe('Methods', () => {
    beforeEach(() => {
      wrap = mount(
        <MockedProvider mocks={[]}>
          <RegisterPage />
        </MockedProvider>
      );
    });
    it('validatePasswordLength returns true if password length is greater than 4', () => {
      expect(wrap.find(RegisterPage).instance().validatePasswordLength('password')).toBe(true);
    });
    it('validatePasswordLength returns false if password length is less than 4', () => {
      expect(wrap.find(RegisterPage).instance().validatePasswordLength('pass')).toBe(false);
    });
    it('validatePasswordMatch returns true if password match', () => {
      expect(wrap.find(RegisterPage).instance().validatePasswordMatch('password', 'password')).toBe(true);
    });
    it('validatePasswordMatch returns false if password do not match', () => {
      expect(wrap.find(RegisterPage).instance().validatePasswordMatch('password', 'pass')).toBe(false);
    });
    it('validateInputs returns null if all inputs are valid', () => {
      expect(wrap.find(RegisterPage).instance().validateInputs('email@email.com', 'password', 'password')).toBe(null);
    });
    it('validateInputs returns INVALID_EMAIL_ERROR if email is not in correct form', () => {
      expect(wrap.find(RegisterPage).instance().validateInputs('email@email', 'password', 'pass')).toBe(INVALID_EMAIL_ERROR);
      expect(wrap.find(RegisterPage).instance().validateInputs('email', 'password', 'pass')).toBe(INVALID_EMAIL_ERROR);
      expect(wrap.find(RegisterPage).instance().validateInputs('email@email.', 'password', 'pass')).toBe(INVALID_EMAIL_ERROR);
    });
    it('validateInputs returns PASS_MISMATCH_ERROR if password do not match', () => {
      expect(wrap.find(RegisterPage).instance().validateInputs('email@email.com', 'password', 'pass')).toBe(PASS_MISMATCH_ERROR);
    });
    it('validateInputs returns PASS_LENGTH_ERROR if password length is less than 5', () => {
      expect(wrap.find(RegisterPage).instance().validateInputs('email@email.com', 'pass', 'pass')).toBe(PASS_LENGTH_ERROR);
    });
  });

  describe('Initial render', () => {
    beforeEach(() => {
      wrap = mount(
        <MockedProvider mocks={[]}>
          <RegisterPage />
        </MockedProvider>
      );
    });
    it('has 3 input fields', () => {
      expect(wrap.find(InputField)).toHaveLength(3);
    });

    it('has a submit button', () => {
      expect(wrap.find(ButtonPrimary)).toHaveLength(1);
    });
  });
  describe('After register mutation triggered', () => {
    it('renders loading state initially', done => {

      const mocks = [
        {
          request: {
            query: REGISTER_MUTATION,
            variables: { email: 'test@gmail.com', password: 'password' }
          },
          result: { data: registerUser }
        }
      ];

      wrap = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <RegisterPage />
        </MockedProvider>
      );

      populateInputFields(wrap);

      wrap.find('form').simulate('submit');

      expect(wrap.find(LoadingBar)).toHaveLength(1);

      done();
    });

    it('renders Alert component if error state is present', async done => {
      const mocks = [
        {
          request: {
            query: REGISTER_MUTATION,
            variables: { email: 'test@gmail.com', password: 'password' }
          },
          result: {
            errors: [{ message: 'Error: A user already exists' }]
          }
        }
      ];

      wrap = mount(
        <MockedProvider mocks={mocks as any} addTypename={false}>
          <RegisterPage />
        </MockedProvider>
      );

      populateInputFields(wrap);

      wrap.find('form').simulate('submit');

      await wait(0);

      wrap.update();

      expect(wrap.find(Alert)).toHaveLength(1);

      done();
    });

    it(
      'renders Alert component with UNFILLED_FIELDS_ERROR if all fields are empty',
      async done => {

        const mocks = [
          {
            request: {
              query: REGISTER_MUTATION,
              variables: { email: 'test@gmail.com', password: 'password' }
            },
            result: { data: registerUser }
          }
        ];

        wrap = mount(
          <MockedProvider mocks={mocks as any} addTypename={false}>
            <RegisterPage />
          </MockedProvider>
        );

        wrap.find('form').simulate('submit');

        await wait(0);

        wrap.update();

        expect(wrap.find(Alert).props().message).toBe(UNFILLED_FIELDS_ERROR);

        done();
      });
  });
});

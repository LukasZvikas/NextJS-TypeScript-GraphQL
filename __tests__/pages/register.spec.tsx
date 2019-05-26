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
      const registerUser = {
        signUp: { email: 'test@gmail.com', password: 'password' }
      };

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

    it('renders error component if error state is present', async done => {
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
  });
});

import * as React from 'react';
import wait from 'waait';
import { mount, shallow } from 'enzyme';
import LoginPage from '../../pages/login';
import { InputField } from '../../components/InputField';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { LoadingBar } from '../../components/LoadingBar';
import { Alert } from '../../components/Alert';
import { MockedProvider } from 'react-apollo/test-utils';
import { LOGIN_MUTATION } from '../../graphql/auth/login';
import {
    UNFILLED_FIELDS_ERROR,
}
    from '../../utilities/errorMessages';
import Router from 'next/router';

describe('Login page', () => {
    let wrap: any;

    const registerUser = {
        loginUser: { email: 'test@gmail.com', userId: '1' }
    };

    const mockedRouter = { push: () => { } };

    Router.router = mockedRouter as any;

    describe('Methods', () => {
        beforeEach(() => {
            wrap = shallow(
                <LoginPage />
            ).dive();
        })
        it('validateInputs returns null if all inputs are valid', () => {
            expect(wrap.instance().validateInputs({ email: 'email@email.com', password: 'password' })).toBe(null);
        });
        it('validateInputs returns UNFILLED_FIELDS_ERROR if no password is provided', () => {
            expect(wrap.instance().validateInputs({ email: 'email@email.com', password: '' })).toBe(UNFILLED_FIELDS_ERROR);
        });
        it('validateInputs returns UNFILLED_FIELDS_ERROR if no email is provided', () => {
            expect(wrap.instance().validateInputs({ email: '', password: 'password' })).toBe(UNFILLED_FIELDS_ERROR);
        });
    });

    describe('Initial render', () => {
        beforeEach(() => {
            wrap = mount(
                <MockedProvider mocks={[]}>
                    <LoginPage />
                </MockedProvider>
            );
        });
        it('has 2 input fields', () => {
            expect(wrap.find(InputField)).toHaveLength(2);
        });

        it('has a submit button', () => {
            expect(wrap.find(ButtonPrimary)).toHaveLength(1);
        });
    });
    describe('After login mutation triggered', () => {
        it('renders loading state initially', () => {
            const mocks = [
                {
                    request: {
                        query: LOGIN_MUTATION,
                        variables: { email: 'test@gmail.com', password: 'password' }
                    },
                    result: { data: registerUser }
                }
            ];

            wrap = mount(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <LoginPage />
                </MockedProvider>
            );

            const emailInput = wrap.find('input[id="Email"]');
            const passInput = wrap.find('input[id="Password"]');

            emailInput.simulate('change', {
                target: {
                    value: 'test@gmail.com',
                    name: 'email'
                }
            });

            passInput.simulate('change', {
                target: {
                    value: 'password',
                    name: 'password'
                }
            });

            wrap.find('form').simulate('submit');

            expect(wrap.find(LoadingBar)).toHaveLength(1);
        });

        it('renders Alert component if error state is present', async () => {
            const mocks = [
                {
                    request: {
                        query: LOGIN_MUTATION,
                        variables: { email: 'test@gmail.com', password: 'password' }
                    },
                    result: {
                        errors: [{ message: 'Error: Invalid login details' }]
                    }
                }
            ];

            wrap = mount(
                <MockedProvider mocks={mocks as any} addTypename={false}>
                    <LoginPage />
                </MockedProvider>
            );

            wrap.find('form').simulate('submit');

            await wait(0);

            wrap.update();

            expect(wrap.find(Alert)).toHaveLength(1);

        });

        it(
            'renders Alert component with UNFILLED_FIELDS_ERROR if all fields are empty',
            async () => {

                const mocks = [
                    {
                        request: {
                            query: LOGIN_MUTATION,
                            variables: { email: 'test@gmail.com', password: 'password' }
                        },
                        result: { data: registerUser }
                    }
                ];

                wrap = mount(
                    <MockedProvider mocks={mocks as any} addTypename={false}>
                        <LoginPage />
                    </MockedProvider>
                );

                wrap.find('form').simulate('submit');

                await wait(0);

                wrap.update();

                expect(wrap.find(Alert).props().message).toBe(UNFILLED_FIELDS_ERROR);
            });
    });
});

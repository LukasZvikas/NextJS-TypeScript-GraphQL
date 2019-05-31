import React, { Component, ChangeEvent } from 'react';
import Layout from '../components/Layout';
import { InputField } from '../components/InputField';
import { REGISTER_MUTATION } from '../graphql/auth/register';
import { Mutation } from 'react-apollo';
import { validateEmail } from '../utilities/emailValidation';
import {
    PASS_MISMATCH_ERROR,
    PASS_LENGTH_ERROR,
    INVALID_EMAIL_ERROR,
    UNFILLED_FIELDS_ERROR
} from '../utilities/errorMessages';
import { Alert } from '../components/Alert';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { LoadingBar } from '../components/LoadingBar';
import AuthRender from '../components/AuthRender';
import { withAuthPages } from '../components/withAuthPages';
import { InjectedProps } from '../types/authTypes';

class Register extends Component<InjectedProps, {}> {

    validatePasswordMatch(passwordOne: string, passwordTwo: string): boolean {
        if (passwordOne !== passwordTwo) {
            return false;
        }
        return true;
    }

    validatePasswordLength(password: string): boolean {
        if (password.length < 5) {
            return false;
        }
        return true;
    }

    validateInputs(
        { email, password, passwordConfirm }:
            { email?: string, password?: string, passwordConfirm?: string }
    ) {
        if (!email || !password || !passwordConfirm) {
            return UNFILLED_FIELDS_ERROR;
        } else if (!validateEmail(email)) {
            return INVALID_EMAIL_ERROR;
        }
        else if (!this.validatePasswordLength(password)) {
            return PASS_LENGTH_ERROR;
        }
        else if (!this.validatePasswordMatch(password, passwordConfirm)) {
            return PASS_MISMATCH_ERROR;
        }
        return null;
    }

    render() {
        return (
            <AuthRender>
                {({ handleSubmit, onInputChange, errorMessage, auth }: InjectedProps) => {
                    return (
                        <Layout title={'Register'}>
                            <Mutation mutation={REGISTER_MUTATION} onError={() => { }}>
                                {(mutate: any, { loading, error }: any) => {
                                    if (loading) {
                                        return <LoadingBar />;
                                    }
                                    return (
                                        <div className="form-container d-flex flex-column justify-content-center">
                                            {loading && <LoadingBar />}
                                            {error && <Alert message={error.graphQLErrors[0].message} />}
                                            {errorMessage && <Alert message={errorMessage} />}
                                            <div className="text-center heading heading-large">Register</div>
                                            <div className="row d-flex justify-content-center">
                                                <form
                                                    className="d-flex flex-column col-10 col-sm-6 col-md-3"
                                                    onSubmit={handleSubmit.bind(this, { auth, mutate, validateInputs: this.validateInputs })}
                                                >
                                                    <InputField
                                                        name={'email'}
                                                        labelTitle={'Email'}
                                                        placeholderTitle={'Enter your email'}
                                                        onInputChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            onInputChange(e)
                                                        }
                                                    />
                                                    <InputField
                                                        name={'password'}
                                                        labelTitle={'Password'}
                                                        type="password"
                                                        placeholderTitle={'Enter your password'}
                                                        onInputChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            onInputChange(e)
                                                        }
                                                    />
                                                    <InputField
                                                        name={'passwordConfirm'}
                                                        labelTitle={'Confirm password'}
                                                        type="password"
                                                        placeholderTitle={'Repeat your password'}
                                                        onInputChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                            onInputChange(e)
                                                        }
                                                    />
                                                    <ButtonPrimary title={'Sign Up'} />
                                                </form>
                                            </div>
                                        </div>
                                    );
                                }}
                            </Mutation>
                        </Layout>
                    )
                }}
            </AuthRender>
        );
    }
}

export default withAuthPages(Register);

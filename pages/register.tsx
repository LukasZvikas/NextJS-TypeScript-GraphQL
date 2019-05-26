import React, { Component, ChangeEvent, Fragment } from 'react';
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

interface RegisterState {
    email: string;
    password: string;
    passwordConfirm: string;
    errorMessage: string;
}

class Register extends Component<{}, RegisterState> {

    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        errorMessage: ''
    };

    handleSubmit(register: any, event: any) {
        const { email, password, passwordConfirm } = this.state;

        event.preventDefault();

        const isInvalidInputs = this.validateInputs(
            email,
            password,
            passwordConfirm
        );
        if (isInvalidInputs) {
            this.setState({ errorMessage: isInvalidInputs });
            return;
        }
        register({ variables: { email, password } });
    }

    clearErrorMessage() {
        this.setState({ errorMessage: '' });
    }

    onEmailChange(value: string): void {
        const { errorMessage } = this.state;
        if (errorMessage) {
            this.clearErrorMessage();
        }
        this.setState({ email: value });
    }

    onPasswordChange(value: string): void {
        const { errorMessage } = this.state;
        if (errorMessage) {
            this.clearErrorMessage();
        }
        this.setState({ password: value });
    }

    onPasswordConfirmChange(value: string): void {
        const { errorMessage } = this.state;
        if (errorMessage) {
            this.clearErrorMessage();
        }
        this.setState({ passwordConfirm: value });
    }

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

    validateInputs(email: string, password: string, passwordConfirm: string) {
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
        const { errorMessage } = this.state;

        return (
            <Layout title={'Register'}>
                <Mutation mutation={REGISTER_MUTATION} onError={() => { }}>
                    {(register: any, { loading, error }: any) => {
                        if (loading) {
                            return <LoadingBar />;
                        }
                        return (
                            <Fragment>
                                {error ? (
                                    <Alert message={error.graphQLErrors[0].message} />
                                ) : null}
                                {errorMessage ? <Alert message={errorMessage} /> : null}
                                <div>Register</div>
                                <div className="row d-flex justify-content-center">
                                    <form
                                        className="d-flex flex-column col-10 col-sm-6 col-md-4"
                                        onSubmit={this.handleSubmit.bind(this, register)}
                                    >
                                        <InputField
                                            labelTitle={'Email'}
                                            placeholderTitle={'Enter your email'}
                                            onTextChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                this.onEmailChange(e.target.value)
                                            }
                                        />
                                        <InputField
                                            labelTitle={'Password'}
                                            type="password"
                                            placeholderTitle={'Enter your password'}
                                            onTextChange={
                                                (e: ChangeEvent<HTMLInputElement>) =>
                                                    this.onPasswordChange(e.target.value)
                                            }
                                        />
                                        <InputField
                                            labelTitle={'Confirm password'}
                                            type="password"
                                            placeholderTitle={'Repeat your password'}
                                            onTextChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                this.onPasswordConfirmChange(e.target.value)
                                            }
                                        />
                                        <ButtonPrimary title={'Sign Up'} />
                                    </form>
                                </div>
                            </Fragment>
                        );
                    }}
                </Mutation>
            </Layout>
        );
    }
}

export default Register;

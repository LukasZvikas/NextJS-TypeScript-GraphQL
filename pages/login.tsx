import React, { Component, ChangeEvent, Fragment } from 'react';
import Layout from '../components/Layout';
import { InputField } from '../components/InputField';
import { LOGIN_MUTATION } from '../graphql/auth/login';
import { Mutation } from 'react-apollo';
import { validateEmail } from '../utilities/emailValidation';
import {
    INVALID_EMAIL_ERROR,
    UNFILLED_FIELDS_ERROR
} from '../utilities/errorMessages';
import { Alert } from '../components/Alert';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { LoadingBar } from '../components/LoadingBar';
import Router from 'next/router';

interface LoginState {
    email: string;
    password: string;
    errorMessage: string;
}

class Login extends Component<{}, LoginState> {

    state = {
        email: '',
        password: '',
        errorMessage: ''
    };

    handleSubmit(login: any, event: any) {
        const { email, password } = this.state;

        event.preventDefault();

        const isInvalidInputs = this.validateInputs(
            email,
            password
        );
        if (isInvalidInputs) {
            this.setState({ errorMessage: isInvalidInputs });
            return;
        }
        login({ variables: { email, password } });
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

    validateInputs(email: string, password: string) {
        if (!email || !password) {
            return UNFILLED_FIELDS_ERROR;
        };
        return null;
    }

    render() {
        const { errorMessage } = this.state;

        return (
            <Layout title={'Login'}>
                <Mutation mutation={LOGIN_MUTATION} onError={() => { }}>
                    {(login: any, { loading, error, data }: any) => {
                        if (loading) {
                            return <LoadingBar />;
                        }
                        else if (!error && data) {
                            Router.push('/');
                        }
                        return (
                            <Fragment>
                                {error ? (
                                    <Alert message={error.graphQLErrors[0].message} />
                                ) : null}
                                {errorMessage ? <Alert message={errorMessage} /> : null}
                                <div>Login</div>
                                <div className="row d-flex justify-content-center">
                                    <form
                                        className="d-flex flex-column col-10 col-sm-6 col-md-4"
                                        onSubmit={this.handleSubmit.bind(this, login)}
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
                                        <ButtonPrimary title={'Login'} />
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

export default Login;

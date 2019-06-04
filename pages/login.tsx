import React, { Component, ChangeEvent } from 'react';
import Layout from '../components/Layout';
import { InputField } from '../components/InputField';
import { LOGIN_MUTATION } from '../graphql/auth/login';
import { Mutation } from 'react-apollo';
import { UNFILLED_FIELDS_ERROR } from '../utilities/errorMessages';
import { Alert } from '../components/Alert';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { LoadingBar } from '../components/LoadingBar';
import AuthRender from '../components/AuthRender';
import Router from 'next/router';
import { withAuthPages } from '../components/withAuthPages';
import { InjectedProps } from '../types/authTypes';

class Login extends Component {
    validateInputs(
        { email, password }: { email?: string, password?: string }
    ): string | null {
        if (!email || !password) {
            return UNFILLED_FIELDS_ERROR;
        }
        return null;
    };

    render() {
        return (
            <AuthRender>
                {({ handleSubmit, onInputChange, errorMessage, auth, setErrorMessage }: InjectedProps) => {
                    return (
                        <Layout title={'Login'}>
                            <Mutation mutation={LOGIN_MUTATION} onError={() => { }}>
                                {(mutate: any, { loading, error, data }: any) => {
                                    if (!error && data) {
                                        Router.push('/');
                                    }

                                    return (
                                        <div className="form-container d-flex flex-column justify-content-center">
                                            {loading && <LoadingBar />}
                                            {error && <Alert message={error.graphQLErrors[0].message} />}
                                            {errorMessage && <Alert message={errorMessage} />}
                                            <div className="text-center heading heading-large">Login</div>
                                            <div className="row d-flex justify-content-center">
                                                <form
                                                    className="d-flex flex-column col-10 col-sm-8 col-md-3"
                                                    onSubmit={handleSubmit.bind(
                                                        this, {
                                                            auth,
                                                            mutate,
                                                            validateInputs: this.validateInputs,
                                                            setErrorMessage
                                                        }
                                                    )}
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
                                                    <ButtonPrimary title={'Login'} />
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

export default withAuthPages(Login);

import React, { Component, ChangeEvent, Fragment } from "react";
import Layout from "../components/Layout";
import { InputField } from "../components/InputField";
import { registerMutation } from "../graphql/auth/register";
import { Mutation } from "react-apollo";
import { validateEmail } from "../utilities/emailValidation";
import {
    PASS_MISMATCH_ERROR,
    PASS_LENGTH_ERROR,
    INVALID_EMAIL_ERROR,
    UNFILLED_FIELDS_ERROR
}
    from "../utilities/errorMessages";
import { Alert } from "../components/Alert";

class Register extends Component {
    state = { email: "", password: "", passwordConfirm: "", errorMessage: "" };

    clearErrorMessage = () => {
        this.setState({ errorMessage: "" });
    }

    onEmailChange = (value: string): void => {
        const { errorMessage } = this.state;
        if (errorMessage) this.clearErrorMessage();
        this.setState({ email: value });
    }

    onPasswordChange = (value: string): void => {
        const { errorMessage } = this.state;
        if (errorMessage) this.clearErrorMessage();
        this.setState({ password: value });
    }

    onPasswordConfirmChange = (value: string): void => {
        const { errorMessage } = this.state;
        if (errorMessage) this.clearErrorMessage();
        this.setState({ passwordConfirm: value });
    }

    validatePasswordMatch = (passwordOne: string, passwordTwo: string) => {
        if (passwordOne !== passwordTwo) return false;
        return true;
    }

    validatePasswordLength = (password: string) => {
        if (password.length < 5) return false;
        return true;
    }

    validateInputs = (email: string, password: string, passwordConfirm: string) => {
        if (!email || !password || !passwordConfirm) {
            return UNFILLED_FIELDS_ERROR;
        }
        else if (!validateEmail(email)) {
            return INVALID_EMAIL_ERROR
        }
        else if (!this.validatePasswordMatch(password, passwordConfirm)) {
            return PASS_MISMATCH_ERROR;
        }
        else if (!this.validatePasswordLength(password)) {
            return PASS_LENGTH_ERROR;
        }
    }

    render() {
        const { email, password, passwordConfirm, errorMessage } = this.state;
        return (
            <Layout title={"Register"}>
                <Mutation mutation={registerMutation}>
                    {(register: any, { error }: any) => {
                        return (
                            <Fragment>
                                {error ? <Alert message={error.message} /> : null}
                                {errorMessage ? <Alert message={errorMessage} /> : null}
                                <div>Register</div>
                                <div className="row d-flex justify-content-center">
                                    <form
                                        className="d-flex flex-column col-10 col-sm-6 col-md-4"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const isInvalidInputs = this.validateInputs(email, password, passwordConfirm);
                                            if (isInvalidInputs) {
                                                this.setState({ errorMessage: isInvalidInputs });
                                                return;
                                            }
                                            register({ variables: { email, password } });
                                        }}
                                    >
                                        <InputField
                                            labelTitle={"Email"}
                                            placeholderTitle={"Enter your email"}
                                            onTextChange={(e: ChangeEvent<HTMLInputElement>) => this.onEmailChange(e.target.value)}
                                        />
                                        <InputField
                                            labelTitle={"Password"}
                                            type="password"
                                            placeholderTitle={"Enter your password"}
                                            onTextChange={(e: ChangeEvent<HTMLInputElement>) => this.onPasswordChange(e.target.value)}
                                        />
                                        <InputField
                                            labelTitle={"Confirm password"}
                                            type="password"
                                            placeholderTitle={"Repeat your password"}
                                            onTextChange={(e: ChangeEvent<HTMLInputElement>) => this.onPasswordConfirmChange(e.target.value)}
                                        />
                                        <div className="d-flex justify-content-center">
                                            <button className="button button__primary">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </Fragment>
                        );
                    }}
                </Mutation>
            </Layout >);
    }
}

export default Register;

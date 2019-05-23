import React, { Component, ChangeEvent, Fragment } from "react";
import Layout from "../components/Layout";
import { InputField } from "../components/InputField";
import { registerMutation } from "../graphql/auth/register";
import { Mutation } from "react-apollo";

class Register extends Component {
    state = { email: "", password: "", passwordConfirm: "" };

    onEmailChange = (value: string): void => {
        this.setState({ email: value });
    }

    onPasswordChange = (value: string): void => {
        this.setState({ password: value });
    }

    onPasswordConfirmChange = (value: string): void => {
        this.setState({ passwordConfirm: value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <Layout title={"Register"}>
                <Mutation mutation={registerMutation}>
                    {(register: any, { error }: any) => {
                        return (
                            <Fragment>
                                {error ? <div>{error.message}</div> : null}
                                <div>Register</div>
                                <div className="row d-flex justify-content-center">
                                    <form
                                        className="d-flex flex-column col-10 col-sm-6 col-md-4"
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            register({ variables: { email, password } })
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
                        )
                    }}
                </Mutation>
            </Layout >);
    }
}

export default Register;

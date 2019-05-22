import React, {Component} from "react";
import Layout from "../components/Layout";

class Register extends Component {
    render() {
        return (
        <Layout title={"Register"}>
            <div>Register</div>
            <div className="row d-flex justify-content-center">
                <form className="d-flex flex-column col-10 col-sm-6 col-md-4">
                    <label>Email</label>
                    <input type="text" className="form__input" />
                    <label>Password</label>
                    <input type="password" className="form__input" />
                    <label>Password Confirm</label>
                    <input type="password" className="form__input" />
                    <div className="d-flex justify-content-center">
                        <button className="button button__primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </Layout>);
    }
}

export default Register;

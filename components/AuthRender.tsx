import { Component, FormEvent } from 'react';
import { InjectedProps, AuthType } from '../types/authTypes';

interface AuthState {
    auth: AuthType;
    errorMessage?: string;
}

interface AuthProps {
    user?: {
        email: string;
        _id: string;
    };
    data?: any;
    children(props: InjectedProps): JSX.Element;
}

class AuthRender extends Component<AuthProps, AuthState> {
    state = {
        auth: {},
        errorMessage: ''
    };

    handleSubmit(
        {
            auth,
            mutate,
            validateInputs,
            setErrorMessage
        }: {
            auth: AuthType;
            mutate: any;
            validateInputs: (auth: AuthType) => string | null,
            setErrorMessage: (message: string) => void
        },
        event: FormEvent<EventTarget>
    ) {
        event.preventDefault();

        const isInvalidInputs = validateInputs(auth);

        if (isInvalidInputs) {
            setErrorMessage(isInvalidInputs);
            return;
        }
        mutate({ variables: { email: auth.email, password: auth.password } });
    }

    setErrorMessage(message: string): void {
        this.setState({ errorMessage: message });
    }

    clearErrorMessage() {
        this.setState({ errorMessage: '' });
    }

    onInputChange(errorMessage: string, { target }: any): void {
        if (errorMessage) {
            this.clearErrorMessage();
        }
        this.setState({
            auth: {
                ...this.state.auth,
                [target.name]: target.value
            }
        });
    }

    render() {
        const { errorMessage, auth } = this.state;

        return this.props.children({
            auth,
            handleSubmit: this.handleSubmit,
            onInputChange: this.onInputChange.bind(this, errorMessage),
            errorMessage,
            setErrorMessage: this.setErrorMessage.bind(this)
        });
    }
}

export default AuthRender;

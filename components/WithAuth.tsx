import React, { ComponentClass, Component } from 'react';
import { GET_USER_QUERY } from '../graphql/auth/getUser';
import redirect from '../lib/redirect';

// For all components, but Login and SignUp pages

export const withAuth = <T extends object>(C: ComponentClass<T>) => {
    return class IsAuth extends Component<T> {
        static async getInitialProps(context: any) {
            return context.apolloClient.query({
                query: GET_USER_QUERY
            }).then((res: any) => {
                return { user: res.data.getUser };
            })
                .catch((e: any) => {
                    console.log('error', e);
                    redirect(context, '/login');
                    return { user: {} };
                });
        }

        render() {
            return <C {...this.props} />
        }
    }
};
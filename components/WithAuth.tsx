import React, { ComponentClass, Component } from 'react';
import { GET_USER_QUERY } from '../graphql/auth/getUser';
import redirect from '../lib/redirect';

export const withAuth = <T extends object>(C: ComponentClass<T>) => {
    return class IsAuth extends Component<T> {
        static async getInitialProps(context: any) {
            try {
                const response = await context.apolloClient.query({
                    query: GET_USER_QUERY
                });
                return { user: response.data.getUser }
            }
            catch (err) {
                redirect(context, '/');
                return {};
            }
        }
        render() {
            return <C {...this.props} />
        }
    }
}
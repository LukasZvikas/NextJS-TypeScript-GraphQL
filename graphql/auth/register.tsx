import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      email
      password
    }
  }
`;

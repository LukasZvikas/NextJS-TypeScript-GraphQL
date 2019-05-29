import gql from 'graphql-tag';

export const GET_USER_QUERY = gql`
  query {
    getUser {
      _id
      email
    }
  }
`;

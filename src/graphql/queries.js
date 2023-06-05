import { gql } from "@apollo/client";

export const GET_REPOS = gql`
  query Query {
    repositories {
      edges {
        node {
          description
          forksCount
          id
          language
          fullName
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;
export const ME = gql`
  query Query {
    me {
      id
      username
    }
  }
`;

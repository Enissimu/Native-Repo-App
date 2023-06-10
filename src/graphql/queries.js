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

export const GET_ONE_REPO = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      description
      forksCount
      fullName
      reviewCount
      ratingAverage
      stargazersCount
      id
      ownerAvatarUrl
      language
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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

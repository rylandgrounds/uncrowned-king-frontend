import { gql } from "@apollo/client";

export const FETCH_WORKOUTS_QUERY = gql`
  {
    getWorkouts {
      id
      body
      createdAt
      username
      type
      points
    }
  }
`;

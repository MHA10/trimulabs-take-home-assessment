import { gql } from "@apollo/client";

// GraphQL query for fetching the jobs
export const LOAD_JOBS = gql`
  query Jobs {
    jobs {
      id
      locationNames
    }
  }
`;

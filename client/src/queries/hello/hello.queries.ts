import { gql } from "@apollo/client";

const HELLO = gql`
  query Hello {
    hello {
      result
      error
    }
  }
`;

export default HELLO;

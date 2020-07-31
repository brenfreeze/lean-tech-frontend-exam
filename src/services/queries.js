import { gql } from '@apollo/client'

export const GET_PROGRAMS = gql`
  query {
    programs {
      id
      operation
      processId
      processStep
      productFamily
    }
  }
`

export const ADD_PROGRAM = gql`
  mutation CreateProgram(
    $operation: String!
    $processId: String!
    $processStep: Int!
    $productFamily: String!
  ) {
    createProgram(
      operation: $operation
      processId: $processId
      processStep: $processStep
      productFamily: $productFamily
    ) {
      id
      operation
      processId
      processStep
      productFamily
    }
  } 
`
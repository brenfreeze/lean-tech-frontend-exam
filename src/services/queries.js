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

export const UPDATE_PROGRAM = gql`
  mutation UpdateProgram(
    $id: ID!
    $program: ProgramParams!
  ) {
    updateProgram(
      id: $id
      program: $program
    ) {
      id
      operation
      processId
      processStep
      productFamily
    }
  }
`

export const DELETE_PROGRAM = gql`
  mutation DeleteProgram(
    $id: ID!
  ) {
    deleteProgram(
      id: $id
    ) {
      id
      operation
      processId
      processStep
      productFamily
    }
  }
`
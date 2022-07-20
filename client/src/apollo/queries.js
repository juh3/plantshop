import { gql } from '@apollo/client'

export const GET_PLANTS = gql`
  query {
    allPlants {
      id
      family
      name
      description
      price
      imageUrl
    }
  }
`

export const FIND_PLANT = gql`
  query FindPlant( $id: ID!) {
    findPlant( id: $id) {
      family
      name
      description
      price
      imageUrl
      id
    }
  }`
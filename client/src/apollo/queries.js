import { gql } from '@apollo/client'

export const GET_PLANTS = gql`
  query {
    allPlants {
      id
      family
      name
      description
      price
    }
  }
`

export const FIND_PLANT = gql`
  query FindPlant( $id: Int!) {
    findPlant( id: $id) {
      family
      name
      description
      price
    }
  }`
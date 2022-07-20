import { useQuery } from '@apollo/client'
import { GET_PLANTS } from '../apollo/queries'

const usePlants = () => {
  const { data, loading } = useQuery( GET_PLANTS, { fetchPolicy: 'cache-and-network'})
  
  return {
    plants: data?.allPlants,
    loading
  }
}

export default usePlants
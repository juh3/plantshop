const { ApolloServer, gql } = require('apollo-server')

let plants = [
  { id: 1, family: 'Philodendron', name:'Micans', description: 'Ugly ass plant', price: '10.99'},
  {id: 2, family: 'Monstera', name: 'Deliciosa', description: 'Swiss cheese plant', price: '15.00'},
  {id: 3, family: 'Alocasia', name: 'Dragon Scale', description: 'dfada', price: '20.00'},
  {id: 4, family: 'Philodendron',name: 'Magnificum', description: 'yepeyp', price: '49.99'},
  {id: 5, family: 'Alocasia', name:'Zebrina', description: 'Ugly ass plant', price: '12.99'},
  {id: 6, family: 'Monstera', name: 'Albo', description: 'Swiss cheese plant', price: '150.00'},
  {id: 7, family: 'Anthurium', name: 'Clarinerviu,', description: 'dfada', price: '24.99'},
  {id: 8, family: 'Anthurium',name: 'Silver Blush', description: 'yepeyp', price: '39.99'},
]

const typeDefs = gql`
  type Plant {
    id: Int!
    family: String!
    name: String!
    description: String!
    price: String!
  }

  type Query {
    allPlants: [Plant!]!
    findPlant(id: Int!): Plant
  }
`

const resolvers = {
  Query: {
    allPlants: () => plants,
    findPlant: (root, args) =>
      plants.find(x => x.id === args.id)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
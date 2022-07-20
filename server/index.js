const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const Plant = require('./models/plant')
require('dotenv').config()

/*let plants = [
  { id: 1, imageUrl: '/images/philo-micans.jpg', family: 'Philodendron', name:'Micans', description: 'People fall hard for the Philodendron scandens micans, and its easy to see why. She has beautiful heart-shaped leaves that feel velvety-soft to the touch. And she has another special characteristic; the colour of her leaves changes depending on the light! From deep green to full purple, every moment of the day she surprises you with a beautiful colour palette. The Philodendron scandens micans is a hanging plant and loves a light spot.', price: '10.99'},
  {id: 2, imageUrl: '/images/monstera_deliciosa.png',family: 'Monstera', name: 'Deliciosa', description: 'The Monstera Deliciosa, perhaps the best-named houseplant, is a popular, lush plant and rewards just a little care with impressive results. Also known as the Swiss cheese plant due to the holes in her leaves, shes a climber with a tough stem to support her huge, broad leaves. In the jungles of Central America she grows many meters high, using the stringy roots that sprout from each joint to grasp tree trunks or rocks as she reaches for the light. If you want to help your Monstera to climb, give those roots something to grab on to. If not, you can cut them off or lead them back to the potting soil.', price: '15.00'},
  {id: 3, imageUrl: '/images/alocasia_dragonscale.png',family: 'Alocasia', name: 'Dragon Scale', description: 'The Alocasia Dragon Scale is a special and very exclusive type! As her name suggests, the beautiful leaves are reminiscent of the scales of a dragon. The pattern gives the leaves a fantastic 3D effect, you can keep looking at them! Although it is limited available, the Alocasia Dragon Scale is very popular among plant lovers. And we understand why! Besides the fantastic looks of this Rare Plant, it can be used in almost all places in your home. Just dont put her in the direct blazing sun to protect her beautiful leaves.', price: '20.00'},
  {id: 4, imageUrl: '/images/philo_gloriosum.png',family: 'Philodendron',name: 'Gloriosum', description: 'The Philodendron Gloriosum is a beautiful green plant with large heart-shaped leaves. The leaves are a bright green with striking yellow nerves. Asides from the beautiful shape, the leaves also have a velvety texture to them which makes this plant extra special! The Philodendron Gloriosum originates from Colombia but nowadays also occurs in tropic areas in other parts of the world.', price: '49.99'},
  {id: 5, imageUrl: '/images/alocasia_zebrina.png',family: 'Alocasia', name:'Zebrina', description: 'The Alocasia Zebrina is the princess of the plant savannah. With her beautiful zebra-striped stems she is a feast for the eyes. In nature her leaves grow so big that Alocasias are often called the elephants ear plant. For many animals in the South East Asian rainforest, the leaves of the Alocasia Zebrina, which can sometimes grow up to 100 centimetres in size, offer a safe hiding place. With your care she will grow into a beautiful houseplant and youll never get tired of the compliments!', price: '12.99'},
  {id: 6, imageUrl: '/images/pothos-scindapsus-aurens-s.jpg', family: 'Epipremnum', name: 'Devils Ivy', description: 'The Scindapsus Epipremnum (also known as Epipremnum pinnatum) has heart-shaped, green leaves with a yellow marbled variegation. This adventurous type is native to Southeast Asia, where she likes to climb trees. That’s why we gave her a moss pole to cling to, so she can climb around as much as she desires. Just like the Ficus elastica, the Scindapsus made the top 10 of most air-purifying plants according to NASA. Despite her stardome, the Scindapsus remains grounded: she doesnt have high demands and is easy to care for. If you keep the potting soil slightly moist and place her in a bright spot (but not in direct sunlight), she will be more than happy.', price: '9.99'},
  {id: 7, imageUrl: '/images/anthurium_clarinervium.png',family: 'Anthurium', name: 'Clarinervium', description: 'The Anthurium Clarinervium originates from southern Mexico. This plant is recognizable by the large heart-shaped leaves with a velvety surface. The Anthurium Clarinervium is a green room plant that is known for its striking veins on the leaves. These veins resemble veins with a grey white color that passes through the leaf. Hence the nickname vein plant.', price: '24.99'},
  {id: 8, imageUrl: '/images/anthurium_silverblush.png', family: 'Anthurium',name: 'Silver Blush', description: 'Stunning heart shaped green leaves with a silver pattern on top, this is the amazing Anthurium Silver Blush. Juvenile leaves will start with a red or violet tone to them, which eventually fades down in a medium green colour. She is a cousin of the beloved Anthurium Crystallinum, which shows in their family resemblance. The biggest difference is that the Silver blush’s pattern is silver instead of white.', price: '39.99'},
]*/

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MONGODB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const typeDefs = gql`
  type Plant {
    imageUrl: String
    family: String!
    name: String!
    description: String!
    price: String!
    id:ID!
  }

  type Query {
    allPlants: [Plant!]!
    findPlant(id: ID!): Plant
  }
`

const resolvers = {
  Query: {
    allPlants: async() => {
      return Plant.find({})
    },
    findPlant: async(root, args) => {
      console.log(args.id)
      const wantedPlant = await Plant.findOne({_id: args.id})
      console.log(wantedPlant)
      return wantedPlant
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
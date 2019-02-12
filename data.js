const faker = require('faker')

const data = []
const categories = ['MMA', 'Box', 'Kickboxing', 'Judo', 'Sambo']

faker.seed(50)

for (let i = 0; i <= 100; i++) {
  let category = faker.helpers.randomize(categories)
  
  data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: faker.commerce.price()
  }) 
}

module.exports = function () {
  return { 
    products: data,
    categories: [...new Set(data.map(p => p.category))].sort(),
    orders: []
  }
}

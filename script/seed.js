'use strict'

const db = require('../server/db')
const {User, Company} = require('../server/db/models')

const users = [
  {email: 'cody@email.com', password: '123'},
  {email: 'murphy@email.com', password: '123'}
]

const companies = [
  {
    'Company ID': 1,
    'Company Name': 'Snaptags',
    'Share Price Date': '2019-04-15',
    'Share Price': 2.606,
    Comments: 'Data provided by Ichabod Piers'
  },
  {
    'Company ID': 2,
    'Company Name': 'Centidel',
    'Share Price Date': '2019-01-29',
    'Share Price': 4.686,
    Comments: 'Data provided by Lyell Lacky'
  },
  {
    'Company ID': 3,
    'Company Name': 'Kimia',
    'Share Price Date': '2019-04-03',
    'Share Price': 1.221,
    Comments: 'Data provided by Christoper Royal'
  },
  {
    'Company ID': 4,
    'Company Name': 'Wikibox',
    'Share Price Date': '2018-08-24',
    'Share Price': 3.884,
    Comments: 'Data provided by Erica Eales'
  },
  {
    'Company ID': 5,
    'Company Name': 'Quimba',
    'Share Price Date': '2019-07-16',
    'Share Price': 2.619,
    Comments: 'Data provided by George Yakovliv'
  },
  {
    'Company ID': 6,
    'Company Name': 'Youspan',
    'Share Price Date': '2018-12-10',
    'Share Price': 3.536,
    Comments: 'Data provided by Clovis Hamblington'
  },
  {
    'Company ID': 7,
    'Company Name': 'Fadeo',
    'Share Price Date': '2019-04-21',
    'Share Price': 4.483,
    Comments: 'Data provided by Gaylene Maudlen'
  },
  {
    'Company ID': 8,
    'Company Name': 'Skinte',
    'Share Price Date': '2018-08-03',
    'Share Price': 3.743,
    Comments: 'Data provided by Pepito Joburn'
  },
  {
    'Company ID': 9,
    'Company Name': 'Kazu',
    'Share Price Date': '2018-07-10',
    'Share Price': 4.992,
    Comments: 'Data provided by Ebba Collerd'
  },
  {
    'Company ID': 10,
    'Company Name': 'Meezzy',
    'Share Price Date': '2019-01-21',
    'Share Price': 2.606,
    Comments: 'Data provided by Sampson Juschka'
  },
  {
    'Company ID': 11,
    'Company Name': 'Tazzy',
    'Share Price Date': '2018-09-27',
    'Share Price': 2.95,
    Comments: 'Data provided by Norton Holme'
  },
  {
    'Company ID': 12,
    'Company Name': 'Pixope',
    'Share Price Date': '2018-09-23',
    'Share Price': 4.221,
    Comments: 'Data provided by Kare Ogilby'
  },
  {
    'Company ID': 13,
    'Company Name': 'Agivu',
    'Share Price Date': '2018-10-28',
    'Share Price': 2.12,
    Comments: 'Data provided by Tanitansy Durbridge'
  },
  {
    'Company ID': 14,
    'Company Name': 'Eidel',
    'Share Price Date': '2019-06-23',
    'Share Price': 4.446,
    Comments: 'Data provided by Tammie Plenty'
  },
  {
    'Company ID': 15,
    'Company Name': 'Snaptags',
    'Share Price Date': '2018-12-15',
    'Share Price': 3.827,
    Comments: 'Data provided by Abeu Hubberstey'
  },
  {
    'Company ID': 16,
    'Company Name': 'Kayveo',
    'Share Price Date': '2019-03-31',
    'Share Price': 2.208,
    Comments: 'Data provided by Darren Rhydderch'
  },
  {
    'Company ID': 17,
    'Company Name': 'Twimm',
    'Share Price Date': '2019-03-21',
    'Share Price': 3.67,
    Comments: 'Data provided by Vittorio Beaby'
  },
  {
    'Company ID': 18,
    'Company Name': 'Oyoyo',
    'Share Price Date': '2019-03-29',
    'Share Price': 4.566,
    Comments: 'Data provided by Conant Pulham'
  },
  {
    'Company ID': 19,
    'Company Name': 'Fivebridge',
    'Share Price Date': '2018-09-30',
    'Share Price': 1.087,
    Comments: 'Data provided by Phedra Ketchen'
  },
  {
    'Company ID': 20,
    'Company Name': 'Livetube',
    'Share Price Date': '2019-02-28',
    'Share Price': 4.186,
    Comments: 'Data provided by Carley Fihelly'
  },
  {
    'Company ID': 21,
    'Company Name': 'Pixonyx',
    'Share Price Date': '2018-10-15',
    'Share Price': 3.156,
    Comments: 'Data provided by Claire Perrygo'
  },
  {
    'Company ID': 22,
    'Company Name': 'Oyonder',
    'Share Price Date': '2018-11-24',
    'Share Price': 2.011,
    Comments: 'Data provided by Maurise Gerkens'
  },
  {
    'Company ID': 23,
    'Company Name': 'Kwilith',
    'Share Price Date': '2018-11-09',
    'Share Price': 1.537,
    Comments: 'Data provided by Sissie Eddleston'
  },
  {
    'Company ID': 24,
    'Company Name': 'Skaboo',
    'Share Price Date': '2019-05-08',
    'Share Price': 1.981,
    Comments: 'Data provided by Brittni Robb'
  },
  {
    'Company ID': 25,
    'Company Name': 'Trudoo',
    'Share Price Date': '2019-05-21',
    'Share Price': 2.362,
    Comments: 'Data provided by Elise Seppey'
  },
  {
    'Company ID': 26,
    'Company Name': 'Eayo',
    'Share Price Date': '2018-11-10',
    'Share Price': 2.845,
    Comments: 'Data provided by Cherida Orrey'
  },
  {
    'Company ID': 27,
    'Company Name': 'Edgewire',
    'Share Price Date': '2019-07-20',
    'Share Price': 2.244,
    Comments: 'Data provided by Tatiana Kennler'
  },
  {
    'Company ID': 28,
    'Company Name': 'Realbridge',
    'Share Price Date': '2019-04-24',
    'Share Price': 4.123,
    Comments: 'Data provided by Tedi Zolini'
  },
  {
    'Company ID': 29,
    'Company Name': 'Divavu',
    'Share Price Date': '2019-02-15',
    'Share Price': 1.444,
    Comments: 'Data provided by Hersh Wilmore'
  },
  {
    'Company ID': 30,
    'Company Name': 'Linktype',
    'Share Price Date': '2018-08-24',
    'Share Price': 3.833,
    Comments: 'Data provided by Mari Noyce'
  },
  {
    'Company ID': 31,
    'Company Name': 'Zooxo',
    'Share Price Date': '2019-06-23',
    'Share Price': 3.827,
    Comments: 'Data provided by Floris Teresi'
  },
  {
    'Company ID': 32,
    'Company Name': 'Aibox',
    'Share Price Date': '2019-07-20',
    'Share Price': 3.816,
    Comments: 'Data provided by Kennie Gawthrop'
  },
  {
    'Company ID': 33,
    'Company Name': 'Wordpedia',
    'Share Price Date': '2018-08-20',
    'Share Price': 4.306,
    Comments: 'Data provided by Kellby Eyckel'
  },
  {
    'Company ID': 34,
    'Company Name': 'Skyble',
    'Share Price Date': '2019-06-27',
    'Share Price': 4.031,
    Comments: 'Data provided by Gennifer Palek'
  },
  {
    'Company ID': 35,
    'Company Name': 'Twitterbeat',
    'Share Price Date': '2019-02-05',
    'Share Price': 4.753,
    Comments: 'Data provided by Alejandra Hamlington'
  },
  {
    'Company ID': 36,
    'Company Name': 'Realmix',
    'Share Price Date': '2018-11-22',
    'Share Price': 4.143,
    Comments: 'Data provided by Donnamarie de Bullion'
  },
  {
    'Company ID': 37,
    'Company Name': 'Divanoodle',
    'Share Price Date': '2019-06-11',
    'Share Price': 4.912,
    Comments: 'Data provided by Humphrey Van der Baaren'
  },
  {
    'Company ID': 38,
    'Company Name': 'Mynte',
    'Share Price Date': '2018-11-12',
    'Share Price': 2.584,
    Comments: 'Data provided by Birk Rainsbury'
  },
  {
    'Company ID': 39,
    'Company Name': 'Skyba',
    'Share Price Date': '2019-03-11',
    'Share Price': 3.482,
    Comments: 'Data provided by Lise Darcy'
  },
  {
    'Company ID': 40,
    'Company Name': 'Einti',
    'Share Price Date': '2018-12-08',
    'Share Price': 1.038,
    Comments: 'Data provided by Stephanus Notman'
  }
]

async function seed() {
  try {
    await db.sync({force: true})

    console.log('db synced!')

    await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )
    await Promise.all(
      companies.map(company => {
        return Company.create(company)
      })
    )
  } catch (err) {
    console.error(err)
  }

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

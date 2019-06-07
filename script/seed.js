'use strict'

const db = require('../server/db')
const {User, Company} = require('../server/db/models')

const users = [
  {email: 'cody@email.com', password: '123'},
  {email: 'murphy@email.com', password: '123'}
]

const companies = [
  {
    'Company ID': '83864',
    'Company Name': 'Snaptags',
    'Share Price Date': '2019-04-15',
    'Share Price': 2.606,
    Comments: 'Ichabod Piers'
  },
  {
    'Company ID': '45',
    'Company Name': 'Centidel',
    'Share Price Date': '2019-01-29',
    'Share Price': 4.686,
    Comments: 'Lyell Lacky'
  },
  {
    'Company ID': '4502',
    'Company Name': 'Kimia',
    'Share Price Date': '2019-04-03',
    'Share Price': 1.221,
    Comments: 'Christoper Royal'
  },
  {
    'Company ID': '532',
    'Company Name': 'Wikibox',
    'Share Price Date': '2018-08-24',
    'Share Price': 3.884,
    Comments: 'Erica Eales'
  },
  {
    'Company ID': '01370',
    'Company Name': 'Quimba',
    'Share Price Date': '2019-07-16',
    'Share Price': 2.619,
    Comments: 'George Yakovliv'
  },
  {
    'Company ID': '06726',
    'Company Name': 'Youspan',
    'Share Price Date': '2018-12-10',
    'Share Price': 3.536,
    Comments: 'Clovis Hamblington'
  },
  {
    'Company ID': '15',
    'Company Name': 'Fadeo',
    'Share Price Date': '2019-04-21',
    'Share Price': 4.483,
    Comments: 'Gaylene Maudlen'
  },
  {
    'Company ID': '038',
    'Company Name': 'Skinte',
    'Share Price Date': '2018-08-03',
    'Share Price': 3.743,
    Comments: 'Pepito Joburn'
  },
  {
    'Company ID': '46766',
    'Company Name': 'Kazu',
    'Share Price Date': '2018-07-10',
    'Share Price': 4.992,
    Comments: 'Ebba Collerd'
  },
  {
    'Company ID': '641',
    'Company Name': 'Meezzy',
    'Share Price Date': '2019-01-21',
    'Share Price': 2.606,
    Comments: 'Sampson Juschka'
  },
  {
    'Company ID': '07751',
    'Company Name': 'Tazzy',
    'Share Price Date': '2018-09-27',
    'Share Price': 2.95,
    Comments: 'Norton Holme'
  },
  {
    'Company ID': '2',
    'Company Name': 'Pixope',
    'Share Price Date': '2018-09-23',
    'Share Price': 4.221,
    Comments: 'Kare Ogilby'
  },
  {
    'Company ID': '8',
    'Company Name': 'Agivu',
    'Share Price Date': '2018-10-28',
    'Share Price': 2.12,
    Comments: 'Tanitansy Durbridge'
  },
  {
    'Company ID': '1943',
    'Company Name': 'Eidel',
    'Share Price Date': '2019-06-23',
    'Share Price': 4.446,
    Comments: 'Tammie Plenty'
  },
  {
    'Company ID': '03',
    'Company Name': 'Snaptags',
    'Share Price Date': '2018-12-15',
    'Share Price': 3.827,
    Comments: 'Abeu Hubberstey'
  },
  {
    'Company ID': '89396',
    'Company Name': 'Kayveo',
    'Share Price Date': '2019-03-31',
    'Share Price': 2.208,
    Comments: 'Darren Rhydderch'
  },
  {
    'Company ID': '4',
    'Company Name': 'Twimm',
    'Share Price Date': '2019-03-21',
    'Share Price': 3.67,
    Comments: 'Vittorio Beaby'
  },
  {
    'Company ID': '1',
    'Company Name': 'Oyoyo',
    'Share Price Date': '2019-03-29',
    'Share Price': 4.566,
    Comments: 'Conant Pulham'
  },
  {
    'Company ID': '0193',
    'Company Name': 'Fivebridge',
    'Share Price Date': '2018-09-30',
    'Share Price': 1.087,
    Comments: 'Phedra Ketchen'
  },
  {
    'Company ID': '530',
    'Company Name': 'Livetube',
    'Share Price Date': '2019-02-28',
    'Share Price': 4.186,
    Comments: 'Carley Fihelly'
  },
  {
    'Company ID': '492',
    'Company Name': 'Pixonyx',
    'Share Price Date': '2018-10-15',
    'Share Price': 3.156,
    Comments: 'Claire Perrygo'
  },
  {
    'Company ID': '7',
    'Company Name': 'Oyonder',
    'Share Price Date': '2018-11-24',
    'Share Price': 2.011,
    Comments: 'Maurise Gerkens'
  },
  {
    'Company ID': '4889',
    'Company Name': 'Kwilith',
    'Share Price Date': '2018-11-09',
    'Share Price': 1.537,
    Comments: 'Sissie Eddleston'
  },
  {
    'Company ID': '708',
    'Company Name': 'Skaboo',
    'Share Price Date': '2019-05-08',
    'Share Price': 1.981,
    Comments: 'Brittni Robb'
  },
  {
    'Company ID': '18471',
    'Company Name': 'Trudoo',
    'Share Price Date': '2019-05-21',
    'Share Price': 2.362,
    Comments: 'Elise Seppey'
  },
  {
    'Company ID': '17',
    'Company Name': 'Eayo',
    'Share Price Date': '2018-11-10',
    'Share Price': 2.845,
    Comments: 'Cherida Orrey'
  },
  {
    'Company ID': '392',
    'Company Name': 'Edgewire',
    'Share Price Date': '2019-07-20',
    'Share Price': 2.244,
    Comments: 'Tatiana Kennler'
  },
  {
    'Company ID': '73396',
    'Company Name': 'Realbridge',
    'Share Price Date': '2019-04-24',
    'Share Price': 4.123,
    Comments: 'Tedi Zolini'
  },
  {
    'Company ID': '925',
    'Company Name': 'Divavu',
    'Share Price Date': '2019-02-15',
    'Share Price': 1.444,
    Comments: 'Hersh Wilmore'
  },
  {
    'Company ID': '3',
    'Company Name': 'Linktype',
    'Share Price Date': '2018-08-24',
    'Share Price': 3.833,
    Comments: 'Mari Noyce'
  },
  {
    'Company ID': '3',
    'Company Name': 'Zooxo',
    'Share Price Date': '2019-06-23',
    'Share Price': 3.827,
    Comments: 'Floris Teresi'
  },
  {
    'Company ID': '0965',
    'Company Name': 'Aibox',
    'Share Price Date': '2019-07-20',
    'Share Price': 3.816,
    Comments: 'Kennie Gawthrop'
  },
  {
    'Company ID': '40077',
    'Company Name': 'Wordpedia',
    'Share Price Date': '2018-08-20',
    'Share Price': 4.306,
    Comments: 'Kellby Eyckel'
  },
  {
    'Company ID': '82',
    'Company Name': 'Skyble',
    'Share Price Date': '2019-06-27',
    'Share Price': 4.031,
    Comments: 'Gennifer Palek'
  },
  {
    'Company ID': '5',
    'Company Name': 'Twitterbeat',
    'Share Price Date': '2019-02-05',
    'Share Price': 4.753,
    Comments: 'Alejandra Hamlington'
  },
  {
    'Company ID': '6920',
    'Company Name': 'Realmix',
    'Share Price Date': '2018-11-22',
    'Share Price': 4.143,
    Comments: 'Donnamarie de Bullion'
  },
  {
    'Company ID': '499',
    'Company Name': 'Divanoodle',
    'Share Price Date': '2019-06-11',
    'Share Price': 4.912,
    Comments: 'Humphrey Van der Baaren'
  },
  {
    'Company ID': '43565',
    'Company Name': 'Mynte',
    'Share Price Date': '2018-11-12',
    'Share Price': 2.584,
    Comments: 'Birk Rainsbury'
  },
  {
    'Company ID': '9399',
    'Company Name': 'Skyba',
    'Share Price Date': '2019-03-11',
    'Share Price': 3.482,
    Comments: 'Lise Darcy'
  },
  {
    'Company ID': '3082',
    'Company Name': 'Einti',
    'Share Price Date': '2018-12-08',
    'Share Price': 1.038,
    Comments: 'Stephanus Notman'
  }
]

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.

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

// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

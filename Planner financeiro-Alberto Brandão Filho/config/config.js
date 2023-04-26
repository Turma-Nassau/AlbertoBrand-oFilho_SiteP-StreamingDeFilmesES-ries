//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://rvxfuhgi:7Cl0_TA6CvogaYMqLQI-1F1Vfn-RSQjZ@babar.db.elephantsql.com/rvxfuhgi',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}

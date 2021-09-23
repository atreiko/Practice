const { Navigation, ShopsInfo } = require('../data')
const _ = require('lodash');

const resolvers = {
    Query: {

        nav: () => {
            return Navigation
        },

        shops: () => {
            return ShopsInfo
        }
    }
}

module.exports = { resolvers }


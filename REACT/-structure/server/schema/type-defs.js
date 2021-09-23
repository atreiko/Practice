const { gql } = require('apollo-server')

const typeDefs = gql`
    type NavItem {
        id: ID!
        title: String!
        path: String!
    }

    type Product {
        title: String!
        # brands: [BrandInfo]
    }

    type ShopInfo {
        id: ID!
        title: String!
        # link: String
        # products: [Product]
    }

    type Query {
        nav: [NavItem]!
        shops: [ShopInfo]!
    }
    
`; 

module.exports = { typeDefs }



    // # type BrandInfo {
    // #     id: ID!
    // #     name: String!
    // #     img: String!
    // #     flavors: [Flavor]
    // #     variety: []
    // # }
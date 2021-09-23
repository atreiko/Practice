
const Navigation = [
    {
        id: 'sellers',
        title: 'Sellers',
        path: '/sellers',
    },
    {
        id: 'about',
        title: 'About',
        path: '/about'
    },
    {
        id: 'contacts',
        title: 'Contacts',
        path: '/contacts'
    }
]

const ShopsInfo = [
    {
        id: 'butaOfficial',
        title: 'Buta Official',
        link: 'https://butatobacco.com',
        path: '/butatobacco',
        icon: 'icon',
        logo: 'logo',
        delivery: 'Delivery is carried out in the following periods of time: ...',
        products: [
            {
                title: 'Tobacco',
                brands: [
                    {
                        id: 'buta',
                        name: 'Buta',
                        img: 'Brand Image',
                        flavors: 'Flavors list',
                    }
                ]
            }
        ]
    },
    {
        id: 'shishastore',
        title: 'Shishastore',
        link: 'https://shishastore.com.ua',
        path: '/shishastore',
        icon: 'icon',
        logo: 'logo',
        delivery: 'Delivery is carried out in the following periods of time: ...',
        products: [
            {
                title: 'Tobacco'
            },
            {
                title: 'Coal'
            },
            {
                title: 'Mouthpieces'
            },
            {
                title: 'Equipment'
            },
            {
                title: 'Hookahs'
            }
        ]
    }
] 

module.exports = { Navigation, ShopsInfo }






// {
//     title: 'Tobacco',
//     brands: [
//         {
//             id: 'buta',
//             name: 'Buta',
//             img: 'Brand Image',
//             flavors: 'Flavors list',
//         },
//         {
//             id: 'serbetli',
//             name: 'Serbetli',
//             img: 'Brand Image',
//             flavors: 'Flavors list',
//         },
//         {
//             id: 'darkside',
//             name: 'DarkSide',
//             img: 'Brand Image',
//             flavors: 'Flavors list',
//         }
//     ]
// },
// {
//     title: 'Coal',
//     brands: [
//         {
//             id: 'panda',
//             name: 'Panda Coal',
//             img: 'Brand Image',
//             variety: {
//                 black: {
//                     id: 'pandaBlack',
//                     title: 'Panda Black',
//                     form: '25x25',
//                     price: {
//                         wholesale: 120,
//                          retail: 140
//                     }
//                 },
//                 gold: {
//                     id: 'pandaRed',
//                     title: 'Panda Red',
//                     form: '22x22',
//                     price: {
//                         wholesale: 130,
//                          retail: 150
//                     }
//                 }
//             }
//         }
//     ]
// },
// {
//     title: 'Mouthpieces',
// }
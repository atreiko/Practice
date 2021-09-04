import { butaFlavors } from "./assets/img/tobacco"
import { serbetliFlavors} from './assets/img/tobacco/'
import { pandaVarieties } from './assets/img/coal/index'
import  { yahyaVarieties }  from './assets/img/coal/index'

export const shops = [
    {
        id: 'buta',
        title: 'Buta',
        link: 'https://butatobacco.com/',
        path: '/buta',
        content: 'buta content',
        delivery: 'Delivery is carried out in the following periods of time: Orders placed and confirmed before 09:30 are delivered from 10:00 to 12:00; Orders placed and confirmed before 11.30 are delivered from 12:00 to 15:00; Orders placed and confirmed before 14:30 are delivered from 15:00 to 18:30; Orders placed and confirmed before 19:30 are delivered until 22:00;',
        tabs: ['Tobacco'],
        tobacco: [
            {
                title: 'Buta',
                id: 'buta',
                50: butaFlavors,
                1000: butaFlavors,
                cards: butaFlavors,
                price: {
                    50: 45,
                    1000: 865
                },
                characteristic: {
                    description: '',
                    
                }
            }
        ],
        

    },
    {
        id: 'shishastore',
        title: 'Shishastore',
        link: 'https://shishastore.com.ua/',
        path: '/shishastore',
        content: 'shishastore content',
        delivery: 'Delivery terms:Targeted delivery of NP (carried out with full payment for the goods on the card).When placing an order before 16:00 - dispatch will be made on the same day. Orders placed after 16:00 are dispatched the next business day.Payment and delivery methods:Cash on delivery (minimum order amount from 200 hryvnia)Transfer to card (Privat Bank and Monobank)Payment to current account',
        tabs: ['Tobacco', 'Coal', 'Mouthpieces', 'Equipment', 'Hookahs'],
        accessory: ['Bowls', 'Flasks', 'Hoses', 'Heat Control', 'Cleanse', 'Rubbers'],
        tobacco: [
            {
                title: 'All',
                id: 'tobaccoAll',
                cards: [...serbetliFlavors, ...butaFlavors]
            },
            {
                title: 'Buta',
                id: 'buta',
                50: butaFlavors,
                1000: butaFlavors,
                cards: butaFlavors,
                price: {
                    50: 75,
                    1000: 1100
                },
                characteristic: {
                    description: '',
                    
                }
            },
            {
                title: 'Serbetli',
                id: 'serbetli',
                50: serbetliFlavors,
                1000: serbetliFlavors,
                cards: serbetliFlavors,
                price: 50,
                characteristic: {
                    description: '',
                    
                },
                logo: ''
            },
        ],
        coal: [
            {
                title: 'All',
                id: 'coalAll',
                cards: [...pandaVarieties, ...yahyaVarieties]
            },
            {
                title: 'Yahya',
                id: 'yahyaCoal',
                cards: yahyaVarieties,
                price: {
                    '1': '120',
                    '10': '110',
                    '40': '90',
                    '100': '80'
                },
                logo: '',
                characteristic: {
                    description: '',
                    
                }
            },
            {
                title: 'Panda',
                id: 'panda',
                cards: pandaVarieties,
                price: {
                    '1': '130',
                    '10': '120',
                    '40': '100',
                    '100': '85'
                },
                logo: '',
                characteristic: {
                    description: '',
                    
                }
            },
        ]
    },
    {
        id: 'smokybox',
        title: 'Smokybox',
        link: 'https://smokybox.com.ua/',
        path: '/smokybox',
        content: 'smokybox content', 
        delivery: 'Pickup from the store works: The assortment of goods in the store may pleasantly surprise you! Sunday - Thursday from 11:00 to 20:00. Friday - Saturday from 9:30 am to 9:00 pm. Pickup address: Kiev st. m, Olympic st. Business 22 (Dimitrova). Monday - Sunday from 10:00 to 20:00. Pickup address: Kiev st. m, Kontraktova Ploscha st. Lower Shaft 13', 
        tabs: ['Tobacco', 'Coal', 'Mouthpieces', 'Equipment', 'Hookahs'],
        accessory: ['Bowls', 'Flasks', 'Hoses', 'Heat Control', 'Cleanse', 'Rubbers'],
        tobacco: [
            {
                title: 'AllTobacco',
                id: 'tobaccoAll',
                cards: [...serbetliFlavors, ...butaFlavors]
            },
            {
                title: 'Buta',
                id: 'buta',
                50: butaFlavors,
                1000: butaFlavors,
                flavors: butaFlavors,
                price: {
                    50: 75,
                    1000: 1100
                },
                logo: '',
                characteristic: {
                    description: '',
                    
                }
            },
            {
                title: 'Serbetli',
                id: 'serbetli',
                50: serbetliFlavors,
                1000: serbetliFlavors,
                flavors: serbetliFlavors,
                price: 50,
                characteristic: {
                    description: '',
                    
                },
                logo: '',
            },
        ],
        coal: [
            {
                title: 'All',
                id: 'coalAll',
                cards: [...pandaVarieties, ...yahyaVarieties]
            },
            {
                title: 'Panda',
                id: 'panda',
                cards: pandaVarieties,
                price: {
                    '1': '130',
                    '10': '120',
                    '40': '100',
                    '100': '85'
                },
                logo: '',
                characteristic: {
                    description: '',
                    
                }
            },
            {
                title: 'Yahya',
                id: 'yahyaCoal',
                cards: yahyaVarieties,
                price: {
                    '1': '120',
                    '10': '110',
                    '40': '90',
                    '100': '80'
                },
                logo: '',
                characteristic: {
                    description: '',
                    
                },
                
            },
        ],
    }
]

import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import s from './CardsContainer.module.css'

const CardsContainer = ({ product }) => {
    const [cards, setCards] = useState([])
    console.log(product);

    const getCards = (product) => {
        // switch (product) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
    }
    
    // useEffect(() => {
    //     getInfo()
    // }, [])

    // const getInfo = (product) => {
    //     if (product?.length > 0) {
    //         const collection = product.map(t => {
    //             return t.cards
    //         })
    //         setCards(collection)
    //     }
    // }


    return (
        <div className={s.wrapper}>
            {/* {
                product?.length > 0 ?
                    product.forEach(prod => (
                        prod.cards.map(c => (
                            <Card key={c.id} title={c.title} url={c.url ? c.url : null} />
                        ))
                    )) : null
            } */}
            {/* {
                cards?.length > 0 ?
                    cards.map(card => (
                        <Card key={card.id} title={card.title} url={card.url} desc={card.desc} tags={card.tags} />
                    )) : null
            } */}
        </div>
    )
}

export default CardsContainer

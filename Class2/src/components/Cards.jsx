import React from 'react'
import Card from './Card'

const Cards = () => {

  let products = [
    {title: "Modern Sofa",desc: "Comfortable and stylish sofa for your living room.",img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",price: 45000 },
    {title: "Luxury Chair",desc: "Elegant chair with a modern design for your home.",img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91", price: 18000},
    {title: "Wooden Table",desc: "Beautiful wooden table perfect for dining and living spaces.",img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc", price: 35000 },
    {title: "Modern Bed",desc: "Premium comfortable bed with a stylish modern design.",img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",price: 55000},
    {title: "Dining Chair",desc: "Simple and comfortable dining chair for your dining room.",img: "https://images.unsplash.com/photo-1503602642458-232111445657", price: 9500},
    {title: "Office Chair",desc: "Comfortable office chair designed for everyday use.",img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8", price: 15000 },
    {title: "Wooden Cabinet",desc: "Spacious wooden cabinet for elegant home storage.",img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2",price: 28000},
    {title: "Side Table",desc: "Minimal side table that adds style to your room.",img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",price: 12000},
    {title: "Luxury Sofa",desc: "Premium sofa with a beautiful and comfortable design.",img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25", price: 75000},
    {title: "Modern Lamp",desc: "Stylish decorative lamp for a warm and beautiful interior.",img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",price: 8500 },
    {title: "TV Console",desc: "Modern TV console with spacious storage and an elegant wooden finish.",img: "https://images.unsplash.com/photo-1593784991095-a205069470b6",price: 32000},
    {title: "Bookshelf",desc: "Stylish wooden bookshelf perfect for organizing books and decor items.",img: "https://images.unsplash.com/photo-1594620302200-9a762244a156",price: 22000}
]

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">

        {
          products.map(function(product) {
            return (
              <Card title={product.title}img={product.img}desc={product.desc}price={product.price}/>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData //this way will still render the ul
  //const pizzas = [] //this is a truthy val
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* and operator short curcit*/}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />
          })}
        </ul>
      )} */}

      {/* ternary */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisie. 6 creative dishes to choose from. All from
            our stove oven, all organic all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />
            })}
          </ul>
        </>
      ) : (
        <p>We are still workin on our menu. Please come back later</p>
      )}
    </main>
  )
}
function Pizza({ pizzaObj }) {
  //console.log(pizzaObj.photoName)

  //a qucick way to not display something - later we will learn a better way
  //if (pizzaObj.soldOut) return null

  return (
    // <li className="pizza">
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) {
  //   alert('We are open')
  // } else {
  //   alert('We are close')
  // }

  //this is an example of an early return. This is more useful for when returning a component
  //if (!isOpen) return <p>Sorry we are closed</p>

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently open! */}

      {/* and operator */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* ternary operator */}
      {isOpen ? <Order closeHour={closeHour} /> : <p>Sorry we are closed</p>}
    </footer>
  )
}

function Order({ closeHour }) {
  //const { closeHour } = props
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//React before 18
// import ReactDOM from 'react-dom'
// React.render(<App/>)

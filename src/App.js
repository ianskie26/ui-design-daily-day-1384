import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Filters from "./components/Filters"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Cards
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Banner />
      <Filters />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
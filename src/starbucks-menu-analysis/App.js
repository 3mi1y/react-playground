import React from 'react'
import DATA from './MenuData'
import DrinkList from './DrinkList'
import Header from './Header'

const App = () => {
  const classicEspressoDrinks = DATA.filter(drink => {
    return drink.category === 'Classic Espresso Drinks'
  })

  const signatureEspressoDrinks = DATA.filter(drink => {
    return drink.category === 'Signature Espresso Drinks'
  })

  const icedBeverages = DATA.filter(drink => {
    return drink.category === 'Shaken Iced Beverages'
  })

  const smoothies = DATA.filter(drink => {
    return drink.categofy === 'Smothies'
  })

  const lessThanOneHundred = DATA.filter(drink => {
    return drink.calories < 100
  })

  const decafOptions = DATA.filter(drink => {
    return drink.caffeine === '0%'
  })

  const sugarFree = DATA.filter(drink => {
    return drink.sugar === '0'
  })

  const lactoseIntolerant = DATA.filter(drink => {
    const arr = drink.beveragePrep.split(' ')
    return (arr[arr.length - 1] !== 'Milk')
  })

  return (
    <div>
      <Header />
      <h3>Challenge One</h3>
      <p>Use filter and map to display drinks by category</p>
      <p>Display all of the Classic Espresso Drinks, all the Signature Espresso Drinks, Shaken Iced Beverages, and Smoothies</p>

      <h1>Classic Espresso Drinks</h1>
      <DrinkList drinkList={classicEspressoDrinks} />

      <h1>Signature Espresso Drinks</h1>
      <DrinkList drinkList={signatureEspressoDrinks} />

      <h1>Iced Beverages</h1>
      <DrinkList drinkList={icedBeverages} />

      <h1>Smoothies</h1>
      <DrinkList drinkList={smoothies} />

      <h1>Healthy Options</h1>
      <p>At Starbucks, our goal is to make sure everyone feels welcome, which is why we have a drink for everybody.</p>
      <p>Create a limited Menu of drinks with less than 100 calories</p>
      <DrinkList drinkList={lessThanOneHundred} />

      <h1>Love the taste but not the Caffeine Rush?</h1>
      <p>Create a menu containing decaf options.</p>
      <DrinkList drinkList={decafOptions} />

      <h1>Sugar Free Menu</h1>
      <p>Our sugar free options</p>
      <DrinkList drinkList={sugarFree} />

      <h3>Lactose Intollerant</h3>
      <p>Menu for lactose intollerant folks</p>
      <p>Create a menu for lactose intolerant people</p>
      <DrinkList drinkList={lactoseIntolerant} />

    </div>
  )
}

export default App

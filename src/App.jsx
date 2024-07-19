import './App.css'
import React, { useEffect, useState } from "react";

const App = () => {

const [totalStrength, setTotalStrength] = useState(0)
const [totalAgility, setTotalAgility] = useState(0)
const [team, setTeam] = useState([])
const [money, setMoney] = useState(100)
const [zombieFighters, setZombieFighters] = useState([{
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
]);
  
//Adding strength through reduce()
// const addToStrength = () => {
//   setTotalStrength(team.reduce((total, member) => total + i.member.strength, 0))
// }

  const handleAddFighter = (i) => {
  
    if (money >= i.zombie.price) {
      setMoney(money - i.zombie.price)
      setTotalStrength(totalStrength + i.zombie.strength)
      setTotalAgility(totalAgility + i.zombie.agility)
      setTeam([...team, i])
    
    } else {
      console.log('not enough money')
    }
  }

  const handleRemoveFighter = (i, idx) => {
    setMoney(money + (i.zombie.price))
    setTotalStrength(totalStrength - i.zombie.strength)
    setTotalAgility(totalAgility - i.zombie.agility)
    setTeam(team.filter((i, index ) => index !== idx))
  }

  return (
    <>
    <div id="title">
        <h1>Zombie Fighters</h1>
    </div>

    <div id="moneyUi">
      <h2>Money: {money}</h2>
    </div>

    <div id="totalStrength">
      <h2>Strength: {totalStrength}</h2>
    </div>

    <div id="totalAgility">
      <h2>Agility: {totalAgility}</h2>
    </div>

    <div id="team">
      <h2>Team:</h2>
      {team.length === 0 ? <p>Pick some team members!</p> : 
      <ul>
        {team.map((i, idx) =>
        <li key={idx}>
          <img src={i.zombie.img} />
          <h4>{i.zombie.name}</h4>
            <div id="zombieDetails">
                <span>Price: {i.zombie.price}</span>
                <span>Strength: {i.zombie.strength}</span>
                <span >Agility: {i.zombie.agility}</span>
            </div>
          <button id="imSpecial" onClick={() => handleRemoveFighter(i, idx)}>Sell Fighter</button>
        </li> 
        )}
      </ul>
    }
    </div>

    <div id="store">
      <h2>Store:</h2>
    <ul>
      {zombieFighters.map((zombie, idx) => 
      <li key={idx}>
        <img src={zombie.img} />
        <h4>{zombie.name}</h4>
        <div id="zombieDetails">
            <span>Price: {zombie.price}</span>
            <span>Strength: {zombie.strength}</span>
            <span>Agility: {zombie.agility}</span>
        </div>
        <button onClick={() => handleAddFighter({ zombie })}>Add Fighter</button>
      </li>
      )}
    </ul>
    </div>
    </>
  )
}

export default App
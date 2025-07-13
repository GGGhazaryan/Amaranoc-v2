import { useState } from 'react'
export default function PeopleCounter({ label }) {

const [count, setCount] = useState(1)
  const increase = () => {
    setCount(prev => prev + 1)
  }

  const decrease = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="peopleCount">
      <div className="h3second">{label}</div>
      <div className="peopleCounter">
        <button className="minusBtn countBtn" onClick={decrease}>-</button>
        <input
          type="number"
          className="peoplecountInput"
          value={count}
          readOnly
        />
        <button className="plusBtn countBtn" onClick={increase}>+</button>
      </div>
    </div>
  )
}
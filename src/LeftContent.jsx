import './App.css'
import { useState } from 'react';

import {
  regions,
  priceCurrencies,
  nightOptions,
  roomCounts,
  bathroomCounts,
  poolOptions,
  features
} from './DataBase.js';
import PeopleCounter from './PeopleCounter.jsx';

export default function LeftContent() {
  const [clickedRegions, setClickedRegions] = useState(regions.map(() => false));

  const toggleRegion = (index) => {
    setClickedRegions(prev => {
      const newClicked = [...prev];
      newClicked[index] = !newClicked[index];
      return newClicked;
    });
  };

  return (
    <aside className="container">
      <div className="mainLeftContentDiv">
        <h3 className="h3leftcontent">Տարածաշրջան</h3>

        <div className="checkboxsArray">
          {regions.map((region, index) => (
            <label className="customCheckbox" key={index}>
              <input type="checkbox" checked={clickedRegions[index]} readOnly />
              <span
                className="checkmark"
                style={{ backgroundColor: clickedRegions[index] ? 'black' : 'transparent' }}
                onClick={() => toggleRegion(index)}
              ></span>
              {region.label} {region.count}
            </label>
          ))}
        </div>

        <div className="priceRow">
          <span className="label">Արժեք</span>
          <div className="currencies">
            {priceCurrencies.map((currency, index) => (
              <button key={index} className="priceBtns">{currency}</button>
            ))}
          </div>
        </div>

        <div className="startEndInputsArray">
          <input type="text" className="startInput" placeholder="Սկսած" />_
          <input type="text" className="endInput" placeholder="Միչնև" />
        </div>

        <PeopleCounter label="Մարդկանց թույլատրելի քանակ" />

        <div className="nightAvalable">
          <h3 className="h3third">Գիշերակացի առկայություն</h3>
          <div className="nightBtns">
            {nightOptions.map((option, index) => (
              <button key={index} className={`${option === 'Ոչ' ? 'noBtn' : option === 'Այո' ? 'yesBtn' : 'allBtn'}`}>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="peoplesNight">
          <PeopleCounter label="Մարդկանց թույլատրելի քանակ Գիշերակացության համար" />
        </div>

        <div className="roomsCount">
          <label className="roomsLabel">Սենյակների քանակ</label>
          <div className="roomBtns">
            {roomCounts.map((count, index) => (
              <button key={index} className={count === 'Բոլորը' ? 'allBtn' : count === '6 և ավելի' ? 'roomBtn roomBtn6' : 'roomBtn'}>
                {count}
              </button>
            ))}
          </div>
        </div>

        <div className="bathroomCount">
          <label className="sectionLabel">Սանհանգույցների քանակ</label>
          <div className="bathroomBtns">
            {bathroomCounts.map((count, index) => (
              <button key={index} className={count === 'Բոլորը' ? 'allBtn' : 'bathroomBtn'}>
                {count}
              </button>
            ))}
          </div>
        </div>

        <div className="poolSection">
          <label className="sectionLabel">Լողավազան</label>
          <div className="poolBtns">
            {poolOptions.map((option, index) => (
              <button key={index} className={option === 'Բոլորը' ? 'allBtn' : 'poolBtn'}>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="featuresSection">
          <label className="sectionLabel">Առավելություններ</label>
          <div className="checkboxsArray">
            {features.map((feature, index) => (
              <label className="customCheckbox" key={index}>
                <input type="checkbox" />
                <span className="checkmark"></span> {feature}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

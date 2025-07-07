import './App.css'
import { useState } from 'react'

function Header() {
  return (
    <header>
      <a href="https://amaranoc.am">
        <img className="logo" src="logo.svg" alt="amaranoclogo" />
      </a>

      <nav className="allOptions">
        <a className="option1" href="https://amaranoc.am/am">Գլխավոր</a>
        <a className="option2" href="https://amaranoc.am/am/sales">Զեղչեր</a>
        <a className="option3" href="https://amaranoc.am/am/services">Ծառայություններ</a>
        <a className="option4" href="https://amaranoc.am/am/about-us">Մեր մասին</a>
      </nav>

      <div className="headerRightPlaceholder">
        <div className="mainIcons">
          <i className="fa-solid fa-globe"></i>
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>

        <div className="inputPlaceholder">
          <input type="text" placeholder="Որոնում" className="inputToSearch" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  )
}

function PeopleCounter({ label }) {
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

function LeftContent() {
  return (
    <aside className="container">
      <div className="mainLeftContentDiv">
        <h3 className="h3leftcontent">Տարածաշրջան</h3>

        <div className="checkboxsArray">
          <label className="customCheckbox">
            <input type="checkbox" className="checkbox1" />
            <span className="checkmark"></span> Դիլիջան 88
          </label><br />

          <label className="customCheckbox">
            <input type="checkbox" className="checkbox2" />
            <span className="checkmark"></span> Ծաղկաձոր 63
          </label><br />

          <label className="customCheckbox">
            <input type="checkbox" className="checkbox3" />
            <span className="checkmark"></span> Ձորաղբյուր 17
          </label><br />

          <label className="customCheckbox">
            <input type="checkbox" className="checkbox4" />
            <span className="checkmark"></span> Երևան 15
          </label><br />

          <label className="customCheckbox">
            <input type="checkbox" className="checkbox5" />
            <span className="checkmark"></span> Աշտարակ 15
          </label><br />
        </div>

        <div className="priceRow">
          <span className="label">Արժեք</span>
          <div className="currencies">
            <button id="priceBtn1" className="priceBtns">֏</button>
            <button className="priceBtns">$</button>
            <button className="priceBtns">€</button>
            <button className="priceBtns">₽</button>
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
            <button className="allBtn">Բոլորը</button>
            <button className="yesBtn">Այո</button>
          </div>
          <button className='noBtn'>Ոչ</button><br />
        </div>

        <div className="peoplesNight">
          <PeopleCounter label="Մարդկանց թույլատրելի քանակ Գիշերակացության համար" />
        </div>

        <div className="roomsCount">
          <label className="roomsLabel">Սենյակների քանակ</label>
          <div className="roomBtns">
            <button className="allBtn">Բոլորը</button>
            <button className="roomBtn">1</button>
            <button className="roomBtn">2</button>
            <button className="roomBtn">3</button>
            <button className="roomBtn">4</button>
            <button className="roomBtn">5</button>
            <button className="roomBtn roomBtn6">6 և ավելի</button>
          </div>
        </div>

        <div className="bathroomCount">
          <label className="sectionLabel">Սանհանգույցների քանակ</label>
          <div className="bathroomBtns">
            <button className="allBtn">Բոլորը</button>
            <button className="bathroomBtn">1</button>
            <button className="bathroomBtn">2</button>
            <button className="bathroomBtn">3+</button>
          </div>
        </div>

        <div className="poolSection">
          <label className="sectionLabel">Լողավազան</label>
          <div className="poolBtns">
            <button className="allBtn">Բոլորը</button>
            <button className="poolBtn">Բաց</button>
            <button className="poolBtn">Փակ</button>
            <button className="poolBtn">Տաքացվող</button>
            <button className="poolBtn">Առանց լողավազանի</button>
          </div>
        </div>

        <div className="featuresSection">
          <label className="sectionLabel">Առավելություններ</label>
          <div className="checkboxsArray">
            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Շոգեբաղնիք
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Ջակուզի
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Բիլիարդ
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Սեղանի թենիս
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Բացօթյա տաղավար
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Փակ տաղավար
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Մանղալ
            </label><br />

            <label className="customCheckbox">
              <input type="checkbox" />
              <span className="checkmark"></span> Թոնիր
            </label>
          </div>
        </div>
      </div>
    </aside>
  )
}

function RightContent() {
const cards = [
  { id: 1, image: '2photo.webp', title: 'Վարձով Տուն', price: 'Սկսած 20,000 ֏', location: 'Դիլիջան', people: 'Մինչև 6 մարդ' },
  { id: 2, image: 'firstphoto.webp', title: 'Աղբյուրի Տուն', price: 'Սկսած 15,000 ֏', location: 'Ձորաղբյուր', people: 'Մինչև 4 մարդ' },
  { id: 3, image: '3photo.webp', title: 'Լեռնային Տուն', price: 'Սկսած 25,000 ֏', location: 'Ծաղկաձոր', people: 'Մինչև 8 մարդ' },
  { id: 4, image: '4photo.webp', title: 'Բնակարան Տուն', price: 'Սկսած 18,000 ֏', location: 'Երևան', people: 'Մինչև 5 մարդ' },
  { id: 5, image: '5photo.webp', title: 'Ստանդարտ Տուն', price: 'Սկսած 12,000 ֏', location: 'Աշտարակ', people: 'Մինչև 3 մարդ' },
  { id: 6, image: '6photo.webp', title: 'Ակտիվ հանգիստ', price: 'Սկսած 30,000 ֏', location: 'Դիլիջան', people: 'Մինչև 10 մարդ' },
  { id: 7, image: '7photo.webp', title: 'Հարմարավետ Տուն', price: 'Սկսած 22,000 ֏', location: 'Գյումրի', people: 'Մինչև 6 մարդ' },
  { id: 8, image: '8photo.webp', title: 'Նավակ Տուն', price: 'Սկսած 17,000 ֏', location: 'Սևան', people: 'Մինչև 4 մարդ' },
  { id: 9, image: '9photo.webp', title: 'Ծովի Կողմ', price: 'Սկսած 35,000 ֏', location: 'Վանա լիճ', people: 'Մինչև 8 մարդ' },
  { id: 10, image: '10photo.webp', title: 'Բարձրլեռնային Տուն', price: 'Սկսած 28,000 ֏', location: 'Ճամբարակ', people: 'Մինչև 7 մարդ' },
  { id: 11, image: '11photo.webp', title: 'Մխիթարիչ Տուն', price: 'Սկսած 21,000 ֏', location: 'Երևան', people: 'Մինչև 5 մարդ' },
  { id: 12, image: '12photo.webp', title: 'Հարմարավետ Բնակարան', price: 'Սկսած 19,000 ֏', location: 'Հրազդան', people: 'Մինչև 4 մարդ' },
  { id: 13, image: '13photo.webp', title: 'Լիճափնյա Տուն', price: 'Սկսած 24,000 ֏', location: 'Սևան', people: 'Մինչև 6 մարդ' },
  { id: 14, image: '14photo.webp', title: 'Փոքր Վիլլա', price: 'Սկսած 14,000 ֏', location: 'Աշտարակ', people: 'Մինչև 2 մարդ' },
  { id: 15, image: '15photo.webp', title: 'Հասանելի Տուն', price: 'Սկսած 10,000 ֏', location: 'Երևան', people: 'Մինչև 4 մարդ' },
   { id: 5, image: '5photo.webp', title: 'Ստանդարտ Տուն', price: 'Սկսած 12,000 ֏', location: 'Աշտարակ', people: 'Մինչև 3 մարդ' },
  { id: 6, image: '6photo.webp', title: 'Ակտիվ հանգիստ', price: 'Սկսած 30,000 ֏', location: 'Դիլիջան', people: 'Մինչև 10 մարդ' },
   { id: 2, image: 'firstphoto.webp', title: 'Աղբյուրի Տուն', price: 'Սկսած 15,000 ֏', location: 'Ձորաղբյուր', people: 'Մինչև 4 մարդ' },
  { id: 3, image: '3photo.webp', title: 'Լեռնային Տուն', price: 'Սկսած 25,000 ֏', location: 'Ծաղկաձոր', people: 'Մինչև 8 մարդ' },
  { id: 4, image: '4photo.webp', title: 'Բնակարան Տուն', price: 'Սկսած 18,000 ֏', location: 'Երևան', people: 'Մինչև 5 մարդ' },

];


  return (
    <main className="rightContentWrapper">
      {cards.map(card => (
        <div key={card.id} className="card" style={{backgroundImage:`url(${card.image})`}}>
         
          <div className="cardInfo">
            <h3>{card.title}</h3>
            <p>{card.price}</p>
            <p>{card.location}</p>
            <p>{card.people}</p>
          </div>
        </div>
      ))}
    </main>
  )
}
function GeneralFooter(){
return(
  <>

    <footer className="footerContainer">
      <div className="footerGlass">
        <h2>Տեղադրել հայտարարություն</h2>
        <p>Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ</p>
        <form className="footerForm">
          <input type="text" placeholder="Անուն Ազգանուն" required />
          <input type="tel" placeholder="Հեռախոսահամար" required />
          <input type="email" placeholder="Էլ․ հասցե" required />
          <button type="submit">Ուղարկել</button>
        </form>
      </div>
    </footer>

  </>
)
}

function Footer() {
  return (
    <div className="finalFooter">
      <div className="footerGlass">
        <h2>Կոնտակտներ</h2>
        <ul>
          <li>041-611-611 / 044-611-611</li>
          <li>address.amaranoc@gmail.com</li>
          <li>amaranoc.am</li>
          <li>Թումանյան 5</li>
          <li>Գաղտնիության քաղաքականություն</li>
        </ul>
      </div>
    </div>
  );
}



function App() {
  return (
    <>
      <Header />
      <div className="contentWrapper">
        <LeftContent />
        <RightContent />
     
      </div>
         <GeneralFooter />
         <Footer />
    </>
  )
}

export default App

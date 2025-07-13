import './App.css'
import { useState } from 'react'
import Header from './Header.jsx'
import LeftContent from './LeftContent.jsx'
import { RightContent } from './RightContent.jsx';

import GeneralFooter from './GeneralFooter.jsx'
import Footer from './Footer.jsx'


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
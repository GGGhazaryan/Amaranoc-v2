import LeftContent from './components/LeftContent/LeftContent';
import RightContent from './components/RightContent/RightContent';
import GeneralFooter from './components/GeneralFooter/GeneralFooter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './css/App.css';
import './css/index.css';


function App() {
  return (
    <div className="App">
    <Header />
      <div className="mainContentWrapper">
          <div className="rightContentWrapper">
        <LeftContent />
        <RightContent />
        </div>
      </div>
       <GeneralFooter />
       <Footer/>
    </div>
  );
}

export default App;

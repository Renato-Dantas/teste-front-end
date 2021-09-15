import './App.css';
import CarBag from './components/CarBag';
import Carousel from './components/Carousel';
import FistSection from './components/FirstSec';
import Header from './components/Header'
import Nav from './components/Nav'
import Products from './components/Products';



function App() {
  return (
    <div className='site-area'>
      <FistSection/>
      <Header>
        <CarBag/>
      </Header>
      <Nav></Nav>
      <Carousel></Carousel>
      <Products></Products>
    </div>
  );
}

export default App;

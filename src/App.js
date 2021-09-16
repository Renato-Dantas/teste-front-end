import './App.css';
import CarBag from './components/CarBag';
import Carousel from './components/Carousel';
import FistSection from './components/FirstSec';
import Header from './components/Header'
import Nav from './components/Nav'
import News from './components/News';
import Products from './components/Products';
import Store from './components/Store'



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
      <News></News>
      <Store></Store>
    </div>
  );
}

export default App;

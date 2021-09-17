import './App.css';
import CarBag from './components/CarBag';
import Carousel from './components/Carousel';
import FistSection from './components/FirstSec';
import Header from './components/Header'
import Nav from './components/Nav'
import News from './components/News';
import Products from './components/Products';
import Store from './components/Store'
import api from '../src/api/api'
import { useEffect } from 'react';
import Button from './Button';
import Branding from './components/Branding';
import About from './components/About';
import Comments from './components/Comments';
import Info from './components/Info';

const url = 'https://swapi.dev/api/people/1'

function App() {
  useEffect(()=>{
    
    let request = require('request')
    request(url, function(error, res, body){
      console.log(JSON.parse(body))
    })

  },[])

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
      <Button></Button>
      <Branding></Branding>
      <About></About>
      <Comments></Comments>
      <Info></Info>
    </div>
  );
}

export default App;

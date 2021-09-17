import './App.css';
import CarBag from './components/CarBag';
import Carousel from './components/Carousel';
import FistSection from './components/FirstSec';
import Header from './components/Header'
import Nav from './components/Nav'
import News from './components/News';
import Products from './components/Products';
import Store from './components/Store'
import Button from './components/Button';
import Branding from './components/Branding';
import About from './components/About';
import Comments from './components/Comments';
import Info from './components/Info';
import data from './data/products.json'
import Product from './components/Product'

const productItem = data.products;

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
      <Store>
        {productItem.map((prod,id)=>{
          return <Product key={id} name={productItem[id].productName} description ={productItem[id].descriptionShort} photo = {productItem[id].photo} price = {`R$ ${productItem[id].price /100}` }></Product>
        })}
      </Store>
      <Button></Button>
      <Branding></Branding>
      <About></About>
      <Comments></Comments>
      <Info></Info>
    </div>
  );
}

export default App;

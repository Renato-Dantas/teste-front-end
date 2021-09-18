import "./App.css";
import CarBag from "./components/CarBag";
import Carousel from "./components/Carousel";
import FistSection from "./components/FirstSec";
import Header from "./components/Header";
import Nav from "./components/Nav";
import News from "./components/News";
import Products from "./components/Products";
import Store from "./components/Store";
import Button from "./components/Button";
import Branding from "./components/Branding";
import About from "./components/About";
import Comments from "./components/Comments";
import Info from "./components/Info";
import data from "./data/products.json";
import Product from "./components/Product";
import Modal from "./components/Modal";
import { useState } from "react";
import Footer from "./components/Footer";
import ModalItem from "./components/ModalItem";

const productItem = data.products;

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [id, setId] = useState();

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  function handleProductSelect(id) {
    setIsModalOpened(true);
    setId(id);
  }

  return (
    <div className="site-area">
      <FistSection />
      <Header>
        <CarBag />
      </Header>
      <Nav></Nav>
      <Carousel></Carousel>
      <Products></Products>
      <News></News>
      {isModalOpened ? (
        <Modal id={id} onClose={handleModalClose}>
          <ModalItem
            key={id}
            onClose={handleModalClose}
            name={productItem[id].productName}
            description={productItem[id].descriptionShort}
            photo={productItem[id].photo}
            price={`R$ ${productItem[id].price / 100}`}
          ></ModalItem>
        </Modal>
      ) : null}
      <Store>
        {productItem.map((prod, id) => {
          return (
            <Product
              key={id}
              onClick={() => {
                handleProductSelect(id);
              }}
              name={productItem[id].productName}
              description={productItem[id].descriptionShort}
              photo={productItem[id].photo}
              price={`R$ ${productItem[id].price / 100}`}
            ></Product>
          );
        })}
      </Store>
      <Button></Button>
      <Branding></Branding>
      <About></About>
      <Comments></Comments>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;

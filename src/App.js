import './App.css';
import CarBag from './components/CarBag';
import FistSection from './components/FirstSec';
import Header from './components/Header'
import Nav from './components/Nav'



function App() {
  return (
    <div className='site-area'>
      <FistSection/>
      <Header>
        <CarBag/>
      </Header>
      <Nav></Nav>
    </div>
  );
}

export default App;

import './App.css';
import CarBag from './components/CarBag';
import FistSection from './components/FirstSec';
import Header from './components/Header'



function App() {
  return (
    <div className='site-area'>
      <FistSection/>
      <Header>
        <CarBag/>
      </Header>
    </div>
  );
}

export default App;

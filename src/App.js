import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Banner from './components/Banner';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">                 
        <Header />     
        <Hero />
        <Cards />
        <Banner />
        <Upcoming />
        <Footer />
    </div>
  );
}

export default App;

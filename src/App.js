import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">                 
        <Header />     
        <Hero />
        <Cards />
        <Banner />
    </div>
  );
}

export default App;

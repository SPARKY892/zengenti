import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">                 
        <Header />     
        <Hero />
        <Cards />
    </div>
  );
}

export default App;

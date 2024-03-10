import Content from './components/Content';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Portfolio from './components/Portfolio';
import Solution from './components/Solution';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Content/>
      <Solution/>
      <Portfolio/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Contact from './pages/ContactPage/Contact';
import About from './pages/AboutPage/About';
import Footer from './components/Footer';
import GlobalStyle from './GobalStyle';
import Home from './pages/HomePage/Home';
function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
     <Navbar />        
      <Switch>
        <Route  path="/" exact component={Home}/>
        <Route  path="/about"  component={About}/>
        <Route  path="/contact"  component={Contact}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;

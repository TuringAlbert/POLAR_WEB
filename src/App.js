import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import MyMove from './pages/MyMovePage/MyMove';
import Polar from './pages/PolarPage/Polar';
import Novelist from './pages/NovelistPage/Novelist';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mymove' exact component={MyMove} />
        <Route path='/polar' component={Polar} />
        <Route path='/novelist' component={Novelist} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

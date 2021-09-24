import './App.css';
import { Header } from './TravelComponents/Header'
import { Body } from './TravelComponents/Body'
import { Footer } from './TravelComponents/Footer'
import { CGLines } from './TravelComponents/CGLines'
import { ContactUs } from './TravelComponents/ContactUs'
import { AboutUs } from './TravelComponents/AboutUs'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router >
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/covidguidelines">
            <CGLines />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
    </Router>
    </>    
  );
}

export default App;

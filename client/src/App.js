import "./App.css";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
 import EventPage from "./components/EventPage/EventPage";
//import Footer from './components/Footer/Footer';
import AppContainer from "./components/AppContainer/AppContainer";
//import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer/>}>
        <Route path="/event-page" element={<EventPage />} />
          {/* <Route index element={<Footer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

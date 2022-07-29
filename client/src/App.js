import './App.css';
import AppContainer from './components/AppContainer/AppContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EventPage from './components/EventPage/EventPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';
import AboutUsCards from './components/AboutUsCards/AboutUsCards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Navbar/>} />
        <Route index element={<ItemList />} />
        <Route index element={<AboutUsCards />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route index element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

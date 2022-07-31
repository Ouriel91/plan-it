import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from './components/EventPage/EventPage';
import Footer from './components/Footer/Footer';
import AppContainer from './components/AppContainer/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AppContainer />} />
          <Route path="/event-page/:id" element={<EventPage />} />
          {/* <Route index element={<Footer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

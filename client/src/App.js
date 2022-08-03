import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from './components/EventPage/EventPage';
import CardListConnector from  './components/Card/CardListConnector'
import AppContainerConnector from "./components/AppContainer/AppContainerConnector"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AppContainerConnector />} />
          <Route path="/event-page/:id" element={<EventPage />} />
          <Route path="/my-events" element={<CardListConnector />} />
          {/* <Route index element={<Footer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

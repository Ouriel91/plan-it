import './App.css';
import AppContainer from './components/AppContainer/AppContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EventPage from './components/EventPage/EventPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AppContainer />} />
          <Route path="/event-page" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

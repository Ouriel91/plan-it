import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListConnector from  './components/Card/CardListConnector'
import AppContainerConnector from './components/AppContainer/AppContainerConnector';
import EventPageConnector from './components/EventPage/EventPageConnector';
import LoginLogout from './components/LoginLogout/LoginLogout';

import {Helmet} from "react-helmet";
function App() {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Plan it.</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AppContainerConnector />} />
          <Route path="/event-page/:id" element={<EventPageConnector />} />
          <Route path="/my-events" element={<CardListConnector />} />
          <Route path="/login-logout" element={<LoginLogout />} />
          {/* <Route index element={<Footer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

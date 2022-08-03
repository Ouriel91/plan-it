import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import EventPage from './components/EventPage/EventPage';
import CardListConnector from './components/Card/CardListConnector'
import AppContainerConnector from "./components/AppContainer/AppContainerConnector"
import { Helmet } from "react-helmet";
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
            <Route path="/event-page/:id" element={<EventPage />} />
            <Route path="/my-events" element={<CardListConnector />} />
            {/* <Route index element={<Footer />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
=======
import CardListConnector from  './components/Card/CardListConnector'
import AppContainerConnector from './components/AppContainer/AppContainerConnector';
import EventPageConnector from './components/EventPage/EventPageConnector';

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
          {/* <Route index element={<Footer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> 5b3e1867f945275dd8370915b3514489dfa8977d
    </>

  );
}

export default App;

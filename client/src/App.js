import './App.css';
import {BrowserRouter} from "react-router-dom";
import EventPage from './components/EventPage/EventPage';
import Footer from './components/Footer/Footer';
import AppContainer from './components/AppContainer/AppContainer';

function App() {
  return (
 <BrowserRouter>
  <AppContainer/>
    {/* //   <Routes>
    //     <Route path="/">
    //     <Route index element={<Navbar/>} />
    //     <Route index element={<ItemList />} />
    //     <Route index element={<AboutUsCards />} />
    //       <Route path="/event-page" element={<EventPage />} />
    //       <Route index element={<Footer />} />
    //     </Route>
    //   </Routes> */}
</BrowserRouter>
  );
}

export default App;

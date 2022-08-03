import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import { useEffect } from "react";

function AppContainer({fetchPlansWithItemsAction}) {
  useEffect(() => {
    fetchPlansWithItemsAction();
  }, []);
  return <LandingPage />;
}

export default AppContainer;

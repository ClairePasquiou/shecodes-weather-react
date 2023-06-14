import Search from "./Search";
import Overview from "./Overview";
import Current from "./Current";
import Footer from "./Footer";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Weather-app-wrapper">
        <div className="Weather-app">
          <div className="Search-form">
            <Search />
          </div>
          <div>
            <Overview />
          </div>

          <div className="Current">
            <Current />
          </div>
          <div>
            <Forecast />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import ScrollButtons from "./components/ScrollButtons";
// import Settings from "./components/Settings";
//  import CountryDropdown from "./components/CountryDropdown";

const App = () => {
  const [mode, setMode] = useState("light");
  const [btn, setBtn] = useState("Enable Darkmode");
  const [color, setColor] = useState("black");
  // const [selectedCountry, setSelectedCountry] = useState("us");
  const [progress, setProgress] = useState(0);
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // const languageCode = 'en';

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtn("Disable DarkMode");
      setColor("white");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setBtn("Enable DarkMode");
      setColor("black");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} btn={btn} color={color} />
        {/* <CountryDropdown mode={mode} toggleMode={toggleMode} btn={btn} color={color}/> */}
        
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={4}
        />
        <Switch>
          <Route exact path="/">
            <News  
            //  languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              pageSize={pageSize}
              category="general"
              mode={mode}
              toggleMode={toggleMode}
            />
          </Route>
          <Route exact path="/business">
            <News  
            //  languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              country="in"
              pageSize={pageSize}
              category="business"
              mode={mode}
              toggleMode={toggleMode}
            />
          </Route>
          <Route exact path="/entertainment">
            <News 
              // languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              country="in"
              pageSize={pageSize}
              category="entertainment"
              mode={mode}
              toggleMode={toggleMode}
            />
          </Route>
          <Route exact path="/general">
            <News 
              // languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              pageSize={pageSize}
              category="general"
              mode={mode}
              toggleMode={toggleMode}
            />
          </Route>
          <Route exact path="/health">
            <News  
            //  languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              country="in"
              pageSize={pageSize}
              category="health"
              mode={mode}
              toggleMode={toggleMode}
            />
          </Route>
          <Route exact path="/science">
            <News  
            //  languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              country="in"
              pageSize={pageSize}
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News  
            //  languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              country="in"
              pageSize={pageSize}
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News  
            //  languageCode={languageCode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              country="in"
              pageSize={pageSize}
              category="technology"
            />
          </Route>
        </Switch>
        
        <ScrollButtons />
      </Router>
    </div>
  );
}

export default App;

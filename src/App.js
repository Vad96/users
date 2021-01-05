import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tabs/Tab";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs >
        <Tab label="Tab 1">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm" />
            <p>Tab 1 content</p>
          </div>
        </Tab>
        <Tab label="Tab 2">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw" />
            <p>Tab 2 content</p>
          </div>
        </Tab>
      </Tabs>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={UserInfo} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

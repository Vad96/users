import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id" component={UserInfo} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;

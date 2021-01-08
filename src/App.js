import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.scss";
const UserInfo = lazy(() => import("./pages/UserInfo"));

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Suspense fallback={<div>Завантаження...</div>}>
            <Route path="/user/:id" component={UserInfo} />
          </Suspense>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;

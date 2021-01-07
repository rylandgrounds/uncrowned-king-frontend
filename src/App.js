import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/auth";
import AuthRoute from "./util/AuthRoute";
import { sound } from "./util/audioStart";

//function handleMouseMove() {
//sound.play();
//}
function App() {
  return (
    <AuthProvider>
      <Router>
        <Container className="App" fluid>
          <Navbar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

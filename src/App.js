import React from "react";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"; // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import PostAJob from "./components/PostAJob";

import configureStore from "./store";
import { firebase as fbConfig, rrfConfig } from "./config";

const initialState = window && window.__INITIAL_STATE__; // set initial state here
const store = configureStore(initialState);
// Initialize Firebase instance
firebase.initializeApp(fbConfig);

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <Router>
          <NavBar />
          <Switch>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/job/:jobId">
              <Job />
            </Route>
            <Route path="/post-a-job">
              <PostAJob />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;

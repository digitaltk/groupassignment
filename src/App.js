import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TracerPage from "./components/TracerPage/TracerPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/tracer" component={TracerPage} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/legalpage" component={PrivacyPolicy} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

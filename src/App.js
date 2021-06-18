import { Route, Switch } from "react-router-dom";
import Cards from "./components/Cards";
import SubjectPage from "./components/SubjectPage";
import Payment from "./components/Payment";

function App() {
  return (
    <Switch>
      <Route path="/courses/:id" component={SubjectPage} />
      <Route path="/courses" component={SubjectPage} />
      <Route path="/payments/:id" component={Payment} />
      <Route path="/" exact component={Cards} />
    </Switch>
  );
}

export default App; //

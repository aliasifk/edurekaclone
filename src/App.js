import { Route, Switch } from "react-router-dom";
import Cards from "./components/Cards";
import SubjectPage from "./components/SubjectPage";

function App() {
  return (
    <Switch>
      <Route path="/courses/:id" exact component={SubjectPage} />
      <Route path="/" exact component={Cards} />
    </Switch>
  );
}

export default App; //

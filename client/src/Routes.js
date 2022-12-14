import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { useState, createContext } from "react";
import App from "./App";
import Papers from "./pages/Papers";
import AddPaper from "./components/AddPaper";
import ApprovedQuestions from "./components/ApprovedQuestions"
import Login from './pages/Login'
import Signup from './pages/Signup'

export const UserContext = createContext()

export const Routes = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route path="/" exact element={<App />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />

          <Route path="/addPaper" exact element={<AddPaper />} />
          <Route path="/previousYearPapers" exact element={<Papers />} />
          <Route path="/approvedQuestions" exact element={<ApprovedQuestions />} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

// export default Routes;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Covid from "../src/pages/Covid";
import Medicine from "./pages/Medicine";
import Doctors from "./pages/Doctors";
import Emergency from "./pages/Emergency";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductScreen from "./pages/screen/ProductScreen";
import { BrowserRouter, Route } from "react-router-dom";
import DoctorScreen from "./pages/screen/DoctorScreen";
import EmergencyScreen from "./pages/screen/EmergencyScreen";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Covid" component={Covid} />
        <Route exact path="/Medicine" component={Medicine} />
        <Route exact path="/meds/:id" component={ProductScreen} />
        <Route exact path="/Doctors" component={Doctors} />
        <Route exact path="/doctors/:id" component={DoctorScreen} />
        <Route exact path="/Emergency" component={Emergency} />
        <Route exact path="/ambulance/:id" component={EmergencyScreen} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
      </BrowserRouter>
  );
}

export default App;

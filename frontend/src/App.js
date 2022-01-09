import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import Covid from "../src/pages/Covid.js";
import Medicine from "./pages/Medicine.js";
import Doctors from "./pages/Doctors.js";
import Emergency from "./pages/Emergency.js";
import MedicineScreen from "./pages/screen/MedicineScreen.js";
import { BrowserRouter, Route , Redirect } from "react-router-dom";
import DoctorScreen from "./pages/screen/DoctorScreen.js";
import EmergencyScreen from "./pages/screen/EmergencyScreen.js";
import CartScreen from "./pages/screen/CartScreen.js";
import ProfileScreen from "./pages/screen/ProfileScreen";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import { Container } from "react-bootstrap";
import Navbar from "../src/components/Navbar.js";
import ShippingScreen from "./pages/screen/ShippingScreen";
import PaymentScreen from "./pages/screen/PaymentScreen";
import PlaceOrderScreen from "./pages/screen/PlaceOrderScreen";
import OrderScreen from "./pages/screen/OrderScreen";
import UserListScreen from "./pages/screen/UserListScreen";
import UserEditScreen from "./pages/screen/UserEditScreen";
import MedicineListScreen from "./pages/screen/MedicineListScreen";
import MedicineEditScreen from "./pages/screen/MedicineEditScreen";
import OrderListScreen from "./pages/screen/OrderListScreen";
import DoctorListScreen from "./pages/screen/DoctorListScreen";
import AmbulanceListScreen from "./pages/screen/AmbulanceListScreen";
import ChatScreen from './pages/screen/ChatScreen'
import AppoinmentScreen from "./pages/screen/AppoinmentScreen";
import AppoinmentListScreen from "./pages/screen/AppoinmentListScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Covid" component={Covid} />
      <Container>
        <Route exact path="/Medicine" component={Medicine} />
        <Route exact path="/meds/:id" component={MedicineScreen} />
        <Route exact path="/cart/:id?" component={CartScreen} />
        <Route exact path="/chat" component={ChatScreen} />
        <Route exact path="/Doctors" component={Doctors} />
        <Route exact path="/doctors/:id" component={DoctorScreen} />
        <Route exact path="/Emergency" component={Emergency} />
        <Route exact path="/ambulance/:id" component={EmergencyScreen} />

        <Route exact path="/Shipping" component={ShippingScreen} />
        <Route exact path="/payment" component={PaymentScreen} />
        <Route exact path="/order/:id" component={OrderScreen} />
        <Route exact path="/placeorder" component={PlaceOrderScreen} />
        <Route exact path="/appoinment" component={AppoinmentScreen} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/ProfileScreen" component={ProfileScreen} />
        <Route exact path="/admin/userlist" component={UserListScreen} />
        <Route exact path="/admin/medlist" component={MedicineListScreen} />
        <Route exact path="/admin/orderlist" component={OrderListScreen} />
        <Route exact path="/admin/doctorlist" component={DoctorListScreen} />
        <Route exact path="/admin/appoinmentlist" component={AppoinmentListScreen} />
        <Route
          exact
          path="/admin/ambulancelist"
          component={AmbulanceListScreen}
        />
        <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route
          exact
          path="/admin/med/:id/edit"
          component={MedicineEditScreen}
        />
        <Route exact path="/Login" component={Login} />
      </Container>
    </BrowserRouter>
  );
}

export default App;

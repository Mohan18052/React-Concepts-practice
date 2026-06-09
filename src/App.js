import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalInfo from "./pages/PersonalInfo";
import Navbar from "./components/Navbar";
import EmployeeRegistration from "./pages/EmployeeRegistration";
import UncontrolledForm from "./pages/UncontrolledForm";
import ApiUsers from "./pages/ApiUsers";
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/personalinfo" element={<PersonalInfo />} />
  <Route path="/registration" element={<EmployeeRegistration />} />
  <Route path="/uncontrolled" element={<UncontrolledForm />} />
  <Route path="/apiusers" element={<ApiUsers />} />
</Routes>
    </div>
  );
}
export default App;
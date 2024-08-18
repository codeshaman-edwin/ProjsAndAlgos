import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import MotosList from "./views/MotosList";
import MotoDetails from "./views/MotoDetails";
import AddMoto from "./views/AddMoto";
import UpdateMoto from "./views/UpdateMoto";

const App = () => {
  return (
    <div style={{backgroundColor: "lightgrey"}}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<MotosList />} />
        <Route path="/motos/:id/details" element={<MotoDetails />} />
        <Route path="/create" element={<AddMoto />} />
        <Route path="/motos/:id/update" element={<UpdateMoto />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
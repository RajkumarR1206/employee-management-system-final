import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddOrUpdateEmployee from "./components/AddOrUpdateEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddOrUpdateEmployee />} />
        <Route path="/update-employee/:id" element={<AddOrUpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;

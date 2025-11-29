import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Mentor from './components/tabs/Mentor'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />}>
          {/* nested routes */}
          <Route path="mentor" element={<Mentor />} />
          <Route path="job" element={<div>Jobs Page</div>} />
          <Route path="booking" element={<div>Booking</div>} />
          <Route path="priority-dm" element={<div>Priority-DM</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

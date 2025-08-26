import Sidebar from "./components/UI/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

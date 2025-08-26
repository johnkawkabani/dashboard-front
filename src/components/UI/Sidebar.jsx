import "../../index.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">MyDashboard</h1>
      <ul className="sidebar-menu">
        <li className="active">🏠 Home</li>
        <li>📊 Analytics</li>
        <li>📑 Reports</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside> 
  );
}

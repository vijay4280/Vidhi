import { Link } from "react-router-dom";
import "../styles/admin.css";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h3>Admin Panel</h3>
        <Link to="/admin/categories">Categories</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/pages">Pages</Link>
      </aside>

      <main className="admin-main">
        <h2>Welcome Admin</h2>
        <p>Manage website content here</p>
      </main>
    </div>
  );
};

export default Dashboard;

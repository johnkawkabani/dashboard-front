import Card from "../components/UI/Card";
import Table from "../components/UI/Table";
import Chart from "../components/UI/Chart";
import "../index.css";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <h2 className="dashboard-title">Welcome!</h2>

      <div className="cards">
        <Card title="Users" value="1,240" />
        <Card title="Sales" value="$8,430" />
        <Card title="Revenue" value="$23,100" />
      </div>

      <Chart />

      <Table />
    </main>
  );
}

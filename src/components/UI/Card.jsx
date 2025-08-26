import "../../index.css";

export default function Card({ title, value }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{value}</div>
    </div>
  );
}

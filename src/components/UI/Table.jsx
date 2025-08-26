import "../../index.css";

export default function Table() {
  const data = [
    { user: "Jane Doe", activity: "Purchased subscription", date: "Aug 18, 2025" },
    { user: "John Smith", activity: "Uploaded a report", date: "Aug 17, 2025" },
    { user: "Alice Brown", activity: "Updated profile", date: "Aug 16, 2025" },
  ];

  return (
    <div className="table-container">
      <h3>Recent Activity</h3>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Activity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.user}</td>
              <td>{row.activity}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dashboard() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <h2>Dashboard</h2>
      {token ? <p>Logged in successfully! Token: {token}</p> : <p>Please login first.</p>}
    </div>
  );
}

export default Dashboard;

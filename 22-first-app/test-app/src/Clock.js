function Clock() {
  return (
    <div className="clock-container">
      <h1>현재 시간{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;

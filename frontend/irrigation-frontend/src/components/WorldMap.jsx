const WorldMap = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Our Global Presence</h2>

      <iframe
        src="https://www.google.com/maps/d/embed?mid=1zZJkXy-example"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default WorldMap;

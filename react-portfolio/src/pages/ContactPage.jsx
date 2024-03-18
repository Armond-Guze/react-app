export default function ContactPage() {
  return (
    <section style={styles.container}>
      <div style={styles.headingBox}>
        <h1 style={styles.heading}>Contact me!</h1>
      </div>
      <div style={styles.box}>
        <ul>
          <li>
            <h2>Name: Armond Guze</h2>
          </li>
          <li>
            <h2>Phone: 732500-6696</h2>
          </li>
          <li>
            <h2>Email: Armond.Guze@yahoo.com</h2>
          </li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  headingBox: {
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    fontFamily: "Arial, sans-serif",
    fontSize: "45px",
    textAlign: "center",
  },
  box: {
    border: "2px solid ",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "800px",
    fontSize: "20px",
  },
};

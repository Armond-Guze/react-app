export default function AboutMe() {
  return (
    <section style={styles.container}>
      <div style={styles.headingBox}>
        <h1 style={styles.heading}>About Me</h1>
      </div>
      <div style={styles.box}>
        <p>
          I am a Full-Stack developer with skills in HTML, CSS, Javascript, React, Node.js,
          and other web technologies. I have experience working on multiple projects
          including building web applications, responsive designs,
          optimizing performance, working with developers. My goal is to continue learning and growing
          in the field of web development to create impactful and innovative solutions.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Arrange items vertically
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center',
    minHeight: '100vh',
   
  },
  headingBox: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px', // Space below the heading box
  },
  heading: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '45px', // Increased font size to 36px
    textAlign: 'center',
  },
  box: {
    border: '2px solid',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '800px',
    fontSize: '20px'
  },
};

import backgroundImage from '../assets/background.jpg'
export default function Resume() {
  return (
    <section style={styles.container}>
      <div style={styles.headingBox}>
        <h1 style={styles.heading}>My Skills</h1>
      </div>
      <div style={styles.box}>
        <p>
          HTML, CSS, Javascript, Web API’s, Third Party API’s, Server-side API’s,
          Node.js, Object Oriented Programming (OOP), Express.js, SQL, Object
          Oriented Mapping (ORM), Model-View- Controller (MVC), Bootstrap/ REACT,
          State, MERN Stack
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  headingBox: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px', 
  },
  heading: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '45px', 
    textAlign: 'center',
  },
  box: {
    border: '2px solid ',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '800px',
    fontSize: '20px'
  },
};



import style from './App.module.css'
import Container from './Container';
import Packet from './Packet';



function App() {

  return (
    <>
      <Container>

        <h1 className={style.heading}> Learning CSS Module</h1>
        <p className={`${style.para} ${style.heading}`}>This is the day and Today
          I am learning about children Passing and many more concept of intermediate react. </p>

      </Container>

      <Container>

      </Container>

      <Container>This is another container</Container>

      <Packet>
        Hello I'm inside Packet
      </Packet>
    </>

  )
}

export default App;

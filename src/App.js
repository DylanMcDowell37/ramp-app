import styled from "styled-components";
import { useState } from "react"
import Output from "./components/Output";

function App() {
  const [input, setInput] = useState(false)

  
  return (
      <Container>
          <Output input = {input}/>
      </Container>
  );
}

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`

export default App;

import Container from "react-bootstrap/esm/Container";
import Header from "./components/header";
import { Posts } from "./components/posts"; 

export default function App(){

  return(
    <Container fluid data-bs-theme = 'dark' className='app'>
      <Header />
      <Posts/>


      
    </Container>
  )
}
import logo from './logo.svg'
import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />

      <main className='py-3'>
        <Container>
          <h1>Welcome to Ekart</h1>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App

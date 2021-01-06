import logo from './logo.svg'
import './App.css'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Radio from './components/Radio/Radio'
import Buttons from './components/Buttons/Buttons'
import Users from './components/Users/Users'
import user_data from './user_data'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Radio />
        <Buttons />
        <Users users={user_data} />
        <Footer />
      </Container>
    </div>
  )
}

export default App

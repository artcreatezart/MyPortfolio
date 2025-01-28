import './app.scss'
import { HashRouter } from 'react-router-dom'
import Links from './components/routes/Links'
// Import nav components
import Header from './components/nav/header/Header'
import Footer from './components/nav/footer/Footer'


const App = () => {

  return (
    <HashRouter>
      <div id='rootContainer'>
      <Header/>
      <Links/>
      <Footer/>
      </div>
      
    </HashRouter>
  )
}

export default App

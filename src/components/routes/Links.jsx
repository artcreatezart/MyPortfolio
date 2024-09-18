import {Routes, Route} from 'react-router-dom'
// Page/Component imports
import Home from '../pages/home/Home'
import SingleProject from '../pages/singleProject/SingleProject'
const Links = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/project/:id' element={<SingleProject/>}></Route>
    </Routes>
  )
}

export default Links

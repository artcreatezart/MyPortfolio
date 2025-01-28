import {Routes, Route, useLocation} from 'react-router-dom'
import { useEffect } from 'react';
// Page/Component imports
import Home from '../pages/home/Home'
import SingleProject from '../pages/singleProject/SingleProject'

// Auto scroll top when on new page
const ScrollPageTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; 
};

const Links = () => {
  return (
    <>
      <ScrollPageTop />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<SingleProject/>}></Route>
      </Routes>
    </>
    
  )
}

export default Links

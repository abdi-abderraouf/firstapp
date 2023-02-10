import AllMeetups from './pages/AllMeetups';
import Favoritespage from './pages/Fovorites';
import NewMeetuppage from './pages/NewMeetup';
import MainNavigation from './componenets/layout/MainNavigation';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
function App() {
  return (
      <>  
        <Router> 
          <MainNavigation/>
           <Routes>
           <Route path='/' element={<AllMeetups/>} >
           </Route>
         <Route path='/favorite' element={<Favoritespage/>}> </Route>
         <Route path='/newmeetup' element={<NewMeetuppage/>}> </Route>
           </Routes>
        </Router> 
         
        </>

  );
}

export default App;

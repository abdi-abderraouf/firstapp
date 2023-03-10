import { NavLink } from "react-router-dom";
import Favorites from "../../pages/Fovorites";
import AllMeetups from "../../pages/AllMeetups";
import NewMeetup from "../../pages/NewMeetup";
function MainNavigation(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <NavLink to={}>AllMeetups</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to={/Favorites}> favorites</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" NavLink to='/newmeetup'>addnewmeetup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        
        
        );
}
export default MainNavigation;
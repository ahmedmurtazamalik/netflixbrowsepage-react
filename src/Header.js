import './style.css';

function Header() {
  return (
    <div id="header">
      <img
        id="titleimage"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="NETFLIX"
      />

      <div id="browse">
        <ul>
          <li><a href="#">Browse</a></li>
        </ul>
        <img id="caret" src="data\icons\caretwhite.png" alt="caret" />
      </div>

      <div id="navbar1">
        <ul id="navbar1list">
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New and Popular</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Browse By Languages</a></li>
        </ul>
      </div>

      <div id="navbar2">
        <div id="icons">
          <img id="searchicon" src="data\icons\search.png" alt="searchicon" />
          <img id="notificon" src="data\icons\notifwhite.png" alt="notificon" />
          <img id="profileicon" src="data\icons\profile.png" alt="profileicon" />
        </div>
        <div id="arrow">
          <img id="caret" src="data\icons\caretwhite.png" alt="caret" />
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';

const Header = () => {
  return(
    <div className="container-fluid">
      <div id="navbar" className="row">
        <div className="col-xs-6">
          <img id="banner" className="img-fluid" src={require("../../public/img/Web_Banner_36px.png")} alt=""/>
        </div>

        <div className="col-xs-6">
          <ul id="userInfo">
                <li id="userStatus" className="light-text">SIGNED IN AS</li>
                <li id="userName" className="normal-text">Taj A. English <span id="arrow">&#9660;</span></li>
                <li id="userTitle" className="normal-text">Software Engineer</li>
              </ul>
            </div>
      </div>

    </div>

  )
}

export default Header;

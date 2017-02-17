import React from 'react';

const header = () => {
  return(
    <div className="container-fluid">
      <div id="navbar" className="row">
        <div className="col-xs-6">
          <img id="banner" className="img-fluid" src={require("../../public/img/Web_Banner_36px.png")} alt=""/>
        </div>

        <div className="col-xs-6">
          <ul id="userInfo">
                <li id="userStatus">SIGNED IN AS</li>
                <li id="userName">Taj A. English</li>
                <li id="userTitle">Software Engineer</li>
              </ul>
            </div>
      </div>

    </div>

  )
}

export default header;

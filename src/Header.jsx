export default function Header() {
  return (
    <div className="header">
      <h1>Profile</h1>
      <p>Dashboard . User . Jaydon Frankie</p>
      <header>
        <img
          src="./assets/Img/div.MuiBox-root.png"
          alt=""
          className="headerImg"
        />
        <div className="AvaNameJob">
          <img
            src="./assets/Img/div.MuiAvatar-root.png"
            alt=""
            className="headerAvatar"
          />
          <div>
            <h2>Jaydon Frankie</h2>
            <p>Data Analyst</p>
          </div>
        </div>

        <div className="bottomBar">
          <div>
            <img src="./assets/Icons/Img.svg" />
            <a>Profile</a>
          </div>
          <div>
            <img src="./assets/Icons/Img-1.svg" />
            <a>Followers</a>
          </div>
          <div>
            <img src="./assets/Icons/Img-2.svg" />
            <a>Friends</a>
          </div>
          <div>
            <img src="./assets/Icons/Img-3.svg" />
            <a>Gallery</a>
          </div>
        </div>
      </header>
    </div>
  );
}

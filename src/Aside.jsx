export default function Aside() {
  return (
    <aside>
      <div className="A-S">
        <div className="follow">
          <div>
            <h1 className="numFollow">1,947</h1>
            <p className="nameFollow">Follower</p>
          </div>
          <hr className="vl" />
          <div>
            <h1 className="numFollow">9,124</h1>
            <p className="nameFollow">Following</p>
          </div>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>
            Tart I love sugar plum I love oat cake. Sweet <br />
            roll caramels I love jujubes. Topping cake <br />
            wafer..
          </p>
          <div className="info">
            <div>
              <p>
                📍 Live at <strong>Andorra</strong>
              </p>
            </div>
            <div>
              <p>📧 ashlynn_ohara62@gmail.com</p>
            </div>
            <div>
              <p>
                💼 Data Analyst at{" "}
                <strong>
                  Gleichner, Mueller
                  <br />
                  and Tromp
                </strong>
              </p>
            </div>
            <div>
              <p>
                💼 Studied at <strong>Nikolaus - Leuschke</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="social">
          <h2>Social</h2>
          <div>
            <img src="./assets/Icons/Img-4.svg" alt="" />
            <p>https://www.facebook.com/caitlyn.kerluke</p>
          </div>
          <div>
            <img src="./assets/Icons/Img-5.svg" alt="" />
            <p>https://www.instagram.com/caitlyn.kerluke</p>
          </div>
          <div>
            <img src="./assets/Icons/Img-6.svg" alt="" />
            <p>https://www.linkedin.com/in/caitlyn.kerluke</p>
          </div>
          <div>
            <img src="./assets/Icons/Img-7.svg" alt="" />
            <p>https://www.twitter.com/caitlyn.kerluke</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

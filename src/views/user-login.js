import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './user-login.css'

const UserLogin = (props) => {
  return (
    <div className="user-login-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="user-login-container1">
        <Link to="/pharmacist-login" className="user-login-navlink">
          <img
            alt="Rectangle142114"
            src="/external/rectangle142114-vzlm-200h.png"
            className="user-login-rectangle14"
          />
        </Link>
        <Link to="/" className="user-login-navlink1">
          <img
            alt="Rectangle132114"
            src="/external/rectangle132114-htck-200h.png"
            className="user-login-rectangle13"
          />
        </Link>
        <span className="user-login-text">
          <span>Pharmacist</span>
        </span>
        <span className="user-login-text02">
          <span>USER</span>
        </span>
        <img
          alt="Rectangle38545"
          src="/external/rectangle38545-o4smn-400h.png"
          className="user-login-rectangle3"
        />
        <span className="user-login-text04">
          <span>Forgot Password?</span>
        </span>
        <input
          type="text"
          placeholder="email"
          className="user-login-textinput input"
        />
        <Link to="/health-store-user" className="user-login-navlink2 button">
          Login
        </Link>
        <input
          type="text"
          placeholder="password"
          className="user-login-textinput1 input"
        />
        <Link to="/user-create-account" className="user-login-navlink3 button">
          Register
        </Link>
        <h1 className="user-login-text06">
          <span>TRUST IN US FOR ALL YOUR </span>
          <br></br>
          <span>HEALTH CARE NEEDS</span>
          <br></br>
        </h1>
        <img
          alt="Layer33014"
          src="/external/layer33014-c1jf.svg"
          className="user-login-layer3"
        />
        <div className="user-login-messagesent-component-layout-max">
          <div className="user-login-timestampcontainer"></div>
          <span>Hello What can I help You with?</span>
        </div>
        <img
          alt="image"
          src="/untitled%20design-1500w.png"
          className="user-login-image"
        />
      </div>
      <div className="user-login-container2">
        <div className="user-login-group28">
          <div className="user-login-frame4">
            <span className="user-login-text12">
              <span>OUR SERVICES</span>
            </span>
          </div>
          <div className="user-login-group27">
            <div className="user-login-frame1">
              <img
                alt="Layer16259"
                src="/external/layer16259-83n7.svg"
                className="user-login-layer1"
              />
              <img
                alt="Layer18425"
                src="/external/layer18425-ib2.svg"
                className="user-login-layer11"
              />
              <img
                alt="Layer18328"
                src="/external/layer18328-aq4.svg"
                className="user-login-layer12"
              />
            </div>
            <div className="user-login-frame84">
              <span className="user-login-text14">
                <span>Medicine Delivery</span>
                <br></br>
                <span> Serv ices</span>
              </span>
              <span className="user-login-text18">
                <span>
                  Ambulance
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Services</span>
              </span>
              <span className="user-login-text22">Health Store</span>
            </div>
          </div>
        </div>
        <span className="user-login-text23">
          <span>
            Easily order Prescription and Non
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            prescription
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Medicines,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Request Ambulance Services,</span>
          <br></br>
          <span>
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            read prescriptions effortlessly
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>with our AI-powered</span>
          <br></br>
          <span>platform , Your health, simplified!</span>
          <br></br>
          <br></br>
        </span>
        <img
          alt="pastedImage"
          src="/external/pastedimage-1lkg-500w.png"
          className="user-login-pasted-image"
        />
        <div className="user-login-messagesent-component-layout-max1">
          <div className="user-login-timestampcontainer1"></div>
        </div>
        <span className="user-login-text39">
          <span>. . . . .</span>
        </span>
        <div className="user-login-group24">
          <span className="user-login-text41">
            <span className="user-login-text42">Get an Extra </span>
            <span className="user-login-text43">50%</span>
            <span className="user-login-text44"> Off</span>
            <br className="user-login-text45"></br>
          </span>
        </div>
        <img
          alt="image63627"
          src="/external/image63627-2eow-200w.png"
          className="user-login-image6"
        />
        <div className="user-login-container3">
          <div className="user-login-tk">
            <div className="user-login-pagecontrol">
              <div className="user-login-dot">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-70jn-200h.png"
                  className="user-login-tickcarousel"
                />
              </div>
              <div className="user-login-dot1">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-b9x2-200h.png"
                  className="user-login-tickcarousel1"
                />
              </div>
              <div className="user-login-dot2">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-yb4-200h.png"
                  className="user-login-tickcarousel2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-login-container4">
        <footer className="user-login-footer">
          <div className="user-login-container5">
            <nav className="user-login-nav">
              <span className="user-login-text46">About</span>
              <span className="user-login-text47">Features</span>
              <span className="user-login-text48">Pricing</span>
              <span className="user-login-text49">Team</span>
              <span className="user-login-text50">Blog</span>
            </nav>
          </div>
          <div className="user-login-separator"></div>
          <div className="user-login-container6">
            <span className="user-login-text51">
              © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
            </span>
            <span className="user-login-text52">Follow Our Social Media</span>
            <div className="user-login-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="user-login-icon"
              >
                {/* <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path> */}
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="user-login-icon2"
              >
                {/* <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path> */}
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="user-login-icon4"
              >
                {/* <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path> */}
              </svg>
            </div>
          </div>
        </footer>
      </div>
      <NavigationLinks1 rootClassName="rootClassName10"></NavigationLinks1>
    </div>
  )
}

export default UserLogin

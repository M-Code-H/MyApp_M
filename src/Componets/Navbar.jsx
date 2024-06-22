/* eslint-disable no-unused-vars */
import { useRef } from "react";
import Myimg from "../../public/images/MyImg.jpg"
import Logo from "../../public/images/Logo.png"
import {
  FaBarsStaggered,
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaXmark,
} from "react-icons/fa6";
// import logo from "public/images/Logo.png";
// import myImg from "public/images/MyImg.jpg";
import LazyLoad from 'react-lazyload';
const Navbar = () => {
  const navRef = useRef();
  const showNavRef = () => {
    navRef.current.style.left = "0%";
  };
  const hiddenNavRef = () => {
    navRef.current.style.left = "-100%";
  };

  return (
    <div className="container" id="me">
      <div className="header">
        <div className="logo" data-aos="fade-right"
     data-aos-offset="200"
      data-aos-duration="1500"
     >
          <img src={Logo} alt="" loading="lazy" />
          <a href="" className="mail">
            <span className="email">McodeH1</span>@gmail.com
          </a>
        </div>
        <div className="links">
          <div className="navbar" ref={navRef}>
            <a href="#me">من أنا </a>
            <a href="#services">خدماتي</a>
            <a href="#works">مشاريع</a>
            <a href="#skills">مهاراتي</a>
            <a href="#contact">وظفني</a>

            <span id="closeBtn" onClick={hiddenNavRef}>
              <FaXmark />
            </span>
          </div>
          <a href="https://wa.me/+963435164"  className="btn"> واتساب</a>
          <span id="menuBtn" onClick={showNavRef}>
            <FaBarsStaggered />
          </span>
        </div>
      </div>
      <div className="home">
        <div className="content">
         <div className="box-myname">
         <h4 className="myname">أنا محمد الحلبي</h4>
         </div>
          <h1 className="t">
            + Front End Developer <br /> UX Designer
          </h1>
          <p>
            أهلا بكم في موقع التعريفي الخاص بي ، آمل ان نعمل معا انا محمد مطور
            ومبرمج مواقع Front End امتلك خبرة واسعة في هذا المجال عملت على
            العديد من مشاريع تطوير واجهة الامامية للمواقع مثل (المواقع
            التعليمية، مواقع الشركات، المتاجر الكترونية، مواقع العيادات). شكراً
            لزيارتك موقعي
          </p>

          <div className="a-download">
            <a download="Cv" href="pdf/Cv.pdf">
              تحميل سيرة ذأتية <FaDownload />
            </a>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=61556775155702">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-al-halabi-401752314/">
                <FaLinkedin />
              </a>

              <a href="https://github.com/M-Code-H">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="image" data-aos="fade-right"
     data-aos-offset="350"
     data-aos-easing="ease-in-sine">
          <div className="myBox-img"><LazyLoad  offset={0}>
            <img className="myImg" src={Myimg} loading="lazy"  alt=""  />
             </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

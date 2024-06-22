
import Logo from "../../public/images/Logo.png"

export default function Footer(){
    return (
        <>
          <section className="footer">
        <img src={Logo}
        style={{
          width:'150px',
          height: "100px",
          marginRight:"96px"
          
        }} alt="" loading="lazy" />
        <div className="links">
        <a href="#me">من أنا </a>
            <a href="#services">خدماتي</a>
            <a href="#works">مشاريع</a>
            <a href="#skills">مهاراتي</a>
            <a href="#contact">وظفني</a>
          <p>&copy; Mh.code 2024 جميع الحقوق محفوظة </p>
        </div>
      </section>
        </>

    )
}
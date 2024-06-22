import { FaArrowRight, FaComment, FaEnvelope, FaGraduationCap ,FaLocationDot,FaPhoneVolume } from "react-icons/fa6";
export default function Contact(){
    const onSubmitForm = async (event) => {
      event.preventDefault();
    
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d7636139-c7d4-44fb-a776-4a5623945654");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };

 
    return (
        <>
        <section className="contact" id="contact">
<form action="" data-aos="fade-right" onSubmit={onSubmitForm}
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1500">

  <div className="title">
    <h2>أرسل لي رسالة لنعمل معاً</h2>
  </div>
  <span id="error"></span>
  <div className="box">
    <div className="input-box">
      <input type="text" name="name" id="inpName" placeholder="الأسم الكريم" dir="auto"  />
      <input type="hidden" name="from_name" value="Mission Control"/>
      <input type="hidden" name="subject" value="myPortfile"></input>
    </div>
    <div className="input-box">
      <input type="text" name="listName" id="inpListName" placeholder="الكنية" />
    </div>
    <div className="input-box">
      <input type="email" name="email" id="inpEmail" placeholder="Email" />
    </div>
    <div className="input-box">
      <input type="text" name="phone" id="inpPhone" placeholder="رقم الهاتف" />
    </div>
  </div>
  <div className="input-box">
    <select name="option" id="select" >
      <option value="">نوع العمل</option>
      <option value="UX/UI">UX/UI</option>
      <option value="website">برمجة موقع </option>
      <option value="frontEnd">تصميم واجهة موقع</option>
      <option value="Graphic"> جرافيك ديزاين</option>
      <option value="WritingContent"> كتابة المحتوى</option>
    </select>
  </div>
  <div className="text-box">
    <textarea rows={5} name="message" placeholder="رسالة"></textarea>
  </div>
  
  <button type="submit"> أرسال</button>
</form>
<div className="details" >
  <div className="del-col">
    <i><FaPhoneVolume /></i>
    <div className="label">
      <p>رقم هاتفي</p>
      <h6 dir="auto">+963 962 435 164</h6>
    </div>
  </div>
  <div className="del-col">
    <i><FaEnvelope /></i>
    <div className="label">
      <p>Email</p>
      <h6>Mcodeh1@gmail.com</h6>
    </div>
  </div>
  <div className="del-col">
    <i><FaLocationDot /></i>
    <div className="label">
      <p>مكان أقامتي</p>
      <h6>دمشق / حرستا</h6>
    </div>
  </div>
</div>

      </section>
        </>
    )
}
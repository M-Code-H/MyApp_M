import { FaArrowRight } from "react-icons/fa6";
export default function Skills() {
  return (
    <>
      <div className="services" id="services">
        <div className="title" data-aos="zoom-in">
          <h2>
       الخدمات التي أقدمها لمساعدة مشروعك على تحقيق أهدافه  
             
          </h2>
        </div>
        <div className="services-row">
          <div className="services-col" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="topic">
              <div className="num">01</div>
              <h3>إنشاء واجهات المواقع الإلكترونية</h3>
            </div>
            <p className="desc">
              إذا كنت تريد إنشاء موقع تعريفي بسيط أو متجر إلكتروني، يمكنني تنفيذ
              ذلك بمعايير جودة عالية تناسب طبيعة مشروعك وتميزه عن المنافسين
            </p>
            <span className="servicesIcon">
              <FaArrowRight />
            </span>
          </div>
          <div className="services-col" data-aos="fade-up"
     data-aos-duration="3020">
            <div className="topic">
              <div className="num">02</div>
              <h3>الصيانة والدعم الفني</h3>
            </div>
            <p className="desc">
              لا تشغل نفسك بالتفاصيل الفنية المتعلقة بتشغيل موقعك الإلكتروني أو
              تطبيق الجوال، واشترك في خدمة الصيانة الدعم الفني لنتولى هذه
              المسؤولية بدلًا منك.
            </p>
            <span>
              <FaArrowRight />
            </span>
          </div>
          <div className="services-col" data-aos="fade-up"
     data-aos-duration="3040">
            <div className="topic">
              <div className="num">03</div>
              <h3>تجربة المستخدم</h3>
            </div>
            <p className="desc">
              التأكد من مراعاته لأحدث توجهات تجربة المستخدم في تصميم وبرمجة
              المواقع والتطبيقات.
            </p>
            <span>
              <FaArrowRight />
            </span>
          </div>
          <div className="services-col" data-aos="fade-up"
     data-aos-duration="3060">
            <div className="topic">
              <div className="num">04</div>
              <h3>جرافيك ديزاين</h3>
            </div>
            <p className="desc">
              إنشاء تصاميم جرافيك مميزة من الناحية الجمالية تجذب الأنظار وتوصل
              هدف علامتك التجارية إلى الجمهور المستهدف, يتم العمل مع كل عنصر في
              التصميم ليسهل وصول الرسالة الرئيسية من التصميم مع إضفاء الحيوية
              على جوهر علامتك التجارية.
            </p>
            <span>
              <FaArrowRight />
            </span>
          </div>
          <div className="services-col" data-aos="fade-up"
     data-aos-duration="3080">
            <div className="topic">
              <div className="num">05</div>
              <h3>خدمات كتابة المحتوى للمواقع الإلكترونية</h3>
            </div>
            <p className="desc">
              مراعاة متطلبات تحسين محرك البحث عند كتابة المحتوى لزيادة فرص موقعك
              في الظهور في نتائج الأولى
            </p>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

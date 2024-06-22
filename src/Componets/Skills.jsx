import LazyLoad from 'react-lazyload';
export default function Skills() {
  return (
  
      <section className="skills" id="skills">
        <div className="title"  >
          <h2 data-aos="zoom-out-up">مهاراتي</h2>
          <p>
            شغوف بالبرمجة وذو خبرة في تطوير حلول برمجية فعالة. أمتلك أساسًا
            قويًا في الخوارزميات وأستمتع بمعالجة تحديات البرمجة المعقدة. ملتزمون
            بالتعلم المستمر ومواكبة أحدث التقنيات.
          </p>
        </div>
        <div className="skill-row">
          <div className="box">
            <div className="image">
            <LazyLoad  offset={100}>
              <img src="public/images/icons/html55-01.png" alt="" loading="lazy" />
              </LazyLoad>
              <div className="num">95%</div>
            </div>
            <div className="tool">HTML5</div>
          </div>
          <div className="box">
            <div className="image">
                  <LazyLoad  offset={100}>
              <img src="public/images/icons/css.png" alt="" loading="lazy" />
                  </LazyLoad>
              <div className="num">95%</div>
            </div>
            <div className="tool">CSS3</div>
          </div>
          <div className="box">
            <div className="image">
               <LazyLoad  offset={100}>
              <img src="public/images//icons/js.png" alt="" loading="lazy" />
              </LazyLoad>
              <div className="num">75%</div>
            </div>
            <div className="tool">JS/ES6</div>
          </div>
          <div className="box">
            <div className="image">
               <LazyLoad  offset={100}>
              <img
                src="public/images/icons/bootstrabl.png"
                className="bootstrap"
                alt=""
                loading="lazy"
              /></LazyLoad>
              <div className="num">88%</div>
            </div>
            <div className="tool">BOOTSTRAP</div>
          </div>
          <div className="box">
            <div className="image">
               <LazyLoad  offset={100}>
              <img
                src="public/images/icons/tailwind.png"
                className="tailwind"
                alt=""
                loading="lazy"
              /></LazyLoad>
              <div className="num">94%</div>
            </div>
            <div className="tool">BOOTSTRAP</div>
          </div>
          <div className="box">
            <div className="image">
               <LazyLoad  offset={100}>
              <img
                src="public/images/icons/react.png"
                className="react"
                alt=""
                loading="lazy"
              /></LazyLoad>
              <div className="num">80%</div>
            </div>
            <div className="tool">REACT</div>
          </div>
        </div>
      </section>
  
  );
}

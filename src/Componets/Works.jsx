
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import LazyLoad from 'react-lazyload';
export default function Works(){
    const [activeTab, setActiveTab] = useState("All");
    // Function Tabs
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    const worksData = [
      {
        id: 1,
        title: "متجر الكتروني",
        category: "shop",
        image: "public/images/img_project/p (5).png",
        description: "متجر الكتروني مختص بي بيع القهوة",
        href:"https://shopcoffee.onrender.com/",
      },
      {
        id: 2,
        title: "موقع سوشل ميديا",
        category: "proj",
        image: "public/images/img_project/image.png",
        description: "موقع مشاركة أقتباسات وصور (بوستات)",
        href:"https://m-code-h.github.io/My-App-Postas/"
      },
      {
        id: 3,
        title: "متجر الكتروني ",
        category: "shop",
        image: "public/images/img_project/P (1).png",
        description: "متجر الكتروني لبيع ملابس",
        href:"https://onlinestore-angle-8all.onrender.com/"
      },
      {
        id: 4,
        title: "موقع شخصي/Portfolio",
        category: "Cv",
        image: "public/images/img_project/p (7).png",
        description: "Protfolio",
        href: "https://m-code-h.github.io/MyWebsite_1/"
      },
      {
        id: 5,
        title: "موقع شخصي/Portfolio",
        category: "Cv",
        image: "public/images/img_project/p (9).png",
        description: "Protfolio",
        href: "https://m-code-h.github.io/MyWebsite_2"
      },
      {
        id: 6,
        title: "موقع شركة برمجيات",
        category: "proj",
        image: "public/images/img_project/p (10).png",
        description: "ًWebSite",
        href: "https://website-team.onrender.com/"
      },
     
      {
        id: 7,
        title: " واجهة متجر الكتروني",
        category: "shop",
        image: "public/images/img_project/p (12).png",
        description: "متجر الكتروني   " ,
        href:"https://m-code-h.github.io/Shoppingstore_front/"
      },
      {
        id: 8,
        title: " واجهة متجر الكتروني",
        category: "shop",
        image: "public/images/img_project/p (13).png",
        description: "  متجر الكتروني بيع هواتف Apple  " ,
        href : "https://m-code-h.github.io/Miscellaneous_folder/ind2"
      },
    ];
    return (
        <>
        <section className="works" id="works">
        <div className="title" data-aos="zoom-in">
          <h2>أعمالي الأخيرة</h2>
        </div>
        <div className="buttons">
          <button
            onClick={() => handleTabClick("All")}
            className={activeTab === "All" ? "active" : "active"}
          >
          
            الكل
          </button>
          <button
            onClick={() => handleTabClick("shop")}
            className={activeTab === "shop" ? "active" : ""}
          >
          متاجر الإلكترونية
            Apps
          </button>
          <button
            onClick={() => handleTabClick("Cv")}
            className={activeTab === "Cv" ? "active" : ""}
          >
        
            مواقع CV/Portfolio
          </button>
          <button
            onClick={() => handleTabClick("proj")}
            className={activeTab === "proj" ? "active" : ""}
          >
            
           متنوعات
          </button>
         
        </div>
        <div className="content" >
          {worksData.map(
            (work) =>
              (activeTab === "All" || activeTab === work.category) && (
                <a href={work.href} data-aos="flip-left" className="image" key={work.id}>
                   <LazyLoad  offset={0}>
                  <img src={work.image} alt={work.title} loading="lazy" />
                  </LazyLoad>
                  <div className="details">
                    <div className="topic">
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                    </div>
                    <span>
                      <FaArrowRight />
                    </span>
                  </div>
                </a>
              )
          )}
        </div>
      </section>
        </>
    )}
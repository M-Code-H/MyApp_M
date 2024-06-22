/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Home = () => {
  
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  useEffect(() => {
    const experienceInterval = setInterval(() => {
      if (experienceCount < 1) {
        setExperienceCount(experienceCount + 1);
      }
    }, 10);
    const projectInterval = setInterval(() => {
      if (projectCount < 21) {
        setProjectCount(projectCount + 1);
      }
    }, 30);
    const clientsInterval = setInterval(() => {
      if (clientsCount < 47) {
        setClientsCount(clientsCount + 1);
      }
    }, 30);
    return () => {
      clearInterval(experienceInterval);
      clearInterval(projectInterval);
      clearInterval(clientsInterval);
    };
  }, [experienceCount, projectCount, clientsCount]);
  return (
    <div>
      <Navbar />
      <section className="counter">
        <div className="count-col">
          <div className="count">{experienceCount} </div>
          <h4>
            سنوات من
            <br />
            خبرة
          </h4>
        </div>

        <div className="count-col">
          <div className="count">
            {projectCount}
            <span
              style={{
                backgroundClip: "text",
                color: "transparent",
                backgroundImage: "var(--text-color-Foer)",
              }}
            >
              +
            </span>
          </div>
          <h4>مشاريع مكتملة</h4>
        </div>
        <div className="count-col">
          <div className="count">
            {clientsCount}
            <span
              style={{
                backgroundClip: "text",
                color: "transparent",
                backgroundImage: "var(--text-color-Foer)",
              }}
            ></span>
          </div>
          <h4>عملاء السعيدين</h4>
        </div>
      </section>
    
    </div>
  );
};
export default Home;

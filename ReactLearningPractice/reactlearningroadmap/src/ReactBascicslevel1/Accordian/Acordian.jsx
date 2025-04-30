import React, { useState } from "react";
import "./Acordian.css";
function Acordian() {
  const [isOpen, setIsOpen] = useState(null);
  const data = [
    {
      id: 1,
      heading: "India’s Research",
      description:
        "India has a large number of government-funded R&D institutions. Educational institutes like the Indian Institutes of Technology (IITs), the Indian Institute of Science (IISc), the Indian Institutes of Science Education and Research (IISERs), the National Institutes of Science Education and Research (NISERs), the Indian Institutes of Information Technology (IIITs), and the National Institutes of Technology (NITs),",
    },
    {
      id: 2,
      heading: "Success Formula",
      description:
        "This combination of the faculty's research expertise and the startups' practical, market-oriented approach has been key to the success. IITMRP also connects its startups with established companies, who, while not taking the same high risks as the startups, are willing to help, partner, and even acquire the successful startups. Examples include Tata's investment in Tejas Networks and HCL's investment in GUVI. This has helped scale the products emerging from Indian R&D efforts.",
    },
    {
      id: 3,
      heading: "Empowering Talent",
      description:
        "ITEL also recognizes the immense potential within the pool of nearly 1 million engineering graduates that India produces every year. While the quality of education may be uneven, ITEL estimates that around 30% of these graduates are highly capable and driven. With a little bit of support, motivation",
    },
  ];
  console.log(isOpen);

  const datafetchVal = (id) => {
    setIsOpen((idItem) => (idItem === id ? null : id));
  };

  return (
    <div>
      <div className="accordian">
        {/* <div
          className={isOpen ? "accordian-open" : "accordianclose"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={isOpen ? "num-open" : "num"}>01</p>
          <div>
            <p className={isOpen ? "heading-open" : "heading"}>
              {" "}
              Background and Rational
            </p>
            {isOpen ? (
              <p className="content">
                ITEL will choose its focus areas over time. In each case, it
                will assess the existing strengths and capabilities that India
                already has in that domain. It will look for bright young minds
                ready to take leadership in each area. It is important to note
                that for some of the focus areas, multiple and independent
                efforts may be required. The exact sources of success and the
                pathways to scalable solutions cannot be predetermined.
                Therefore, ITEL may enable, support, and work with multiple
                independent
              </p>
            ) : (
              ""
            )}
          </div>
          <p className="icon">{isOpen ? "-" : "+"}</p>
        </div> */}

        {data.map((data) => {
          const idOpen = data.id === isOpen;
          return (
            <div onClick={() => datafetchVal(data.id)} key={data.id}>
              <div className={idOpen ? "accordian-open" : "accordianclose"}>
                <p className={idOpen ? "num-open" : "num"}>{data.id}</p>
                <div>
                  <p className={idOpen ? "heading-open" : "heading"}>
                    {data.heading}
                  </p>
                  {idOpen ? <p className="content">{data.description}</p> : ""}
                </div>
                <p className="icon">{idOpen ? "-" : "+"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Acordian;

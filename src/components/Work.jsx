import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

export default function Work() {
  return (
    <div id="work">
      <h2>WORK.</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div className="workContainer" key={i.title}>
                <h3>{i.title}</h3>
                <div className="workItem">
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <p>{i.description}</p>
                    <a href={i.url} target={"blank"}>
                      View Demo
                    </a>
                  </aside>
                </div>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
}

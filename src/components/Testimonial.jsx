import React from "react";

export default function Testimonial() {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Rustam"}
          feedback={"A Good Designer,understand th clints point of view"}
        />
        <TestimonialCard
          name={"Rustam"}
          feedback={"A Good Designer,understand th clints point of view"}
        />
        <TestimonialCard
          name={"Rustam"}
          feedback={"A Good Designer,understand th clints point of view"}
        />
      </section>
    </div>
  );
}

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="user"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

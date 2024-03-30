import React from "react";
import tt1 from "../../assets/tt1.jpg";
import tt3 from "../../assets/tt3.jpg";
import tt4 from "../../assets/tt4.jpg";

const testimonials = [
  {
    imgSrc: tt1,
    imgAlt: "First Testimonial",
    ttComment: "lovely",
    ttName: "Rita",
  },
  {
    imgSrc: tt3,
    imgAlt: "Second Testimonial",
    ttComment: "Very nice service.",
    ttName: "Ray",
  },
  {
    imgSrc: tt4,
    imgAlt: "Third Testimonial",
    ttComment: "Super!",
    ttName: "Ahmed",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h4>Testimonials</h4>
      <div id="tts">
        {testimonials &&
          testimonials.map((testimonial) => (
            <div key={testimonial.imgSrc}>
              <div>
                <p className="rating">*****</p>
                <img src={testimonial.imgSrc} alt={testimonial.imgAlt} />
                <p>{testimonial.ttComment}</p>
              </div>
              <p className="name">{testimonial.ttName}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

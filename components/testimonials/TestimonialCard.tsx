import React from "react";
import { testimonialType } from "../../db/testimonials";
import Image from "next/image";
import Wave from "react-wavify"

const TestimonialCard: React.FC<testimonialType> = (testimonial) => {
  return (
    <article className="testimonialCard">
      <div className="testimonialCard__content">
        <blockquote>
          {testimonial.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>
        <a
          href={testimonial.link}
          target="_blank"
          rel="noreferrer noopener"
          className="testimonialCard__image"
          tabIndex={-1}
        >
          <Image
            src={`/testimonials/${testimonial.image}`}
            width={100}
            height={100}
            alt={`${testimonial.author}'s profile image`}
          />
        </a>
      </div>
      <header className="testimonialCard__header">
        <Wave
          fill="var(--accent)"
          paused={false}
          options={{
            amplitude: 10,
            speed: 0.1,
            points: 3,
          }}
          className="testimonialCard__wave"
        />
        <h3>{testimonial.author}</h3>
        <div>{testimonial.location}</div>
      </header>
    </article>
  );
};

export default TestimonialCard;

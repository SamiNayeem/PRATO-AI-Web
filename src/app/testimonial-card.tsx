"use client";
import Image from "next/image";

interface Testimonial {
  feedback: string;
  client: string;
  title: string;
  imageUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Bara Pandit",
    title: "CEO @ MARKETING DIGITAL LTD.",
    imageUrl: "/chota pandit.jpg", // Image path for public folder
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Medium Pandit",
    title: "MARKETING @ APPLE INC.",
    imageUrl: "/chota pandit.jpg",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Chota Pandit",
    title: "CFO @ APPLE INC.",
    imageUrl: "/chota pandit.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 relative"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gray-700"></div>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-6 text-gray-100 text-center">
          What Clients Say
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-10">
          Discover what our valued clients have to say about their experiences
          with our services. We take pride in delivering exceptional results and
          fostering lasting partnerships.
        </p>

        {/* Testimonials Grid */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <li
              key={index}
              className="flex flex-col items-start bg-[#1d2230] rounded-lg p-6 shadow-lg border border-gray-700 transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-4">
                {/* Client Avatar */}
                <Image
                  src={testimonial.imageUrl}
                  alt={`${testimonial.client}'s photo`}
                  height={150}
                  width={150}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-100">
                    {testimonial.client}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-400">{testimonial.feedback}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

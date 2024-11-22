const testimonialsData = [
  {
    id: 1,
    quote: "VFC is Love All Around",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Adam Smith",
    title: "Born-Again Christian",
    image: "/images/adamsmith.png",
  },
  {
    id: 2,
    quote: "True Christian Values",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Mike Warren",
    title: "Music Director, VFC Choir",
    image: "/images/mikewarren.png",
  },
  {
    id: 3,
    quote: "I found Healing in Christ",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Sophia Moore",
    title: "3+ Years Addiction",
    image: "/images/sophiemoore.png",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full overflow-hidden bg-testimonial-bg pb-10 pt-28">
      <h2 className="text-center text-3xl font-recoleta mb-8">Testimonials</h2>
      <div className="space-y-10">
        <div className="flex space-x-10 animate-marqueeLeftToRight">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px] sm:max-w-[500px] flex flex-col justify-between"
              style={{ minHeight: '250px', height: 'auto' }}
            >
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-recoleta text-black mb-3">
                  “{testimonial.quote}”
                </h3>
                <p className="text-gray-400 font-satoshi text-sm break-words">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4" style={{ marginRight: '2.4rem' }}>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover transform scale-110"
                />
                <div>
                  <p className="font-bold font-recoleta text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-satoshi">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-10 animate-marqueeRightToLeft">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id + testimonialsData.length}
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px] sm:max-w-[500px] flex flex-col justify-between"
              style={{ minHeight: '250px', height: 'auto' }}
            >
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-recoleta text-black mb-3">
                  “{testimonial.quote}”
                </h3>
                <p className="text-gray-400 font-satoshi text-sm break-words">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4" style={{ marginRight: '2.4rem' }}>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover transform scale-110"
                />
                <div>
                  <p className="font-bold font-recoleta text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-satoshi">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

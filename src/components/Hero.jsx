export default function Hero() {
  return (
    <section className="pt-28 bg-secondary px-6 relative overflow-hidden rounded-b-[40px]">
      <div className="text-center max-w-2xl mx-auto lg:my-0 my-7">
        <h1 className="text-5xl mb-4 pt-10 leading-normal font-recoleta">
          A community built on Love and Family with Christ as our Firm
          Foundation❤️
        </h1>
        <button className="bg-primary text-white py-2 px-6 rounded-md font-recoleta">
          Worship with Us
        </button>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-baseline gap-4">
        <img
          src="/images/picture1.png"
          alt="Family"
          className="w-full h-auto lg:rounded-t-lg rounded-lg"
        />
        <img
          src="/images/picture2.png"
          alt="Picture 2"
          className="w-full h-auto lg:rounded-t-lg rounded-lg"
        />

        <img
          src="/images/picture3.png"
          alt="Family"
          className="w-full h-auto lg:rounded-t-lg rounded-lg"
        />
      </div>
      <img
        src="/images/x-shape.svg"
        alt="X"
        className="absolute left-0 top-10"
      />
      <img
        src="/images/x-shape.svg"
        alt="X"
        className="absolute right-0 rotate-180 top-48"
      />
    </section>
  );
}

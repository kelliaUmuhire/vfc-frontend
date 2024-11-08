const sermons = [
  {
    date: "02/11/2024",
    title: "The Power of Christ",
    image: "/images/sermon1.jpeg",
  },
  {
    date: "04/11/2024",
    title: "Love of the Father",
    image: "/images/sermon2.jpeg",
  },
  {
    date: "04/11/2024",
    title: "What the Bible says.",
    image: "/images/sermon3.jpeg",
  },
  {
    date: "04/11/2024",
    title: "Holy Spirit, Our Guide",
    image: "/images/sermon4.jpeg",
  },
];

export default function SermonHighlights() {
  return (
    <section className="bg-white lg:pl-12 lg:pr-0 pr-6 pl-6 -mb-10">
      <h1 className="font-recoleta text-3xl mb-6 text-center">
        Sermon Highlights
      </h1>
      <div className="flex items-center gap-5 lg:flex-nowrap flex-wrap overflow-x-hidden">
        {sermons.map((sermon, index) => (
          <div
            key={index}
            className="relative bg-black text-white rounded-lg overflow-hidden shadow-md min-w-[18vw] lg:w-[18vw] w-full h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${sermon.image})` }}
          >
            <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-secondary px-1.5 py-1 rounded">
              <img src="/images/play-square.svg" alt="Play" />
              <button className="text-black text-xs rounded">Watch</button>
            </div>
            <div className="bg-gradient-to-b from-black/5 to-black/90 p-3 absolute bottom-0 w-full">
              <div className="text-xs">{sermon.date}</div>
              <div className="font-recoleta text-lg text-secondary">
                {sermon.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

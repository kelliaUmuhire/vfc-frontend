const TEAM = [
  {
    name: "Bidemi Emmanuel",
    role: "Technical Team",
    image: "/images/member1.jpeg",
  },
  {
    name: "Funmi Akinteye",
    role: "Music Team",
    image: "/images/member1.jpeg",
  },
  {
    name: "Mabel Emmanuel",
    role: "Hospitality, Housekeeping, and Children",
    image: "/images/member1.jpeg",
  },
  {
    name: "Victoria Aderinto",
    role: "Creative Team",
    image: "/images/member1.jpeg",
  },
  {
    name: "Biodun Benjamin",
    role: "Evangelism",
    image: "/images/member1.jpeg",
  },
];
export default function Leaders() {
  return (
    <section>
      <div className="bg-little-green pt-36 pb-6 relative rounded-b-[40px]">
        <div className="grid lg:grid-cols-4 grid-cols-1  w-full gap-10 lg:px-12 px-6 relative z-10">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="relative w-full h-[60vh] overflow-hidden shadow-lg bg-gray-200"
            >
              {/* Replace with actual image in production */}
              <div className="absolute inset-0 bg-gray-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 p-4 text-yellow-300 bg-gradient-to-b from-black/0 to-black w-full">
                <h3 className="text-lg font-recoleta">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-right my-4 font-recoleta lg:px-12 px-6 relative z-10">
          Leadership Team -
        </h2>
        <img
          src="/images/team-shape.svg"
          alt="team"
          className="absolute w-full bottom-0 z-5 lg:block hidden"
        />
      </div>
      <div className="lg:px-12 px-6 mt-14">
        <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-10">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="relative w-full h-[60vh] overflow-hidden shadow-lg bg-gray-200"
            >
              {/* Replace with actual image in production */}
              <div className="absolute inset-0 bg-gray-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 p-4 text-yellow-300 bg-gradient-to-b from-black/0 to-black w-full">
                <h3 className="text-lg font-recoleta">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-right mt-4 mb-10 font-recoleta">
          Pastoral Team -
        </h2>
      </div>
    </section>
  );
}

import GoalsCard from "../components/GoalsCard";

const BELIEFS = [
  {
    title: "Salvation",
    description:
      "We believe God desires that all men be saved and to come to the knowledge of the truth. Salvation is the gift of God and we are only saved by grace,  not by any works or deeds. We believe in righteousness through Jesus Christ. The eternal sacrifice of sin was offered through the blood of Jesus and there is no salvation in any other than Jesus Christ. We believe that salvation is a total package including forgiveness, redemption, deliverance, healing, protection, provision, preservation.",
  },
  {
    title: "The Bible",
    description:
      "We believe in local assemblies to be led by the Pastors according to the pattern of the Bible.  We believe in the unity of the body of Christ and that God has given the 5 fold ministries in Ephesians 4 to govern the church",
  },
  {
    title: "The Bible",
    description:
      "We believe in local assemblies to be led by the Pastors according to the pattern of the Bible.  We believe in the unity of the body of Christ and that God has given the 5 fold ministries in Ephesians 4 to govern the church",
  },
  {
    title: "Marriage",
    description:
      "We believe the design of God for marriage as between a man and a woman and not any other way.",
  },
  {
    title: "The Second Coming",
    description:
      "We believe in the catching away of the saints and the final consummation of all things. We believe in the final judgments ",
  },
];

export default function Beliefs() {
  return (
    <section className="relative">
      <div className="w-full bg-little-green pt-36 rounded-b-[40px] pb-12 relative z-20">
        <h1 className="font-recoleta text-3xl text-center">Our Beliefs</h1>
      </div>
      <div className="w-full relative -mt-10 z-10 lg:bg-inherit bg-secondary">
        <img
          src="/images/beliefs1.png"
          alt="Beliefs1"
          className="w-screen h-auto lg:block hidden"
        />
        <div className="lg:absolute top-28 lg:px-12 px-6 lg:pt-0 pt-20 lg:pb-0 pb-12">
          <h1 className="font-recoleta text-3xl text-primary">The GodHead</h1>
          <p className="mt-3 lg:w-3/5 w-full text-lg">
            We believe in God the Father, Son and the Holy Spirit- that they are
            eternal, all powerful and co-equal.
          </p>
        </div>
      </div>
      <div className="w-full relative bg-little-green">
        <img
          src="/images/beliefs2.2.png"
          alt="Beliefs2"
          className="w-auto h-full relative z-20 -mt-60 lg:block hidden"
        />
        <div className="lg:absolute top-56 right-0 lg:w-1/2 w-full lg:pr-12 pr-6 lg:pl-0 pl-6 lg:py-0 py-10">
          <h1 className="font-recoleta text-3xl text-primary">Jesus Christ</h1>
          <p className="mt-3 text-lg">
            We believe that Jesus Christ is the Son of God. We believe that
            Jesus was born by the Virgin Mary and He is not a seed of man, but
            the seed of the woman. He is 100% God and 100% man. We believe that
            Jesus was physically crucified on the cross and died for the sins of
            the world to make everyone right with God. He was buried,
            supernaturally rose on the third day and later ascended to heaven to
            sit at the right hand of God.
          </p>
        </div>
      </div>
      <div className="w-full relative rounded-b-[40px] flex justify-end bg-secondary">
        <img
          src="/images/beliefs3.png"
          alt="Beliefs2"
          className="w-auto h-full relative z-10 -mt-52 lg:block hidden"
        />
        <div className="lg:absolute top-48 lg:px-12 px-6 left-0 lg:w-1/2 w-full lg:py-0 py-10">
          <h1 className="font-recoleta text-3xl text-primary">
            The Holy Spirit
          </h1>
          <p className="mt-3 text-lg">
            We believe in the person of the Holy Spirit. He is the Spirit of God
            and He convicts the world of sin. He dwells within everyone who
            believes in Jesus and helps us each day. With Him, we can live a
            victorious Christian life.
          </p>
        </div>
      </div>
      <div className="lg:px-12 px-6 py-16">
        <div className="flex gap-6 w-full lg:flex-row flex-col">
          {BELIEFS.slice(0, 2).map((belief, i) => (
            <GoalsCard
              key={i}
              title={belief.title}
              description={belief.description}
              className="w-1/2"
            />
          ))}
        </div>
        <div className="flex gap-6 w-full mt-6 lg:flex-row flex-col">
          {BELIEFS.slice(2, 5).map((belief, i) => (
            <GoalsCard
              key={i}
              title={belief.title}
              description={belief.description}
              className="w-1/3"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

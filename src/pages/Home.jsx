import GoalsCard from "../components/GoalsCard";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { GOALS } from "../utils/data";

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Our Vision */}
      <section className="bg-little-green py-16 px-6 rounded-b-[40px]">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-recoleta text-3xl">Our Vision</h1>
          <p className="mt-3">
            &quot;We exist to bring people into Christ&apos;s family,
            transforming them into a people of love, power, and integrity, and
            empowering them to carry the gospel to the nations of the
            earth.&quot;
          </p>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-16 lg:px-12 px-6">
        <h1 className="font-recoleta text-3xl">Our Goals</h1>
        <p className="mt-3">
          At VFC, our mission extends beyond the church walls. Our website
          serves as a welcoming gateway for new and returning visitors,
          providing resources and opportunities to connect, learn, and grow.
          Here&apos;s how we&apos;re doing that:
        </p>
        <div className="flex flex-row justify-between lg:flex-nowrap flex-wrap mt-6 gap-6">
          {GOALS.map((goal, i) => (
            <GoalsCard
              key={i}
              title={goal.title}
              description={goal.description}
            />
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

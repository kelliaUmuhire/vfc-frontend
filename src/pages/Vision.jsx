export default function Vision() {
  return (
    <section className="w-full">
      <div className="w-full bg-little-green pt-36 rounded-b-[40px]">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-recoleta text-3xl">Our Vision</h1>
          <p className="mt-3">
            &quot;We exist to bring people into Christ&apos;s family,
            transforming them into a people of love, power, and integrity, and
            empowering them to carry the gospel to the nations of the
            earth.&quot;
          </p>
        </div>
        <img
          src="/images/cross-roof.png"
          alt="Pic1"
          className="w-full h-auto mt-2"
        />
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-between gap-8 w-full py-16 lg:px-12 px-6">
        <div className="lg:w-2/5 w-full">
          <h1 className="font-recoleta text-2xl">Our Name</h1>
          <p className="mt-3">
            Our name “Victory Faith Church” was prayerfully revealed from 1st
            John 5:4 “For whatever is born of God overcomes the world. And this
            is the victory that has overcome the world—our faith.”
          </p>
          <div className="mt-4">
            <b>Victory</b>
            <p>
              We have Victory in Christ Jesus. We are born of God and we
              overcome the world and its systems.
            </p>
          </div>
          <div className="mt-5">
            <b>Faith</b>
            <p>
              We have a confident assurance in God and His nature. We believe in
              God and His Words above all else.
            </p>
          </div>
          <div className="mt-5">
            <b>Church</b>
            <p>
              We are members of God’s body and His Family. We live out God’s
              love toward one another and toward the world.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            src="/images/vision1.jpeg"
            className="rounded-b-lg max-h-[40vh] h-auto w-auto"
          />
          <div className="flex lg:flex-row flex-col  gap-4 mt-4 w-full">
            <img
              src="/images/vision2.jpeg"
              className="rounded-t-lg lg:w-2/5 w-full min-h-[40vh] object-cover h-auto"
            />
            <img
              src="/images/vision3.jpeg"
              className="rounded-t-lg lg:w-2/5 w-full min-h-[40vh] object-cover h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

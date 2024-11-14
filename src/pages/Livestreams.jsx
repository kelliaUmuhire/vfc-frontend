const LiveStreams = () => {
  return (
    <div>
      <div className="bg-secondary text-center py-10">
        <h1 className="text-black font-recoleta text-2xl md:text-3xl mb-[10px] ml-[15px] md:ml-[55px] lg:ml-[200px] xl:ml-[372px] mt-[40px] md:mt-[60px] xl:mt-[80px] text-left">
          Watch our Livestreams below
        </h1>

        <div className="relative mx-auto w-[90%] max-w-[1283px] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-cover bg-center rounded-lg overflow-hidden"
             style={{
               backgroundImage: "url('/images/worship.png')",
               borderRadius: '30',
             }}>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/images/youtube-icon-logo.svg"
              alt="Play"
              className="w-[60px] h-[40px] md:w-[70px] md:h-[50px] lg:w-[80px] lg:h-[55px] xl:w-[91px] xl:h-[64px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-10 px-4">
        <h1 className="text-black font-recoleta text-2xl md:text-3xl mb-6 text-left ml-[372px]">Sermon Archives</h1>
        <div className="flex justify-center" style={{ marginLeft: '372px', marginRight: '372px' }}>
          <div
            className="p-6 rounded-lg shadow-md mr-10"
            style={{
              width: '351px',
              height: '1029px',
              backgroundColor: '#FFFDE7',
              borderRadius: '10px 0px 0px 0px'
            }}
          >
            <div
              style={{
                width: '308px',
                height: '573px',
                padding: '10px 0px 0px 0px',
                gap: '10px',
              }}
            >
              <h2 className="text-lg font-semibold mb-4 text-left">Speaker</h2>
              <div className="grid grid-cols-2 gap-2 mb-8">
                <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">Pst Adam Jacob</button>
                <button className="bg-[#0C5220] text-white px-3 py-1 rounded font-medium">Pst James Jacob</button>
                <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">Pst Sam Jacobs</button>
                <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">Pst John Doe</button>
              </div>

              <h2 className="text-lg font-semibold mb-4 text-left">Topic</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex gap-2 w-full">
                  <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">{'Love'}</button>
                  <button className="bg-[#0C5220] text-white px-3 py-1 rounded font-medium">{'Faith'}</button>
                </div>
                <div className="flex gap-2 w-full">
                  <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">{'Marriage'}</button>
                  <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">{'Peace'}</button>
                </div>
              </div>

              <h2 className="text-lg font-semibold mb-4 text-left">Year</h2>
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-2 w-full">
                  <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">{'2023'}</button>
                  <button className="bg-[#0C5220] text-white px-3 py-1 rounded font-medium">{'2024'}</button>
                </div>
                <div className="flex gap-2 w-full">
                  <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">{'2022'}</button>
                  <button className="bg-secondary text-primary px-3 py-1 rounded font-medium">{'2021'}</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full p-6">
              {/* eslint-disable-next-line no-unused-vars */}
            {[...Array(3)].map((_) => (
              <>
                <div
                  className="relative bg-cover bg-center rounded-lg overflow-hidden"
                  style={{
                    width: '396.74px',
                    height: '298px',
                    backgroundImage: "url('/images/worship.png')"
                  }}
                >
                  <div className="absolute bottom-2 left-2 text-secondary ml-5 mb-5">
                    <p className="text-2xl font-bold">Power of Love</p>
                    <p className="text-sm">Pst Adam Jacob</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-secondary p-1 rounded flex items-center">
                    <img src="/images/play-icon.svg" alt="Watch Icon" className="w-4 h-4 mr-1"/>
                    <span className="text-xs">Watch</span>
                  </div>
                </div>
                <div
                  className="relative bg-cover bg-center rounded-lg overflow-hidden"
                  style={{
                    width: '396.74px',
                    height: '298px',
                    backgroundImage: "url('/images/worship.png')"
                  }}
                >
                  <div className="absolute bottom-2 left-2 text-secondary ml-5 mb-5">
                    <p className="text-2xl font-bold">How to build Faith</p>
                    <p className="text-sm">Pst Adam Jacob</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-secondary p-1 rounded flex items-center">
                    <img src="/images/play-icon.svg" alt="Watch Icon" className="w-4 h-4 mr-1"/>
                    <span className="text-xs">Watch</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 px-6">
          <span className="text-black font-medium">Page 1</span>
          <div className="flex items-center">
            <img
              src="/images/arrow.svg"
              alt="Next page"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreams;

const ExperienceCounter = () => {
  return (
    <section className="bg-white dark:bg-bg-dark-main transition-colors duration-300">
      <div className="container flex flex-col lg:flex-row lg:justify-between items-center gap-8 py-20 px-5 lg:px-0">
        
        {/* Left side Card */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-[#F4F4F4] dark:bg-[#1a1a1a] dark:bg-[radial-gradient(circle_at_100%_100%,rgba(239,68,68,0.2)_0%,rgba(239,68,68,0.2)_25%,transparent_55%)] lg:px-13 px-5 lg:pt-9 pt-7.5 lg:pb-13 pb-7.5 rounded-[20px] overflow-hidden relative transition-colors duration-300">
            <div className="lg:flex gap-11 items-center">
              <h3 className="lg:text-[167px] text-[100px] text-red font-bold font-inter lg:leading-45.75 leading-25">
                25
              </h3>
              <h2 className="lg:text-[48px] text-[26px] text-common dark:text-white font-bold font-rajdhani lg:leading-15.5 leading-9 uppercase">
                Years Of <br className="hidden lg:block" /> Experience
              </h2>
            </div>
            <p className="lg:text-base text-sm text-[#5D6570] dark:text-[#ffffff] font-normal font-rubik leading-6.5 lg:mt-10 mt-3">
              Business consulting consultants provide expert advice and guida
              the a businesses to help theme their performance efficiency
            </p>
          </div>
        </div>

        {/* Right side Cards */}
        <div className="lg:w-1/2 w-full">
          <div>
            <div className="lg:flex md:flex justify-between items-center gap-8">
              <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
                <div className="py-9 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-3 border-r-3 border-red dark:border-none transition-colors duration-300">
                  <h2 className="text-[48px] text-common dark:text-white font-bold font-inter leading-15.5 text-center">
                    20k+
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-normal font-rubik leading-6.5 mt-1 text-center">
                    Our Project Complete
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
                <div className="py-9 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-3 border-r-3 border-red dark:border-none transition-colors duration-300">
                  <h2 className="text-[48px] text-common dark:text-white font-bold font-inter leading-15.5 text-center">
                    10k+
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-normal font-rubik leading-6.5 mt-1 text-center">
                    Our Natural Products
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:flex md:flex justify-between items-center gap-8 mt-8">
              <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
                <div className="py-9 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-3 border-r-3 border-red dark:border-none transition-colors duration-300">
                  <h2 className="text-[48px] text-common dark:text-white font-bold font-inter leading-15.5 text-center">
                    200+
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-normal font-rubik leading-6.5 mt-1 text-center">
                    Clients Reviews
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
                <div className="py-9 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-3 border-r-3 border-red dark:border-none transition-colors duration-300">
                  <h2 className="text-[48px] text-common dark:text-white font-bold font-inter leading-15.5 text-center">
                    1,000+
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-normal font-rubik leading-6.5 mt-1 text-center">
                    our Satisfied Clientd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCounter;

import Image from "../Image";
import educationImg from "/src/assets/educationImg.png";

const Education = () => {
  return (
    <section className="bg-white dark:bg-bg-dark-main transition-colors duration-300">
      <div className="container lg:pt-20 pt-10 px-5 lg:px-0">
        <h2 className="text-[32px] text-common dark:text-white font-bold font-rajdhani leading-10.5">
          Education
        </h2>
        <div className="lg:flex justify-between items-center mt-8 gap-8">
          <div className="lg:w-1/2 w-full">
            <div>
              <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-2 border-r-2 border-red dark:border-none transition-colors duration-300">
                <h4 className="text-base text-common dark:text-white font-rubik leading-6.5">
                  Trainer Marketing
                </h4>
                <h2 className="text-lg text-common dark:text-white font-bold font-rajdhani leading-7">
                  2005-2009
                </h2>
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-normal font-rubik leading-6.5 mt-4">
                  A personal portfolio is a curated collection of an
                  individual's professional work, showcasing their skills,
                  experience A personal portfolio.
                </p>
              </div>
            </div>
            <div>
              <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-2 border-r-2 border-red mt-8 dark:border-none transition-colors duration-300">
                <h4 className="text-base text-primary dark:text-white font-normal font-rubik leading-6.5">
                  Design Assistant
                </h4>
                <h2 className="text-lg text-primary dark:text-white font-bold font-rajdhani leading-7">
                  2008-2012
                </h2>
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik leading-6.5 mt-4">
                  I’ve had the privilege of working with various clients, from
                  startups to established companies, helping bring their visions
                  to life.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-7.5">
            <div>
              <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-2 border-r-2 border-red dark:border-none transition-colors duration-300">
                <h4 className="text-base text-common dark:text-white font-rubik leading-6.5">
                  Assistant Director
                </h4>
                <h2 className="text-lg text-common dark:text-white font-bold font-rajdhani leading-7">
                  2010-2014
                </h2>
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik leading-6.5 mt-4">
                  Each project here showcases my commitment to excellence and
                  adaptability, tailored to meet each client’s unique needs.
                </p>
              </div>
            </div>
            <div>
              <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-common rounded-[20px] border-b-2 border-r-2 border-red mt-8 dark:border-none transition-colors duration-300">
                <h4 className="text-base text-common dark:text-white font-rubik leading-6.5">
                  Design Assistant
                </h4>
                <h2 className="text-lg text-common dark:text-white font-bold font-rajdhani leading-7">
                  2008-2012
                </h2>
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik leading-6.5 mt-4">
                  Each project here showcases my commitment to excellence and
                  adaptability, tailored to meet each client’s unique needs a
                  personal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between items-start gap-17.5 mt-18.75">
          <div className="lg:w-1/2 w-full">
            <Image src={educationImg} alt="Education Layout Image" />
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-7">
            <div>
              <h3 className="text-[32px] text-common dark:text-white font-bold font-rajdhani">
                Experiences
              </h3>
              <div className="mt-8">
                <h3 className="text-base text-red font-medium font-rubik">
                  experience
                </h3>
                <h4 className="text-2xl text-primary dark:text-white font-bold font-rajdhani">
                  Fatima Asrafy
                </h4>
                <h5 className="text-lg text-common dark:text-white font-medium font-rajdhani">
                  UI/UX Designer
                </h5>
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik leading-7.5 mt-4 lg:w-111 w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum desi dolore eu fugiat nulla pariatu Duis aute irure
                </p>
              </div>
              <div className="mt-12.5">
                <h3 className="text-base text-red font-medium font-rubik">
                  experience
                </h3>
                <h4 className="text-2xl text-common dark:text-white font-bold font-rajdhani leading-7.5">
                  Fatima Asrafy
                </h4>
                <h5 className="text-lg text-common dark:text-white font-medium font-rajdhani leading-7">
                  UI/UX Designer
                </h5>
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik leading-7.5 mt-4 lg:w-111 w-full">
                  Interested in working together? Let’s bring your ideas to
                  life! Contact me, and let’s start building something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
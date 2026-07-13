import Image from "../Image";
import portfolioOne from "/src/assets/portfolioOne.png";
import portfolioTwo from "/src/assets/portfolioTwo.png";
import portfolioThree from "/src/assets/portfolioThree.png";
import portfolioFour from "/src/assets/portfolioFour.png";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <section className="bg-[#F4F4F4] dark:bg-bg-dark-main transition-colors duration-300">
      <div className="container lg:py-25 py-15">
        {/* Title text part start */}
        <div className="text-center">
          <h4 className="text-base text-red font-medium font-rubik uppercase">
            Latest Portfolio
          </h4>
          <h3 className="lg:text-[48px] text-[22px] md:text-[32px] text-common dark:text-white font-bold font-rajdhani">
            Transforming Ideas into Exceptional{" "}
          </h3>
          <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik text-center lg:w-156.75 mx-auto">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        {/* Title text part end */}

        {/* Portfolio Image part start */}
        <div className="mt-15 lg:flex md:flex justify-between">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            {/* Item 1 */}
            <div className="px-6">
              <div className="p-5 border-3 border-common/5 dark:border-white/10 rounded-[20px]">
                <Image src={portfolioOne} alt="Portfolio item 1" />
              </div>
              <div className="flex justify-between items-center mt-8.25">
                <div>
                  <h2 className="lg:text-2xl text-[20px] text-common dark:text-white font-bold font-rajdhani">
                    My Journey as a Creator
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik mt-2.5">
                    Development Coaches
                  </p>
                </div>
                <div className="p-3 border-3 border-common/5 dark:border-white/10 rounded-[10px] text-common dark:text-white cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="px-6 lg:mt-35 md:mt-25 mt-15">
              <div className="p-5 border-3 border-common/5 dark:border-white/10 rounded-[20px]">
                <Image src={portfolioTwo} alt="Portfolio item 2" />
              </div>
              <div className="flex justify-between items-center mt-8.25">
                <div>
                  <h2 className="lg:text-2xl text-[20px] text-common dark:text-white font-bold font-rajdhani">
                    My Portfolio of Innovation
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik mt-2.5">
                    App Development
                  </p>
                </div>
                <div className="p-3 border-3 border-common/5 dark:border-white/10 rounded-[10px] text-common dark:text-white cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-25 md:mt-20 mt-15">
            {/* Item 3 */}
            <div className="px-6">
              <div className="p-5 border-3 border-common/5 dark:border-white/10 rounded-[20px]">
                <Image src={portfolioThree} alt="Portfolio item 3" />
              </div>
              <div className="flex justify-between items-center mt-8.25">
                <div>
                  <h2 className="lg:text-2xl text-[20px] text-common dark:text-white font-bold font-rajdhani">
                    My Professional Portfolio
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik mt-2.5">
                    Development Coaches
                  </p>
                </div>
                <div className="p-3 border-3 border-common/5 dark:border-white/10 rounded-[10px] text-common dark:text-white cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="px-6 lg:mt-35 md:mt-25 mt-15">
              <div className="p-5 border-3 border-common/5 dark:border-white/10 rounded-[20px]">
                <Image src={portfolioFour} alt="Portfolio item 4" />
              </div>
              <div className="flex justify-between items-center mt-8.25">
                <div>
                  <h2 className="lg:text-2xl text-[20px] text-common dark:text-white font-bold font-rajdhani">
                    A Portfolio of Creativity and Passion
                  </h2>
                  <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik mt-2.5">
                    Business Development
                  </p>
                </div>
                <div className="p-3 border-3 border-common/5 dark:border-white/10 rounded-[10px] text-common dark:text-white cursor-pointer">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Image part end */}
      </div>
    </section>
  );
};

export default Portfolio;
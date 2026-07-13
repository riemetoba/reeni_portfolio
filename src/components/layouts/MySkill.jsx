import { RiBankLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { LiaPenNibSolid } from "react-icons/lia";

const MySkill = () => {
  return (
    <section className="bg-[#F4F4F4] dark:bg-bg-dark-main transition-colors duration-300">
      <div className="container py-10 px-5 lg:px-0">
        {/* Title text strat  */}
        <div className="">
          <h4 className="text-base text-red font-medium font-rubik mb-2 lg:mb-0 uppercase">
            My Skill
          </h4>
          <h2 className="text-[22px] lg:text-[48px] md:text-[32px] text-common dark:text-white font-bold font-rajdhani lg:leading-15 lg:w-[50%]">
            Elevated Designs Personalized the best Experiences
          </h2>
        </div>
        {/* Title text end  */}
        <div className="lg:mt-15 mt-7.5">
          {/* Div One start  */}
          <div className="group pt-11 pb-8 duration-400 ease-in-out hover:bg-red px-5 border-t border-common/5 dark:border-common/20">
            <div className="lg:flex md:flex justify-between items-center">
              <div className="lg:w-[15%] md:w-[15%] w-full">
                <div
                  className="p-4.5 border-2 border-common dark:border-white inline-block ml-[50%] lg:ml-0 -translate-x-[50%] 
                               lg:translate-x-0 md:ml-0 md:translate-x-0 text-[30px] rounded-full text-common dark:text-white group-hover:dark:text-common group-hover:dark:border-common transition-colors duration-300"
                >
                  <RiBankLine />
                </div>
              </div>
              <div className="lg:w-[25%] md:w-[25%] w-full">
                <h3 className="text-[32px] text-common dark:text-white group-hover:dark:text-common font-bold font-rajdhani text-center lg:text-start md:text-start">
                  Ui/visual Design
                </h3>
                <h5 className="text-lg text-common dark:text-[#9F9F9F] group-hover:dark:text-common font-rajdhani text-center lg:text-start md:text-start">
                  21 Done
                </h5>
              </div>
              <div className="lg:w-[45%] md:w-[45%] w-full">
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] group-hover:text-common font-rubik leading-8 lg:w-[80%] md:w-[80%] w-full lg:ml-10 ml-0 text-center lg:text-start md:text-start">
                  My work is driven by the belief that thoughtful design and
                  strategic planning can empower brands strategic planning can
                  empower brands
                </p>
              </div>
              <div className="lg:w-[15%] md:w-[15%] w-full flex lg:justify-end md:justify-end justify-center">
                <p className="flex items-center text-base text-common dark:text-white group-hover:dark:text-common font-bold font-rajdhani cursor-pointer">
                  Read More <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>
          </div>
          {/* Div One end  */}
          {/* Div Two start  */}
          <div className="group pt-11 pb-8 duration-400 ease-in-out hover:bg-red px-5 border-t border-common/5 dark:border-common/20">
            <div className="lg:flex md:flex justify-between items-center">
              <div className="lg:w-[15%] md:w-[15%] w-full">
                <div
                  className="p-4.5 border-2 border-common dark:border-white inline-block ml-[50%] lg:ml-0 -translate-x-[50%] 
                               lg:translate-x-0 md:ml-0 md:translate-x-0 text-[30px] rounded-full text-common dark:text-white group-hover:dark:text-common group-hover:dark:border-common transition-colors duration-300"
                >
                  <CiCalendar />
                </div>
              </div>
              <div className="lg:w-[25%] md:w-[25%] w-full">
                <h3 className="text-[32px] text-common dark:text-white group-hover:dark:text-common font-bold font-rajdhani text-center lg:text-start md:text-start">
                  Ui/visual Design
                </h3>
                <h5 className="text-lg text-common dark:text-[#9F9F9F] group-hover:dark:text-common font-rajdhani text-center lg:text-start md:text-start">
                  21 Done
                </h5>
              </div>
              <div className="lg:w-[45%] md:w-[45%] w-full">
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] group-hover:text-common font-rubik leading-8 lg:w-[80%] md:w-[80%] w-full lg:ml-10 ml-0 text-center lg:text-start md:text-start">
                  In this portfolio, you’ll find a curated selection of projects
                  that highlight my skills in Main Areas, e.g., responsive web
                  design
                </p>
              </div>
              <div className="lg:w-[15%] md:w-[15%] w-full flex lg:justify-end md:justify-end justify-center">
                <p className="flex items-center text-base text-common dark:text-white group-hover:dark:text-common font-bold font-rajdhani cursor-pointer">
                  Read More <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>
          </div>
          {/* Div Two end  */}
          {/* Div Three start  */}
          <div className="group pt-11 pb-8 duration-400 ease-in-out hover:bg-red px-5 border-y border-common/5 dark:border-common/20">
            <div className="lg:flex md:flex justify-between items-center">
              <div className="lg:w-[15%] md:w-[15%] w-full">
                <div
                  className="p-4.5 border-2 border-common dark:border-white inline-block ml-[50%] lg:ml-0 -translate-x-[50%] 
                               lg:translate-x-0 md:ml-0 md:translate-x-0 text-[30px] rounded-full text-common dark:text-white group-hover:dark:text-common group-hover:dark:border-common transition-colors duration-300"
                >
                  <LiaPenNibSolid />
                </div>
              </div>
              <div className="lg:w-[25%] md:w-[25%] w-full">
                <h3 className="text-[32px] text-common dark:text-white group-hover:dark:text-common font-bold font-rajdhani text-center lg:text-start md:text-start">
                  Motion Design
                </h3>
                <h5 className="text-lg text-common dark:text-[#9F9F9F] group-hover:dark:text-common font-rajdhani text-center lg:text-start md:text-start">
                  20 Done
                </h5>
              </div>
              <div className="lg:w-[45%] md:w-[45%] w-full">
                <p className="text-base text-[#5D6570] dark:text-[#9F9F9F] group-hover:text-common font-rubik leading-8 lg:w-[80%] md:w-[80%] w-full lg:ml-10 ml-0 text-center lg:text-start md:text-start">
                  Each project here showcases my commitment to excellence and
                  adaptability, tailored to meet each client’s unique needs
                </p>
              </div>
              <div className="lg:w-[15%] md:w-[15%] w-full flex lg:justify-end md:justify-end justify-center">
                <p className="flex items-center text-base text-common dark:text-white group-hover:dark:text-common font-bold font-rajdhani cursor-pointer">
                  Read More <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>
          </div>
          {/* Div Three end  */}
        </div>
      </div>
    </section>
  );
};

export default MySkill;
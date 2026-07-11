import Image from "../Image"
import webD from "/src/assets/webD.png"
import uiux from "/src/assets/uiux.png"
import wRsr from "/src/assets/wRsr.png"
import marketing from "/src/assets/marketing.png"

const Experience = () => {
  return (
    <section className="bg-white dark:bg-bg-dark-main transition-colors duration-300">
      <div className="container pt-22.5 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-7.5">
          
          {/* Card 1 */}
          <div className="w-full lg:w-1/4">
            <div className="py-10.25 border border-common/5 dark:border-red/16 rounded-[20px] bg-transparent dark:bg-bg-dark-main transition-colors duration-300">
              <div className="flex justify-center">
                <Image src={webD} alt="" />
              </div>
              <div>
                <h3 className="text-2xl text-common dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5">
                  Web Design
                </h3>
                <h4 className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik text-center mt-2.5">
                  120 Projects
                </h4>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-1/4">
            <div className="py-10.25 border border-common/5 dark:border-red/16 rounded-[20px] bg-transparent dark:bg-bg-dark-main transition-colors duration-300">
              <div className="flex justify-center">
                <Image src={uiux} alt="" />
              </div>
              <div>
                <h3 className="text-2xl text-common dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5">
                  Ui/Ux Design
                </h3>
                <h4 className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik text-center mt-2.5">
                  241 Projects
                </h4>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-1/4">
            <div className="py-10.25 border border-common/5 dark:border-red/16 rounded-[20px] bg-transparent dark:bg-bg-dark-main transition-colors duration-300">
              <div className="flex justify-center">
                <Image src={wRsr} alt="" />
              </div>
              <div>
                <h3 className="text-2xl text-common dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5">
                  Web Research
                </h3>
                <h4 className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik text-center mt-2.5">
                  240 Projects
                </h4>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full lg:w-1/4">
            <div className="py-10.25 border border-common/5 dark:border-red/16 rounded-[20px] bg-transparent dark:bg-bg-dark-main transition-colors duration-300">
              <div className="flex justify-center">
                <Image src={marketing} alt="" />
              </div>
              <div>
                <h3 className="text-2xl text-common dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5">
                  Marketing
                </h3>
                <h4 className="text-base text-[#5D6570] dark:text-[#9F9F9F] font-rubik text-center mt-2.5">
                  331 Projects
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
import Button from "../Button";
import Image from "../Image";
import redIcon from "/src/assets/redIcon.png";

const PricePlan = () => {
  return (
    <section className="py-20 bg-white dark:bg-bg-dark-main transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-red text-base font-rubik uppercase">
            My Price Plan
          </p>
          <h3 className="text-5xl text-common dark:text-white font-rajdhani leading-15 font-bold transition-colors duration-300">
            Enhancing Collaboration <br /> between Remote
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-[#F4F4F4] dark:bg-common rounded-[14px] border-b-3 border-r-3 border-red p-8 shadow-sm transition-colors duration-300">
            <p className="text-common dark:text-white font-rajdhani font-bold text-base mb-2 transition-colors duration-300">
              Starter
            </p>
            <h3 className="text-common dark:text-white font-rajdhani font-bold text-5xl mb-1 transition-colors duration-300">
              $ 5.00
            </h3>
            <p className="text-common dark:text-[#9F9F9F] font-rajdhani font-bold text-base mb-12 transition-colors duration-300">
              Per Month
            </p>

            <ul className="space-y-3 text-[#5D6570] dark:text-[#9F9F9F] transition-colors duration-300">
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 5 Social Media Account
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Free Platform Access
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 24/7 Customer Support
              </li>
            </ul>

            <Button className={"mt-8"} btnText={"Get Started"} />
          </div>

          <div className="bg-[#F4F4F4] dark:bg-common rounded-[14px] border-b-3 border-r-3 border-red p-8 shadow-sm scale-105 md:-mt-7 md:-mb-7 transition-colors duration-300">
            <p className="text-common dark:text-white font-rajdhani font-bold text-base mb-2 transition-colors duration-300">
              Basic
            </p>
            <h3 className="text-common dark:text-white font-rajdhani font-bold text-5xl mb-1 transition-colors duration-300">
              $ 230.00
            </h3>
            <p className="text-common dark:text-[#9F9F9F] font-rajdhani font-bold text-base mb-12 transition-colors duration-300">
              Per Month
            </p>

            <ul className="space-y-3 text-[#5D6570] dark:text-[#9F9F9F] transition-colors duration-300">
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 5 Social Media Account
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Free Platform Access
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Marketing Platform
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 24/7 Customer Support
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Life time support
              </li>
            </ul>

            <Button className={"mt-8"} btnText={"Get Started"} />
          </div>

          <div className="bg-[#F4F4F4] dark:bg-common rounded-[14px] border-b-3 border-r-3 border-red p-8 shadow-sm transition-colors duration-300">
            <p className="text-common dark:text-white font-rajdhani font-bold text-base mb-2 transition-colors duration-300">
              Premium
            </p>
            <h3 className="text-common dark:text-white font-rajdhani font-bold text-5xl mb-1 transition-colors duration-300">
              $ 45.00
            </h3>
            <p className="text-common dark:text-[#9F9F9F] font-rajdhani font-bold text-base mb-12 transition-colors duration-300">
              Per Month
            </p>

            <ul className="space-y-3 text-[#5D6570] dark:text-[#9F9F9F] transition-colors duration-300">
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 5 Social Media Account
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> Free Platform Access
              </li>
              <li className="flex items-start gap-x-3">
                <Image src={redIcon} /> 24/7 Customer Support
              </li>
            </ul>

            <Button className={"mt-8"} btnText={"Get Started"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
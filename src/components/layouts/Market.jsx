import Image from "../Image";
import linear from "/src/assets/linear.png";
import framer from "/src/assets/framer.png";
import notion from "/src/assets/notion.png";
import slack from "/src/assets/slack.png";
import upwork from "/src/assets/upwork.png";
import medium from "/src/assets/medium.png";
import amazon from "/src/assets/amazon.png";
import asana from "/src/assets/asana.png";

const Market = () => {
  return (
    <section className="bg-white dark:bg-bg-dark-main lg:pt-30.5 pt-15 transition-colors duration-300">
      <div className="container lg:pb-20 pb-10 px-5 lg:px-0">
        <div className="border border-[#D9DDE0] dark:border-common transition-colors duration-300">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={linear}
              alt="Linear logo"
            />
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={framer}
              alt="Framer logo"
            />
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={notion}
              alt="Notion logo"
            />
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={slack}
              alt="Slack logo"
            />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={medium}
              alt="Medium logo"
            />
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={upwork}
              alt="Upwork logo"
            />
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={amazon}
              alt="Amazon logo"
            />
            <Image
              className="border border-[#D9DDE0] dark:border-common w-full"
              src={asana}
              alt="Asana logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
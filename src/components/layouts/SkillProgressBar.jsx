import { Progress } from "@/components/ui/progress";

const SkillProgressBar = () => {
  const skills = [
    { name: "PHOTOSHOP", value: 100 },
    { name: "FIGMA", value: 95 },
    { name: "ADOBE XD", value: 60 },
    { name: "ADOBE ILLUSTRATOR", value: 70 },
  ];

  return (
    <section className="bg-white dark:bg-bg-dark-main transition-colors duration-300">
      <div className="container py-10 px-5 lg:px-0">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold font-rajdhani text-[32px] text-common dark:text-white pb-10">
              Design Skill
            </h3>

            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="relative mb-2">
                  <h4 className="text-sm font-rubik text-common dark:text-white uppercase">
                    {skill.name}
                  </h4>
                  <h4
                    className="absolute top-0 text-sm font-bold text-common dark:text-white transition-all duration-500"
                    style={{
                      left: `${skill.value}%`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    {skill.value}%
                  </h4>
                </div>

                <Progress value={skill.value} className="w-full bg-[#f4f4f4] dark:bg-common" />
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold font-rajdhani text-[32px] text-common dark:text-white pb-10">
              Development Skill
            </h3>

            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="relative mb-2">
                  <h4 className="text-sm font-rubik text-common dark:text-white uppercase">
                    {skill.name}
                  </h4>

                  <h4
                    className="absolute top-0 text-sm font-bold text-common dark:text-white transition-all duration-500"
                    style={{
                      left: `${skill.value}%`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    {skill.value}%
                  </h4>
                </div>

                <Progress value={skill.value} className="w-full bg-[#f4f4f4] dark:bg-common" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillProgressBar;
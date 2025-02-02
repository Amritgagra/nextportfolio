import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I'm Amrit, if you haven't already gathered that by now. I'm a
              frontend developer based in India. I specialize in building
              engaging web experiences using React, Next.js and TypeScript. I'm
              passionate about creating intuitive user interfaces and bringing
              designs to life.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I specialize in modern web technologies including React, Next.js,
              TypeScript, and Tailwind CSS. I have experience building
              responsive, performant web applications with clean, maintainable
              code and intuitive user experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              When I'm not coding, I enjoy exploring new technologies and
              contributing to open source projects. I'm always eager to learn
              new things and stay up-to-date with the latest developments in
              frontend development.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I'm currently open to new opportunities where I can leverage my
              frontend skills to build impactful products. If you're looking for
              a developer who's passionate about creating exceptional user
              experiences, let's connect! 🚀
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

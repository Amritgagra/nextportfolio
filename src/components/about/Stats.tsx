import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>JavaScript</Chip>
            <Chip>jQuery</Chip>
            <Chip>TypeScript</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>Git</Chip>
            <Chip>GitHub</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Bootstrap</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Figma</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

import type { NextPage } from "next";
import Heading from "../components/heading";
import SEOHead from "../components/seohead";

const About: NextPage = () => {
  return (
    <>
      <SEOHead title="About Bruce" />
      <div className="flex flex-col h-fit text-gray-700 pb-3 mt-7">
        <Heading title={"联系方式"} />
        <div className="bg-zinc-100 rounded-xl p-8 flex flex-col m-auto">
          <h3 className="mt-4 text-center pb-3 font-bold">
            主要从事AI, IoT, Full-Stack Web开发
          </h3>
          <p className="mt-4 text-sm pb-7 text-teal-600">
            主要使用语言 Python / Typescript / C# / C++
          </p>
          <p>
            <strong className="pr-3">Email/邮箱:</strong>2908053838(at)qq.com
          </p>
          <p className="py-5">
            <strong className="pr-5">QQ:</strong>
            2908053838
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

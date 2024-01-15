import type { NextPage } from "next";
import Heading from "../components/heading";
import SEOHead from "../components/seohead";

const About: NextPage = () => {
  return (
    <>
      <SEOHead title="about me" />
      <div className="flex flex-col min-h-[87vh] text-gray-700 pb-3 mt-7">
        <Heading title={"联系方式"} />
        <div className="bg-zinc-100 rounded-xl p-8 flex flex-col m-auto">
          <p className="mt-4 text-center pb-7">
            主要是从事python/js/ts/c++/c# 软件开发, 咨询请联系我
          </p>
          <p className="py-7">
            <strong className="pr-5">QQ:</strong>
            2908053838
          </p>
          <p>
            <strong className="pr-3">邮箱:</strong>2908053838(at)qq.com
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

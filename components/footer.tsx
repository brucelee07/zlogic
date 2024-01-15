import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
};
const SingleLinke: React.FC<Props> = ({ title, link }) => (
  <Link href={link}>{title}</Link>
);
const Footer: React.FC = () => {
  const links = [
    ["首页", "/"],
    ["关于", "/about"],
    ["Github", "https://github.com/brucelee07"],
  ];
  return (
    <footer className="flex flex-col items-center justify-content text-gray-500 text-sm py-5">
      <ul className="flex flex-row xl:space-x-20">
        {links.map((link, idx) => (
          <SingleLinke key={idx} link={link[1]} title={link[0]} />
        ))}
      </ul>
      <p>Copyright &copy; {new Date().getFullYear()} Z- Logic </p>
    </footer>
  );
};

export default Footer;

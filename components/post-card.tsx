import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  imgUrl: string;
};
const Card: React.FC<Props> = ({ title, date, summary, slug, imgUrl }) => (
  <Link
    href={"/blog/" + slug}
    className="flex flex-row justify-between items-center hover:opacity-70 hover:text-teal-600 bg-gray-100 shadow-md pr-2 my-1"
  >
    <Image
      className="object-cover w-full h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={imgUrl}
      width={120}
      height={56}
      alt=""
    />
    <h5 className="mb-1 text-2xl font-bold tracking-tight">{title}</h5>
    <p className="mb-1 font-normal text-gray-700">{summary}</p>
    <p className="text-sm">{date}</p>
  </Link>
);

export default Card;

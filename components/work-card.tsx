import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  date: string;
  imgUrl: string;
  summary?: string;
  slug: string;
};
const Card: React.FC<Props> = ({ title, date, summary, slug, imgUrl }) => (
  <Link href={"/work/" + slug}>
    <Image
      className="object-cover w-full h-48 rounded-lg md:h-auto md:w-48"
      src={imgUrl}
      width={170}
      height={100}
      alt=""
    />
    <div className="flex flex-col justify-between p-2 pl-8 leading-normal">
      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="mb-1 font-normal text-gray-700">{summary}</p>
      <p className="text-sm text-gray-700">{date}</p>
    </div>
  </Link>
);

export default Card;

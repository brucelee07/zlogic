import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/assets/bruce.jpg"
        width={200}
        height={200}
        alt="bruceunx"
        className="rounded-full opacity-70 align-middle"
      />
    </div>
  );
};

export default Profile;

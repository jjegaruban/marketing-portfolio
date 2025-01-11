import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";

const ServicesData = [
  {
    name: "Social Media Marketing",
    description: "Grow your brand on social platforms.",
    icon: <FaInstagram className="text-5xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "SEO",
    description: "Improve your site's visibility.",
    icon: <AiOutlineSearch className="text-5xl" />,
    bgColor: "bg-green-500/70",
  },
  {
    name: "Content Marketing",
    description: "Engage with quality content.",
    icon: <RiArticleLine className="text-5xl" />,
    bgColor: "bg-purple-500/70",
  },
  {
    name: "Email Marketing",
    description: "Reach your audience directly.",
    icon: <MdEmail className="text-5xl" />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "PPC Marketing",
    description: "Get instant visibility.",
    icon: <BiLineChart className="text-5xl" />,
    bgColor: "bg-red-500/70",
  },

  {
    name: "Meta Ads",
    description: "Boost your presence on Facebook and Instagram.",
    icon: <FaFacebookSquare className="text-5xl" />,
    bgColor: "bg-pink-500/70",
  },
];

const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div
            key={name}
            className={`p-4 ${bgColor} min-h-[200px] rounded-xl flex flex-col items-start space-y-3`}
          >
            <div>{icon}</div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;

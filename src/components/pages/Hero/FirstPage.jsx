import React from "react";
import profileImg from "../../../assets/profile-pic.png"


const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={profileImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Jeyakumar Jegaruban
              </p>
              <p className="text-black/75 text-left">Digital Marketer</p>
              <p className="text-black/75">
                Passionate digital marketer skilled in SEO,PPC,social media marketing,email marketing and content creation.
                I specialize in crafting imapact campaigns,integrating AI tools, and creating visually appealing edits to drive brand growth and engagement.
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:jeyakumarjegaruban06@gmail.com"
              >
                {" "}
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;

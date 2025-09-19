import React from "react";
import profileImg from "../../../assets/profile.jpg";

const FirstPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary page-shadow">
      <main className="w-full max-w-4xl p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Profile Image */}
          <div>
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-sm text-gray-700">Hello</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black/80">
              I'm Your Name
            </h1>
            <h2 className="text-lg md:text-xl text-black/75">Digital Marketer</h2>
            <p className="text-black/70 max-w-2xl mx-auto leading-relaxed">
              Passionate digital marketer skilled in SEO, PPC, social media
              marketing, email marketing, and content creation. I specialize in
              crafting impactful campaigns, integrating AI tools, and creating
              visually appealing edits to drive brand growth and engagement.
            </p>
            <a
              className="inline-block primary-btn px-6 py-2 mt-4"
              href="mailto:jeyakumarjegaruban06@gmail.com"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;

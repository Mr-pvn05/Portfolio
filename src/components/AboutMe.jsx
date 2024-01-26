const AboutMe = () => {
  return (
    <div className="pt-12 pb-12 p-3 lg:flex lg:justify-center gap-36">
      <div className="lg:w-4/12">
        <h4 className="text-[24px]">More about me</h4>
        <p className="text-[#4b5156] my-4 font-light">I am a self taught developer.</p>
        <p className="text-[#4b5156]">
          Apart from coding, I love to study about human biology and Historical
          Economy of the past.
        </p>
        <hr className="my-3"/>
        <h4 className="text-[24px]">My Expertise</h4>
        <p className="text-[#4b5156] my-4">Frontend Developer with primary focus on React and Javascript : <a className="text-[#17a2b8]" target="_blank" href="">View Resume</a></p>
        <div className="flex justify-between bg-[#f0ead6] py-4 px-8">
          <ul className="text-[#4b5156]">
            <li>
              HTML/CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              React
            </li>
            <li>
              Material UI
            </li>
            <li>
              Firebase
            </li>
            <li>
              ShadCN
            </li>
          </ul>
          <ul className="text-[#4b5156]">
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>Git Bash</li>
            <li>GitHub</li>
            <li>Appwrite</li>
          </ul>
        </div>
      </div>

      {/* Social Links  */}

      <div className="mt-20 lg:my-2 text-center">
        <img  src="./src/images/girl-01.png" alt="" width={400} />
        <h3 className="my-[28px] text-3xl">Find me on GitHub & LinkedIn</h3>
        <h6 className="text-base my-[16px]">GitHub <a className="text-[#17a2b8]" rel="noreferrer" target="_blank" href="https://github.com/Mr-pvn05?tab=repositories">@praveenSingh</a></h6>
        <h6 className="text-base">LinkedIn <a className="text-[#17a2b8]" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/praveen-singh-9b260b255/">@praveenSingh</a></h6>
      </div>
    </div>
  );
};

export default AboutMe;

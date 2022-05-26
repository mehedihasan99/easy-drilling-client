import React from "react";
import Mypic from "../../image/pic/Mehedi.jpg";
const Portfolio = () => {
  return (
    <div className="px-14 mt-6">
      <div class="hero">
        <div class="hero-content md:p-10 flex-col lg:flex-row">
          <div class="avatar">
            <div class="md:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="w-80" src={Mypic} alt="" />
            </div>
          </div>
          <div className="p-0 md:pl-14">
            <h1 class="text-4xl font-bold">Hi, I'm Mehedi Hasan</h1>
            <p class="py-6">
              I am a frontend developer from sylhet, bangladesh. Currently I
              live in Dhaka.I enjoy building everything from small business
              website to rich interactive web apps.
            </p>
          </div>
        </div>
      </div>
      <div class="hero">
        <div class="hero-content w-32 md:p-10 flex-col lg:flex-row">
          <div>
            <h1 class="text-3xl text-center mb-4 font-bold">Education</h1>
            <div class="card w-96 md:w-[500px] bg-base-100 shadow-xl">
              <div class="card-body">
                <div class="overflow-x-auto">
                  <h2 className="text-1xl font-bold">University</h2>
                  <p>World University of Bangladesh,Dhaka</p>
                  <p>Passing Year(BSC): 11 semester(Continue)</p>
                  <h2 className="text-1xl font-bold">Collage</h2>
                  <p>Shahjalal City Collage,Sylhet</p>
                  <p>Passing Year(HSC): 2017</p>
                  <h2 className="text-1xl font-bold">School</h2>
                  <p>Amir Miah High School,Sylhet</p>
                  <p>Passing Year(SSC): 2015</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 md:pl-14">
            <h1 class="text-4xl text-center mb-4 font-bold">Skills</h1>
            <div class="card w-96 md:w-[500px] bg-base-100 shadow-xl">
              <div class="card-body">
                <div class="overflow-x-auto">
                  <h2 className="text-1xl font-bold">Expert</h2>
                  <p>
                    JavaScript, ES6, React.js, React Router, Hook, REST API,
                    HTML5, CSS3, Bootstrap
                  </p>
                  <h2 className="text-1xl font-bold">Comfort Zone</h2>
                  <p>Node.js, Express.js, MongoDB, SCSS, Tailwind CSS</p>
                  <h2 className="text-1xl font-bold">Tools & IDE</h2>
                  <p>
                    Git/GitHub, Firebase, Netlify, Heroku, Dev Tools, VS Code
                  </p>
                  <h2 className="text-1xl font-bold">Project Live Link:</h2>
                  <div>
                    <p>
                      <a
                        className="text-cyan-500"
                        href="https://perfect-size-d555a.web.app/"
                        target="_blank"
                      >
                        Perfect Size
                      </a>
                    </p>
                    <p>
                      <a
                        className="text-cyan-500"
                        href="https://medi-pharm.web.app/"
                        target="_blank"
                      >
                        Medi-pharm
                      </a>
                    </p>
                    <p>
                      <a
                        className="text-cyan-500"
                        href="https://neon-tapioca-02f5d8.netlify.app/"
                        target="_blank"
                      >
                        Car Hoppers
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

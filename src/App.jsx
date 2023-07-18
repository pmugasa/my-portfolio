import { useState } from "react";
import { Github, Twitter } from "lucide-react";

//components
import Card from "./components/Card";

const App = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const DATA = [
    {
      title: "Authentication App",
      src: "https://vercel.com/pmugasa/authentication-app-frontend/deployments?filterBranch=main",
      demo: "https://authentication-app-frontend-six.vercel.app/",
      tech: ["react", "firebase"],
      img: "/assets/auth.png",
    },
    {
      title: "Image uploader",
      src: "https://github.com/pmugasa/image-uploader-backend",
      demo: "https://image-uploader-ub2f.onrender.com/",
      tech: ["react", "express-js", "mongodb"],
      img: "/assets/image-uploader.png",
    },
    {
      title: "My Unsplash",
      src: "https://github.com/pmugasa/my-unsplash-backend/tree/main",
      demo: "https://my-unsplash-3mwb.onrender.com/",
      tech: ["react", "express-js", "mongodb"],
      img: "/assets/my-unsplash.png",
    },
    {
      title: "World Countries",
      src: "https://github.com/pmugasa/world-countries/tree/main",
      demo: "https://world-countries-blush.vercel.app/",
      tech: ["react"],
      img: "/assets/world-countries.png",
    },
    {
      title: "DealDash eCommerce",
      src: "https://github.com/pmugasa/deal-dash",
      demo: "https://deal-dash-cebf4.web.app",
      tech: ["react", "firebase"],
      img: "/assets/dealdash.png",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, msg);
    setEmail("");
    setMsg("");
  };
  return (
    <>
      <div className="w-full">
        <header>
          <nav className="w-full p-6 text-white border-b-gray-600">
            <div className="space-x-8 font-bold w-full p-2 ">
              <a
                href="#projects"
                className="hover:cursor-pointer hover:text-blue-500"
              >
                projects
              </a>
              <a
                href="#contact"
                className="hover:cursor-pointer hover:text-blue-500"
              >
                contact
              </a>
            </div>
          </nav>
        </header>
        <main className=" text-white">
          {/*hero section*/}
          <div className="text-center sm:h-[500px] flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl">
              Hi 👋🏾, I'm Pete
            </h1>
            <p className="font-normal my-4 text-sm sm:text-lg">
              Self-Taught Developer | Skilled in React and Node.js
            </p>
          </div>

          {/*projects*/}
          <section
            id="projects"
            className=" flex flex-col items-center justify-center pt-24 sm:pt-0 sm:h-screen"
          >
            <h2 className="font-bold text-3xl text-center pb-8">Projects ⚒️</h2>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/*card*/}
              {DATA.map((project) => (
                <Card key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/*contact form*/}
          <section
            id="contact"
            className="sm:h-screen flex flex-col items-center justify-center pt-24 pb-10 sm:pt-0"
          >
            <h2 className="font-bold text-3xl text-center pb-8">
              Get in touch 📞
            </h2>
            <div className="w-full mt-8 flex items-center justify-center">
              <div className="my-2  h-80 w-80 p-4 border border-gray-600 bg-gray-700  rounded-md flex flex-col">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full focus:outline-none bg-gray-600 h-10 p-4 text-sm rounded-md border border-gray-500 focus:border focus:border-blue-500"
                    />
                  </div>
                  <div className="h-32 mt-2">
                    <label htmlFor="msg" className="text-sm">
                      Message
                    </label>
                    <textarea
                      id="msg"
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Your message here..."
                      className="w-full h-full focus:outline-none bg-gray-600 p-4 text-sm rounded-md border border-gray-500 focus:border focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-10 rounded-md py-1.5 border border-blue-500 text-blue-500 font-bold text-sm hover:border-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>{" "}
      </div>
      <footer className="w-full flex items-center justify-center p-4">
        <div className=" font-bold text-white space-x-4">
          <p>Made with 💖 by Pete</p>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <a className="hover:cursor-pointer">
              <Twitter color="#ffffff" absoluteStrokeWidth />
            </a>
            <a
              href="https://github.com/pmugasa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Github color="#ffffff" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

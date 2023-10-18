import "./styles.css";

function About() {
  return (
    <div>
      <section id="about" className="text-gray-400 body-font">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-gray-900">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="font-mono sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hello there
              </h1>
            <div className="typewriter"> 
            <h1 className="hidden lg:inline-block" >
                My name is Agustina Fernández{" "}  
                </h1>
            </div>
            <p className="mb-8 leading-relaxed">
              Welcome! let me tell you a bit about myself. I am Full Stack Web
              developer with a preference for Front-End development.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work with Me
              </a>
              <a
                href="/projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See my lastest work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

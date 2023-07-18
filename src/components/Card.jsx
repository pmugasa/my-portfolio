const Card = ({ project }) => {
  return (
    <>
      <div className="my-2  h-52 w-72 lg:w-72 p-1 border border-gray-600 bg-gray-700 hover:shadow-lg  rounded-md flex flex-col">
        <div className="h-52 w-full hover:cursor-pointer">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <img
              src={project.img}
              className="object-cover h-full w-full rounded-sm "
            />
          </a>
        </div>
        {/*card description*/}
        <div className="mt-2">
          <p className="font-bold text-md ">{project.title}</p>
          <div className="flex space-x-2">
            {project.tech.map((tech) => (
              <p
                key={tech}
                className={
                  "font-normal text-xs" + tech == "firebase"
                    ? " text-yellow-500 "
                    : tech == "react"
                    ? "text-blue-400"
                    : tech == "mongodb"
                    ? "text-green-400"
                    : "text-white"
                }
              >
                #{tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

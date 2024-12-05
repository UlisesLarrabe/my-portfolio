import Image from "next/image";
import TechUsedSection from "./TechUsedSection";
import LinksToCodePreview from "./LinksToCodePreview";

const ProjectCard = ({ project }) => {
  return (
    <article className="flex md:flex-row flex-col text-[#DAE7E4] md:gap-3 w-full gap-5">
      <a
        href={project.page}
        target="_blank"
        rel="noopener"
        className="w-full h-[200px] flex justify-center"
      >
        <Image
          className="rounded transition-transform hover:scale-105 border-gray-400 border-[1px] object-cover w-[350px] h-auto"
          src={project.img}
          width={350}
          height={350}
          alt={project.title}
        />
      </a>
      <main className="w-[100%] flex flex-col md:justify-around md:gap-0 gap-3">
        <h3 className=" font-semibold text-2xl">{project.title}</h3>
        <TechUsedSection techUsed={project.techUsed} />
        <p className=" text-pretty text-gray-400">{project.description}</p>
        {(project.page || project.github || project.github_two) && (
          <LinksToCodePreview
            github={project.github}
            page={project.page}
            backend={project.github_two}
          />
        )}
      </main>
    </article>
  );
};
export default ProjectCard;

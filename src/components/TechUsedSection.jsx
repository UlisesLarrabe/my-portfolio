import Badge from "./Badge";

const TechUsedSection = ({ techUsed }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        {techUsed?.map((tech) => (
          <div className="flex" key={tech}>
            <Badge colors="bg-blue-100 text-[#ffff] text-xs py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-100 flex justify-center items-center">
              {tech}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechUsedSection;

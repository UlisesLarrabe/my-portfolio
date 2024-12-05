import CodeIcon from "./icons/CodeIcon";
import shortyLinkImg from "@/public/assets/shorty-link.webp";
import styleit from "@/public/assets/styleit.webp";
import radiantsImg from "@/public/assets/radiants.webp";
import ProjectCard from "./ProjectCard";
import quePago from "@/public/assets/que-pago.webp";

const Projects = () => {
  const MY_PROJECTS = [
    {
      title: "¿Qué pago?",
      img: quePago,
      description:
        "Diseñada para gestionar y monitorear tus suscripciones, ofrece una interfaz intuitiva y visualmente atractiva. Ayuda a organizar tus pagos recurrentes y nunca olvidar una fecha importante.",
      github: "https://github.com/UlisesLarrabe/web-que-pago",
      github_two: "https://github.com/UlisesLarrabe/backend-que-pago",
      page: "https://web-que-pago.vercel.app",
      techUsed: ["NextJs", "TailwindCSS", "MongoDB", "Express", "NodeJs"],
    },
    {
      title: "Radiants",
      img: radiantsImg,
      description:
        "App hecha para poder visualizar la información de cada agente del videojuego VALORANT, junto a sus habilidades, armas y cada mapa existente.",
      github: "https://github.com/UlisesLarrabe/radiants",
      page: null,
      techUsed: ["React Native"],
    },
    {
      title: "Shorty-Links",
      img: shortyLinkImg,
      description:
        "Pagina web realizada para poder acortar links de manera rápida y sencilla.",
      github: "https://github.com/UlisesLarrabe/Shorty-Link",
      page: "https://shortylink.vercel.app/",
      techUsed: ["NextJs", "TailwindCSS"],
    },
    {
      title: "Style it!",
      img: styleit,
      description:
        "Pagina web realizada para poder recortar imágenes, borrar el fondo y/o ajustar su brillo, utilizando la API de Cloudinary.",
      github: "https://github.com/UlisesLarrabe/customize-img-2",
      page: "https://styleit.vercel.app/",
      techUsed: ["NextJs", "TailwindCSS"],
    },
  ];

  return (
    <section className="w-full h-full">
      <header className="flex md:gap-2 gap-4 mb-3">
        <CodeIcon />
        <h2 className="text-2xl text-[#DAE7E4] font-bold">Proyectos</h2>
      </header>
      <main className="flex flex-col gap-5 w-full">
        {MY_PROJECTS.map((project) => (
          <div key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </main>
    </section>
  );
};
export default Projects;

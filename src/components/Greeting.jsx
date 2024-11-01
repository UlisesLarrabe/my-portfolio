import Badge from "./Badge";
import LinkBadge from "./LinkBadge";
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";

const Greeting = () => {
  return (
    <section className=" w-5/5 pt-7 flex flex-col gap-4 ">
      <header className="w-full flex flex-col gap-2 ">
        <div className=" flex items-center gap-2 w-full">
          <img
          loading="lazy"
            src={"assets/me.webp"}
            alt="Foto de Ulises Alejandro Larrabe"
            className="rounded-[100px] h-28 w-28 object-cover md:h-52 md:w-52 aspect-auto"
          />
          <LinkBadge classInfo={"w-full"} to="https://www.linkedin.com/in/ulises-alejandro-larrabe">
            <Badge colors="bg-blue-100 text-blue-800  dark:bg-blue-900 dark:text-blue-300">
              Disponible para trabajar
            </Badge>
          </LinkBadge>
        </div>

        <h1 className=" text-3xl font-bold text-[#EFFFFC]">
          Hey, soy Ulises Alejandro Larrabe
        </h1>
      </header>
      <main className="w-full flex flex-col gap-3">
        <p className="text-[#DAE7E4]">
          +1 año de experiencia.{" "}
          <strong className=" text-[#FFC470]">
            Especializado en desarrollar páginas web y aplicaciones para
            celulares únicas.
          </strong>
        </p>
        <div className="flex">
          <LinkBadge to="mailto:larrabeulises@gmail.com" classInfo="flex ">
            <Badge colors="bg-blue-100 text-[#ffff] text-xs py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-100 flex justify-center items-center">
              <MailIcon />
              Contáctame
            </Badge>
          </LinkBadge>
          <LinkBadge
            to="https://www.linkedin.com/in/ulises-alejandro-larrabe"
            classInfo="flex "
          >
            <Badge colors="bg-blue-100 text-[#ffff] text-xs  rounded-full dark:bg-blue-900 dark:text-blue-100 flex justify-center items-center">
              <LinkedInIcon />
              LinkedIn
            </Badge>
          </LinkBadge>
          <LinkBadge to="https://github.com/UlisesLarrabe" classInfo="flex ">
            <Badge colors="bg-blue-100 text-[#ffff] text-xs rounded-full dark:bg-blue-900 dark:text-blue-100 flex justify-center items-center">
              <GithubIcon />
              Github
            </Badge>
          </LinkBadge>
        </div>
      </main>
    </section>
  );
};
export default Greeting;

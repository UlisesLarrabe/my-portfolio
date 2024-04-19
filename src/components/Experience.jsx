import InfoExperience from "./InfoExperience";
import WorkIcon from "./icons/WorkIcon";

const Experience = () => {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <WorkIcon />
        <h2 className=" text-2xl text-[#DAE7E4] font-bold">
          Experiencia laboral
        </h2>
      </div>

      <div className="w-full">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <InfoExperience
              title="Aplicación vencimientos de clientes MA&GA"
              date="Desde 24-02-24 hasta 7-04-24"
              info="Aplicación desarrollada para la empresa MA&GA, tipo calendario para guardar los vencimientos de sus clientes."
              techUsed={[
                "React Native",
                "Expo",
                "React Native Calendars",
                "Expo Notifications",
              ]}
            />
          </li>
          <li className="mb-10 ms-6">
            <InfoExperience
              title="Página web Biblioteca Popular Belgrano N2252"
              date="Desde 02-05-23 hasta 22-12-23"
              info="Página web desarrollada para la Biblioteca Popular Belgrano N2252, con el objetivo de mostrar a traves de su web los servicios con los que cuentan, el espacio en el que trabajan y las actividades que se realizan en el lugar."
              techUsed={["ReactJs", "TailwindCSS"]}
              page="https://main--lively-malasada-99a17c.netlify.app"
              github="https://github.com/AgustinCamassa/ProyectoRealBiblioteca"
            />
          </li>
        </ol>
      </div>
    </section>
  );
};
export default Experience;

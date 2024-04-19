import Greeting from "@/src/components/Greeting";
import Experience from "../components/Experience";
import Proyects from "../components/Projects";

export default function Home() {
  return (
    <main className="md:w-[720px] w-[350px] flex flex-col gap-10">
      <Greeting />
      <Experience />
      <Proyects />
    </main>
  );
}

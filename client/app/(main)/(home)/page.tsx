import Hero from "./components/hero";
import ProfessorsSection from "./components/professors";
import WhoWeAre from "./components/who-we-are";
import Promises from "./components/promises";

export default async function HomeRoute() {
  return (
    <main className="">
      <Hero />
      <WhoWeAre />
      <ProfessorsSection />
      <Promises />
    </main>
  );
}

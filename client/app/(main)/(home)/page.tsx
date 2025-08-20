import Hero from "./components/hero";
import ProfessorsSection from "./components/professors";
import WhoWeAre from "./components/who-we-are";

export default async function HomeRoute() {
  return (
    <main className="">
      <Hero />
      <WhoWeAre />
      <ProfessorsSection />
    </main>
  );
}

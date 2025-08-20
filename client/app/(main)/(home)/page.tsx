import Hero from "./components/hero";
import ProfessorsSection from "./components/professors";
import WhoWeAre from "./components/who-we-are";
import Promises from "./components/promises";
import Benefits from "./components/benefits";
import CustomersFeedback from "./components/customers-feedback";

export default async function HomeRoute() {
  return (
    <main className="">
      <Hero />
      <WhoWeAre />
      <ProfessorsSection />
      <Promises />
      <Benefits />
      <CustomersFeedback />
    </main>
  );
}

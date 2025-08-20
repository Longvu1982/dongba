import Hero from "./components/hero";
import WhoWeAre from "./components/who-we-are";

export default async function HomeRoute() {
  return (
    <main className="">
      <Hero />
      <WhoWeAre />
    </main>
  );
}

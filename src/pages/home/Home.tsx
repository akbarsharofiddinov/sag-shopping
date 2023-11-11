import { About, Catalog, Rate, UserPleased } from "@/components";

const Home = () => {
  return (
    <main className="home">
      <Catalog />
      <UserPleased />
      <About />
      <Rate />
    </main>
  );
};

export default Home;

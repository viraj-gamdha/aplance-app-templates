import { LinkButton } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="page-container">
      <div className="wrapper">
        <h1>NextJs + TypeScript + Scss Starter Template</h1>
        <LinkButton variant="bordered" href={"/about"}>
          About Page
        </LinkButton>
      </div>
    </div>
  );
};

export default Home;

import { LinkButton } from "@/components/ui/Button";

const Home = () => {
  return (
    <div className="page-container">
      <div className="wrapper">
        <h1>React + Vite + Ts + Scss Starter Template</h1>
        <LinkButton variant="bordered" to={"/about"}>About Page</LinkButton>
      </div>
    </div>
  );
};

export default Home;

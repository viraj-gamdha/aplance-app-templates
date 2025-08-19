import { LinkButton } from "@/components/ui/Button";

const About = () => {
  return (
    <div className="page-container">
      <div className="wrapper">
        <h2>About Page</h2>
        <LinkButton variant="bordered" to={"/"}>
          Home Page
        </LinkButton>
      </div>
    </div>
  );
};

export default About;

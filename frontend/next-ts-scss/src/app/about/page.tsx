import { LinkButton } from "@/components/ui/button";

const About = () => {
  return (
    <div className="page-container">
      <div className="wrapper">
        <h2>About Page</h2>
        <LinkButton variant="bordered" href={"/"}>
          Home Page
        </LinkButton>
      </div>
    </div>
  );
};

export default About;

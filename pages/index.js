import dynamic from "next/dynamic";
import About from "../src/components/About";
import PersonalExp from "../src/components/PersonalExp";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Layouts from "../src/layouts/Layouts";
const Work = dynamic(() => import("../src/components/Work"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layouts bodyCls={"dark bgimage"}>
      <Home />
      <About />
      <Work />
      <PersonalExp />
      <Contact />
    </Layouts>
  );
};
export default Index;

import HeroSection from "./components/HeroSection";

const About = () => {
  const about = `We aim to offer our customers a variety of the latest products. We’ve come a long way, 
  so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. 
  We offer all of this while providing excellent customer service and friendly support.
  We always keep an eye on the latest trends in products and put our customers’ wishes first. 
  That is why we have satisfied customers all over the world, and are thrilled to be a part of the E-com industry.
  The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as 
  we enjoy making them available to you.`

  return (
    <>
      <HeroSection about={about} />
    </>
  );
};

export default About;

import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto px-10 2xl:px-0">
        <Navbar />
        <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
          <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
           I am a fresh graduated junior front-end developer.
          </h1>
          <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-normal">
          And I&apos;m now looking for a junior front-end developer position to finally kick start my career and learn among professionals.
          </p>
          <Button href="#profile" pill variant="yellow" className="mt-14">
            More
          </Button>
        </div>
      </div>
    </div>
  );
}

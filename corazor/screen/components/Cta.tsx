import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
    id="cta"
    className="bg-muted/50 py-16 my-24 sm:my-32"
  >
    <div className="container lg:grid lg:grid-cols-2 place-items-center">
      <div className="lg:col-start-1">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Empower Your
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Financial Choices
          </span>
          with SWYPEMATE
        </h2>
        <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Revolutionize your financial experience with customized credit cards, tailored notifications, and smart recommendations designed to enhance your financial well-being and lifestyle.
        </p>
      </div>
  
      <div className="space-y-4 lg:col-start-2">
        <Button className="w-full md:mr-4 md:w-auto">Sign Up Now</Button>
        <Button
          variant="outline"
          className="w-full md:w-auto"
        >
          Discover Our Features
        </Button>
      </div>
    </div>
  </section>
  
  );
};

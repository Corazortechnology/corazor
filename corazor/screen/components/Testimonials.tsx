import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from 'framer-motion';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Alice Martin",
    userName: "@alice_m",
    comment: "SWYPEMATE has completely changed how I manage and use my credit cards. Highly recommend!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Bob Smith",
    userName: "@bob_s",
    comment: "The custom credit card features are brilliant. Tailored just for my needs!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Cindy Wu",
    userName: "@cindy_w",
    comment: "Thanks to SWYPEMATE, I'm making better financial decisions with much more ease.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dan Thompson",
    userName: "@dan_t",
    comment: "The personalized alerts help me keep track of all my spending and card benefits. A must-have service!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Eva Lopez",
    userName: "@eva_l",
    comment: "I didn’t know I had so many hidden benefits on my credit cards until I used SWYPEMATE.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Frank Gore",
    userName: "@frank_g",
    comment: "Excellent platform for comparing and choosing credit cards. It’s user-friendly and very effective.",
  },
];

export const Testimonials = () => {

  const tiltEffect = {
    rest: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };





  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Users Love  
        </span>
         SWYPEMATE
      </h2>
      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here's what our customers say about revolutionizing their financial journey with us.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ image, name, userName, comment }: TestimonialProps) => (
          <motion.div
            key={userName}
            className="max-w-md overflow-hidden"
            variants={tiltEffect}
            initial="rest"
            whileHover="hover"
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>{comment}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
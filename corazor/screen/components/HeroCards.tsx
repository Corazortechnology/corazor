import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
// import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useInView } from 'react-intersection-observer'


export const HeroCards = () => {
  const { ref, inView } = useInView({
    
    triggerOnce: true, 
    threshold: 0.4,
  });


  return (
    <motion.div
    initial={{x:500}}
    animate={inView ? { x: 0 } : {x:0}}
    transition={{duration:0.8}}
    className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial Card */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 backdrop-sepia(100%)">
          <Avatar>
            <AvatarImage
              alt="Customer Avatar"
              src="https://i.pravatar.cc/150"
            />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Ella Frost</CardTitle>
            <CardDescription>@ella_frost</CardDescription>
          </div>
        </CardHeader>

        <CardContent>"SWYPEMATE has revolutionized how I manage and optimize my credit cards. Absolutely essential!"</CardContent>
      </Card>

      {/* Team Member Highlight Card */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=31"
            alt="Team Member"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Maxwell Jordan</CardTitle>
          <CardDescription className="font-normal text-primary">
            Lead Product Designer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>"I strive to design user interfaces that make financial management intuitive and accessible for everyone."</p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              href="https://www.linkedin.com/in/maxwelljordan"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing Card */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Premium Plan
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most Popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$25</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Enhance your financial agility with our Premium plan. Features include advanced card analytics, customized offer alerts, and exclusive member benefits.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Unlimited card comparisons", "Priority customer support", "Advanced security options"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service Feature Card */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            {/* <LightBulbIcon /> */}
          </div>
          <div>
            <CardTitle>Smart Insights</CardTitle>
            <CardDescription className="text-md mt-2">
              Get real-time analytics and actionable insights tailored to optimize your spending and maximize credit card rewards.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

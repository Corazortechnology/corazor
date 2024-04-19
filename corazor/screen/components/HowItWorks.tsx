import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Know Your Card",
    description:
      "Our platform demystifies the complex landscape of credit cards by enabling users to compare offerings from all banks seamlessly. By leveraging advanced algorithms and real-time data, users can identify the card that best suits their financial habits and goals, ensuring they make informed decisions.",
  },
  {
    icon: <MapIcon />,
    title: "Know Your Offers",
    description:
      "We curate and present personalised credit card offers, allowing users to maximise benefits and savings. This feature ensures that users are always aware of the best deals available to them, encouraging smart spending practices.",
  },
  {
    icon: <PlaneIcon />,
    title: "Trade What You Can't Use",
    description:
      "With the unique ability to trade credit card offers, our platform fosters a community of users who can exchange unwanted or unusable deals. This peer-to-peer exchange mechanism not only enhances the value users get from their cards but also cultivates a culture of sharing and financial wisdom.",
  },
  {
    icon: <GiftIcon />,
    title: "Tailored Credit Card",
    description:
      "Leveraging the data and insights gathered from the 'Know Your Card' feature, we collaborate with leading banks to introduce a credit card customized to the user's spending patterns and preferences. This initiative represents a significant leap towards truly personalised financial products, offering optimal benefits and features to the users.",
  },
  // {
  //   icon: <MedalIcon />,
  //   title: "Custom Notifications for Unseen Benefits",
  //   description:
  //     "Recognizing that many credit card benefits go unnoticed, we provide custom notifications to alert users about underutilized features, such as hidden charges, insurance options, and more. This proactive approach ensures that users can fully leverage their credit cards, enhancing their financial wellbeing.",
  // },
  // {
  //   icon: <MapIcon />,
  //   title: "Personalised Card Recommendations",
  //   description:
  //     "Understanding individual lifestyles is at our core. For users frequently travelling by air, we might recommend applying for the Axis Vistara credit card, known for its rewarding business class flight tickets. This tailored recommendation process ensures that users are not only informed but also equipped with the best financial tools to suit their lifestyle needs.",
  // },
];


export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does SWYPEMATE help manage my credit cards?",
    answer: "SWYPEMATE offers tools for card comparison, personalized offer alerts, and insights into spending patterns, helping you optimize your financial decisions.",
    value: "item-1",
  },
  {
    question: "Can I trade offers with other SWYPEMATE users?",
    answer: "Yes, SWYPEMATE includes a unique feature that allows users to trade credit card offers with each other, maximizing the benefits you receive from your cards.",
    value: "item-2",
  },
  {
    question: "What are the benefits of the custom credit card feature?",
    answer: "Our custom credit card feature tailors your credit card to your spending habits and preferences, ensuring you always get the most relevant benefits and rewards.",
    value: "item-3",
  },
  {
    question: "Is there a fee associated with using SWYPEMATE?",
    answer: "SWYPEMATE offers both free and premium subscription models. The premium plan includes advanced features like enhanced security and priority customer support.",
    value: "item-4",
  },
  {
    question: "How secure is SWYPEMATE?",
    answer: "Security is a top priority at SWYPEMATE. We use advanced encryption and security protocols to ensure your financial information is always protected.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};

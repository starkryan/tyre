import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Luvsab?",
      answer: "Luvsab is a next-generation mobile application designed to enhance your daily experiences through innovative features and seamless interactions."
    },
    {
      question: "How do I get started with Luvsab?",
      answer: "Simply download the app from the Google Play Store, create an account, and follow the onboarding process. We've made it super easy to get started!"
    },
    {
      question: "Is Luvsab free to use?",
      answer: "Yes, Luvsab is free to download and use. We offer premium features for enhanced functionality, but the core features are always free."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team through the Contact page on our website, or directly through the app's Help & Support section."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your information. You can read more in our Privacy Policy."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-black/50 border border-purple-500/20 rounded-lg px-4"
            >
              <AccordionTrigger className="text-gray-200 hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  import { BookOpen, Map, DollarSign, Edit, Shield } from 'lucide-react'
  
  const faqs = [
    {
      question: "How do I book a bus?",
      answer: "Simply browse our listings, select the bus you need, and fill out the booking form. We'll confirm your booking shortly after.",
      icon: BookOpen
    },
    {
      question: "What areas do you serve?",
      answer: "We offer services across major cities and regions. If you're planning a trip, reach out to confirm coverage.",
      icon: Map
    },
    {
      question: "How is pricing determined?",
      answer: "Pricing depends on the type of bus, distance, and duration of the rental. Contact us for a personalized quote.",
      icon: DollarSign
    },
    {
      question: "Can I make changes to my booking?",
      answer: "Yes, you can modify your booking details by contacting us at least 24 hours in advance.",
      icon: Edit
    },
    {
      question: "What safety measures are in place?",
      answer: "Our buses are regularly maintained, and we follow strict sanitization procedures. Our drivers are well-trained to ensure passenger safety.",
      icon: Shield
    }
  ]
  
  export default function FAQSection() {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#ffeeee]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333333] glow-text">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4">
                <AccordionTrigger className="flex items-center justify-between p-5 bg-white rounded-t-xl hover:bg-[#fff2f2] transition-colors duration-300 text-left">
                  <div className="flex items-center">
                    <div className="bg-[#fff2f2] p-2 rounded-full mr-4">
                      <faq.icon className="w-6 h-6 text-[#ff3333]" />
                    </div>
                    <span className="font-semibold text-[#333333] text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-5 bg-[#fff2f2] rounded-b-xl border-t border-[#ffdddd]">
                  <p className="text-[#666666]">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const Faq = () => {
    return (
        <div className='bg-gradient-to-r from-gray-50 to-white  '>
            <section className="max-w-3xl mx-auto py-10 px-4 ">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="item-1" className="border rounded-lg px-3">
                        <AccordionTrigger className="text-lg font-semibold">
                            What is FreshMart?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            FreshMart is an online grocery platform where you can order fresh
                            fruits, vegetables, and daily essentials directly from local vendors.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border rounded-lg px-3">
                        <AccordionTrigger className="text-lg font-semibold">
                            How can I track my order?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            After placing your order, you can go to the “Track Order” page
                            and enter your order ID to see the current status.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border rounded-lg px-3">
                        <AccordionTrigger className="text-lg font-semibold">
                            What payment methods are available?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            We accept mobile banking (bKash, Nagad), credit/debit cards, and cash
                            on delivery.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border rounded-lg px-3">
                        <AccordionTrigger className="text-lg font-semibold">
                            Do you offer home delivery?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Yes! We provide home delivery within selected areas in Dhaka
                            with minimal delivery charge.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    );
};

export default Faq;
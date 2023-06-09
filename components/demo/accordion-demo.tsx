import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>
          Accordion Content
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

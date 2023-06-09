import AlertDemo from "@/components/demo/alert-demo"
import AccordionDemo from "../components/demo/accordion-demo"

export default function Gallery() {
  return (
    <section className="container">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Gallery
        </h1>
        <div className="flex gap-4">
          <div className="m-2 flex flex-col">
            <AccordionDemo />
            <h2 className="m-2 text-center">Accordion</h2>
          </div>
          <div className="m-2 flex flex-col">
            <AlertDemo />
            <h2 className="m-2 text-center">Alert</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

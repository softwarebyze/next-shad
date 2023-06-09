import AccordionDemo from "./demo/accordion-demo"

export default function Gallery() {
  return (
    <section className="container">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Gallery
        </h1>
        <div className="flex gap-4">
          <div className="m-2 flex flex-col text-center">
            <AccordionDemo />
            <h2 className="m-2">Accordion</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

import AccordionDemo from "./demo/accordion-demo"

export default function Gallery() {
  return (
    <section className="container">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Gallery
      </h1>
      <div className="flex gap-4">
        <AccordionDemo />
      </div>
    </section>
  )
}

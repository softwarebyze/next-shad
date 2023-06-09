import AlertDemo from "@/components/demo/alert-demo"
import CardDemo from "@/components/demo/card-demo"
import CardWithFormDemo from "@/components/demo/card-with-form-demo"
import CommandDemo from "@/components/demo/command-demo"
import DataTableDemo from "@/components/demo/data-table-demo"
import DropdownMenuDemo from "@/components/demo/dropdown-menu-demo"
import ProfileForm from "@/components/demo/form-demo"
import InputDemo from "@/components/demo/input-demo"
import SelectDemo from "@/components/demo/select-demo"

import AccordionDemo from "../components/demo/accordion-demo"
import { ComboboxDemo } from "@/components/ui/combobox"

export default function Gallery() {
  return (
    <section className="container">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Gallery
        </h1>
        <div className="flex flex-wrap gap-4">
          <div className="m-2 flex flex-col">
            <AccordionDemo />
            <h2 className="m-2 text-center">Accordion</h2>
          </div>
          <div className="m-2 flex flex-col">
            <AlertDemo />
            <h2 className="m-2 text-center">Alert</h2>
          </div>
          <div className="m-2 flex flex-col">
            <InputDemo />
            <h2 className="m-2 text-center">Input</h2>
          </div>
          <div className="m-2 flex flex-col">
            <ProfileForm />
            <h2 className="m-2 text-center">Form</h2>
          </div>
          <div className="m-2 flex flex-col">
            <CardDemo />
            <h2 className="m-2 text-center">Card</h2>
          </div>
          <div className="m-2 flex flex-col">
            <SelectDemo />
            <h2 className="m-2 text-center">Select</h2>
          </div>
          <div className="m-2 flex flex-col">
            <DropdownMenuDemo />
            <h2 className="m-2 text-center">Dropdown Menu</h2>
          </div>
          <div className="m-2 flex flex-col">
            <CommandDemo />
            <h2 className="m-2 text-center">Command</h2>
          </div>
          <div className="m-2 flex flex-col">
            <ComboboxDemo />
            <h2 className="m-2 text-center">Combobox</h2>
          </div>
          <div className="m-2 flex flex-col">
            <CardWithFormDemo />
            <h2 className="m-2 text-center">Card With Form</h2>
          </div>
          <div className="m-2 flex flex-col">
            <DataTableDemo />
            <h2 className="m-2 text-center">Data Table</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

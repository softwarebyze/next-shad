import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Dropdown Menu Trigger</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Dropdown Menu Label </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { Terminal, Waves } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Alert title!</AlertTitle>
      <AlertDescription>
        Alert Description.
      </AlertDescription>
    </Alert>
  )
}

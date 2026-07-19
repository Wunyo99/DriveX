import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon
} from "lucide-react"

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
<Sonner
  theme={theme}
  className="toaster group"
  icons={{
    success: <CircleCheckIcon className="size-4" />,
    info: <InfoIcon className="size-4" />,
    warning: <TriangleAlertIcon className="size-4" />,
    error: <OctagonXIcon className="size-4" />,
    loading: <Loader2Icon className="size-4 animate-spin" />,
  }}
  toastOptions={{
    style: {
      background: "#000000",
      color: "#bef264",
      border: "1px solid #bef264",
    },
    classNames: {
      toast: "bg-black text-lime-300 border border-lime-300",
      title: "text-lime-300 font-semibold",
      description: "text-gray-300",
    },
  }}
  {...props}
/>
  );
}

export { Toaster }
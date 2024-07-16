import { Button } from "@/app/useData"

type PrimaryButtonProps = Button

function PrimaryButton({ text, href }: PrimaryButtonProps) {
  return (
    <a
      className="block text-center w-full px-3 py-2 md:py-4 text-xs font-extralight text-white rounded bg-primary md:px-6"
      href={href}
    >
      {text}
    </a>
  )
}

export default PrimaryButton

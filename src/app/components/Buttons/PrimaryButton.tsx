interface PrimaryButtonProps {
  text: string
  onClick: () => void
}

function PrimaryButton({ text, onClick }: PrimaryButtonProps) {
  return (
    <button className="w-full px-3 py-2 md:py-4 text-xs font-extralight text-white rounded bg-primary md:px-6" onClick={onClick}>{text}</button>
  )
}

export default PrimaryButton

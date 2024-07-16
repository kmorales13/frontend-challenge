import Image from "next/image"

type IconType =
  | { iconSrc?: undefined, iconAlt?: undefined }
  | { iconSrc: string, iconAlt: string }

type Item = {
  subheader?: string
  body: string
} & IconType

export interface ItemRowProps {
  items: Item[]
}

function ItemRow({ items }: ItemRowProps) {
  if (!items.length) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" role="grid">
      {items.map((item, idx) => (
        <div className="flex flex-row sm:flex-col gap-3" key={`item-${idx}`}>
          {item.iconSrc && (
            <div className="h-16 w-16 relative flex-shrink-0">
              <Image alt={`item icon ${idx + 1}`} src={item.iconSrc} fill />
            </div>
          )}
          <div className="flex-grow">
            {item.subheader && (
              <div className="w-full text-lg font-semibold md:text-xl">{item.subheader}</div>
            )}
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemRow

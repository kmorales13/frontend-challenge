import { MockData } from "@/app/useData"
import Image from "next/image"

export type ItemRowProps = MockData["itemRow"]

function ItemRow({ items }: ItemRowProps) {
  if (!items?.length) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" role="grid">
      {items.map((item, idx) => (
        <div className="flex flex-row sm:flex-col gap-3" key={`item-${idx}`}>
          {item.img && (
            <div className="h-16 w-16 relative flex-shrink-0">
              <Image alt={item.img.alt || `item ${idx + 1} image`} src={item.img.src} fill />
            </div>
          )}
          <div className="flex-grow">
            {item.heading && (
              <div className="w-full text-lg font-semibold md:text-xl">{item.heading}</div>
            )}
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemRow

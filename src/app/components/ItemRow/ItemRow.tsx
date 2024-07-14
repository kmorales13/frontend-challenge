import Image from "next/image"

interface Item {
  iconSrc?: string
  subheader?: string
  body: string
}

interface ItemRowProps {
  items: Item[]
}

function ItemRow({ items }: ItemRowProps) {
  if (!items.length) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {items.map((item, idx) => (
        <div className="flex flex-row sm:flex-col gap-3" key={`item-${idx}`}>
          {item.iconSrc && (
            <div className="h-16 w-16 relative flex-shrink-0">
              <Image src={item.iconSrc} alt="item icon" fill />
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

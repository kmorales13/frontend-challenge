import Image from "next/image"
import PrimaryButton from "../Buttons/PrimaryButton"
import { MockData } from "@/app/useData"

export type MediaBannerProps = MockData["mediaBanner"]

function MediaBanner({ img, leadingText, heading, orientation, button }: MediaBannerProps) {
  if (!img) return null

  const orientationClassName = orientation === "right" ? "flex-row" : "flex-row-reverse"

  return (
    <div className={`flex flex-col w-full sm:${orientationClassName}`} role="banner">
      <figure className="bg-base-200 aspect-square grow basis-1/2 relative object-cover">
        <Image alt={img.alt || "banner image"} className="object-cover" src={img.src} fill />
        <figcaption>{img.caption}</figcaption>
      </figure>

      <div
        className="flex flex-col items-center justify-center gap-1 p-4 text-body bg-base-100 sm:gap-2 md:gap-3 sm:p-6 md:p-14 sm:aspect-square grow basis-1/2 sm:items-start"
      >
        <span className="text-sm font-semibold md:font-normal">
          {leadingText}
        </span>
        <h2 role="heading" className="text-xl font-bold text-center md:font-normal md:text-3xl sm:text-left">
          {heading}
        </h2>
        {button?.text && (
          <div className="w-full sm:max-w-fit my-2">
            <PrimaryButton text={button?.text} href={button.href} />
          </div>
        )}
      </div>
    </div>
  )
}

export default MediaBanner

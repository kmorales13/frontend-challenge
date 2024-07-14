import Image from "next/image"
import PrimaryButton from "../Buttons/PrimaryButton"

interface MediaBannerProps {
  imageSrc: string
  subheader: string
  header: string
  ctaText: string
  ctaOnClick: () => void
}

function MediaBanner({ imageSrc, subheader, header, ctaText, ctaOnClick }: MediaBannerProps) {
  return (
    <div className="flex flex-col w-full max-w-3xl sm:flex-row">
      <div className="flex items-center justify-center bg-base-200 aspect-square grow basis-1/2 relative">
        {imageSrc && (
          <Image alt="Banner Image" src={imageSrc} objectFit="cover" fill />
        )}
      </div>

      <div
        className="flex flex-col items-center justify-center gap-1 p-4 text-body bg-base-100 sm:gap-2 md:gap-3 sm:p-6 md:p-14 sm:aspect-square grow basis-1/2 sm:items-start"
      >
        <span
          className="text-sm font-semibold md:font-normal">
          {subheader}
        </span>
        <h2
          className="text-xl font-bold text-center md:font-normal md:text-3xl sm:text-left">
          {header}
        </h2>
        <div className="w-full sm:max-w-fit my-1">
          <PrimaryButton text={ctaText} onClick={ctaOnClick} />
        </div>
      </div>
    </div>
  )
}

export default MediaBanner

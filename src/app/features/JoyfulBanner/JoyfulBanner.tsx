'use client'

import MediaBanner from "@/app/components/MediaBanner/MediaBanner"
import bannerImg from "../../../../public/banner.png"

function JoyfulBanner() {
  function handleCTAClick() {
    console.log("handleCTAClick")
  }

  return (
    <MediaBanner
      imageSrc={bannerImg.src}
      subheader="For all their firsts"
      header="Joyful play at every stage, ages 0-4"
      ctaText="Explore The Play Kits"
      ctaOnClick={handleCTAClick}
    />
  )
}

export default JoyfulBanner

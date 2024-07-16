'use client'

import MediaBanner from "@/app/components/MediaBanner/MediaBanner"
import { useData } from "@/app/useData"

function JoyfulBanner() {
  const { data, error, isLoading } = useData()

  if (error || isLoading) return null

  return (
    <section className="w-full max-w-3xl">
      <MediaBanner
        img={data?.mediaBanner.img}
        leadingText={data?.mediaBanner.leadingText}
        heading={data?.mediaBanner.heading}
        orientation={data?.mediaBanner.orientation}
        button={data?.mediaBanner.button}
      />
    </section>
  )
}

export default JoyfulBanner

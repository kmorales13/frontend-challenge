'use client'

import ItemRow from "@/app/components/ItemRow/ItemRow"
import PrimaryButton from "@/app/components/Buttons/PrimaryButton"
import iconImg from "../../../../public/icon.png"

function PlaytimeBenefits() {
  function handleOnClick() {
    console.log("handleOnClick")
  }

  return (
    <section className="bg-aqua text-body p-4 sm:p-10 max-w-5xl">
      <div className="text-2xl sm:text-3xl w-full text-center mb-8 font-semibold max-w-xl mx-auto">
        <span className="hidden sm:block">The right playthings, activities, and guidance, delivered at the right time</span>
        <span className="block sm:hidden">Make the most of playtime</span>
      </div>

      <ItemRow
        items={[
          {
            iconSrc: iconImg.src,
            iconAlt: "made for learning icon",
            subheader: "Made for learning",
            body: "Our play essentials are designed by a team of experts, academics, researchers, and specialists to be exactly what your child needs and loves."
          },
          {
            iconSrc: iconImg.src,
            iconAlt: "stage-based play icon",
            subheader: "Stage-based play",
            body: "Our play essentials are designed by a team of experts, academics, researchers, and specialists to be exactly what your child needs and loves."
          },
          {
            iconSrc: iconImg.src,
            iconAlt: "thoughfully created icon",
            subheader: "Thoughtfully created",
            body: "Our play essentials are designed by a team of experts, academics, researchers, and specialists to be exactly what your child needs and loves."
          },
          {
            iconSrc: iconImg.src,
            iconAlt: "child-safe & sustainable icon",
            subheader: "Child-Safe & Sustainable",
            body: "Our play essentials are designed by a team of experts, academics, researchers, and specialists to be exactly what your child needs and loves."
          },
        ]}
      />

      <div className="flex flex-col items-center justify-center mt-8 sm:hidden gap-4">
        <PrimaryButton text="Get Started" onClick={handleOnClick} />
        <span>Free Shipping | Cancel Any Time</span>
      </div>
    </section>
  )
}

export default PlaytimeBenefits

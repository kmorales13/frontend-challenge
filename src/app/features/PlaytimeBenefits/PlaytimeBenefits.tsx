'use client'

import ItemRow from "@/app/components/ItemRow/ItemRow"
import PrimaryButton from "@/app/components/Buttons/PrimaryButton"
import { useData } from "@/app/useData"

function PlaytimeBenefits() {
  const { data, error, isLoading } = useData()

  if (error || isLoading) return null

  return (
    <section className="bg-aqua text-body p-4 sm:p-10 max-w-5xl">
      <div className="text-2xl sm:text-3xl w-full text-center mb-8 font-semibold max-w-xl mx-auto">
        <span>{data?.itemRow.heading}</span>
      </div>

      <ItemRow items={data?.itemRow.items} />

      {data?.itemRow.button && (
        <div className="flex flex-col items-center justify-center mt-8 sm:hidden gap-4">
          <PrimaryButton text={data?.itemRow.button.text} href={data?.itemRow.button.href} />
          <span>Free Shipping | Cancel Any Time</span>
        </div>
      )}
    </section>
  )
}

export default PlaytimeBenefits

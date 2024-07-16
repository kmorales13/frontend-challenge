import JoyfulBanner from "./features/JoyfulBanner/JoyfulBanner"
import PlaytimeBenefits from "./features/PlaytimeBenefits/PlaytimeBenefits"
import { useData } from "./useData"

export default function Home() {
  const { data, error, isLoading } = useData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <JoyfulBanner />
      <br />
      <PlaytimeBenefits />
    </main>
  )
}

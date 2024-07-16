import JoyfulBanner from "./features/JoyfulBanner/JoyfulBanner"
import PlaytimeBenefits from "./features/PlaytimeBenefits/PlaytimeBenefits"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <JoyfulBanner />
      <br />
      <PlaytimeBenefits />
    </main>
  )
}

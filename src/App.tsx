import { useEffect, useState } from "react"
import BottomNav from "@/components/BottomNav"
import HomeScreen from "@/screens/HomeScreen"
import ProfileScreen from "@/screens/ProfileScreen"
import RequestScreen from "@/screens/RequestScreen"
import StatusScreen from "@/screens/StatusScreen"
import type { Screen } from "@/types"

export default function App() {
  const [screen, setScreen] = useState<Screen>("home")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [screen])

  return (
    <div className="app-shell">
      {screen === "home" && (
        <HomeScreen
          onRequest={() => setScreen("request")}
          onStatus={() => setScreen("status")}
        />
      )}
      {screen === "request" && (
        <RequestScreen
          onBack={() => setScreen("home")}
          onSubmitted={() => setScreen("status")}
        />
      )}
      {screen === "status" && <StatusScreen onBack={() => setScreen("home")} />}
      {screen === "profile" && <ProfileScreen />}
      {screen !== "request" && (
        <BottomNav screen={screen} onNavigate={setScreen} />
      )}
    </div>
  )
}

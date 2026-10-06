import Icon from "@/components/Icon"
import type { IconName, Screen } from "@/types"

interface BottomNavProps {
  screen: Screen
  onNavigate: (screen: Screen) => void
}

const navigationItems: { label: string icon: IconName screen: Screen }[] = [
  { label: "Home", icon: "home", screen: "home" },
  { label: "Request", icon: "cross", screen: "request" },
  { label: "Updates", icon: "bell", screen: "status" },
  { label: "Profile", icon: "person", screen: "profile" },
]

export default function BottomNav({ screen, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {navigationItems.map((item) => (
        <button
          className={screen === item.screen ? "nav-item active" : "nav-item"}
          key={item.label}
          onClick={() => onNavigate(item.screen)}
        >
          <Icon name={item.icon} size={21} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

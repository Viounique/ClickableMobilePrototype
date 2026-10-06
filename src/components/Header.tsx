import Icon from "@/components/Icon"

interface HeaderProps {
  back?: boolean
  onBack?: () => void
  title?: string
}

export default function Header({ back, onBack, title }: HeaderProps) {
  return (
    <header className="app-header">
      {back ? (
        <button className="icon-button" onClick={onBack} aria-label="Go back">
          <Icon name="arrow" />
        </button>
      ) : (
        <div className="brand-mark" aria-label="ReliefLink">
          <Icon name="wave" size={25} strokeWidth={2.2} />
        </div>
      )}
      {title ? (
        <span className="header-title">{title}</span>
      ) : (
        <span className="wordmark">ReliefLink</span>
      )}
      <button
        className="icon-button notification-button"
        aria-label="Notifications"
      >
        <Icon name="bell" size={21} />
        <span className="notification-dot" />
      </button>
    </header>
  )
}

import Header from "@/components/Header"
import Icon from "@/components/Icon"

interface HomeScreenProps {
  onRequest: () => void
  onStatus: () => void
}

export default function HomeScreen({ onRequest, onStatus }: HomeScreenProps) {
  return (
    <main className="screen home-screen">
      <Header />
      <section className="home-content">
        <div className="greeting-row">
          <div>
            <p className="eyebrow">GOOD MORNING</p>
            <h1>Are you safe?</h1>
          </div>
          <button className="language-button">
            EN <Icon name="chevron" size={15} />
          </button>
        </div>

        <button className="location-card" aria-label="Current location">
          <span className="location-icon">
            <Icon name="location" size={20} />
          </span>
          <span>
            <small>Your current location</small>
            <strong>Bang Khen, Bangkok</strong>
          </span>
          <Icon name="chevron" size={18} />
        </button>

        <section className="emergency-card">
          <div className="radar" aria-hidden="true">
            <span className="radar-ring ring-one" />
            <span className="radar-ring ring-two" />
            <span className="radar-center">
              <Icon name="cross" size={31} />
            </span>
          </div>
          <p>Emergency assistance</p>
          <h2>Request help now</h2>
          <span className="supporting-copy">
            Share your location and needs with a rescue coordinator.
          </span>
          <button
            className="primary-button emergency-button"
            onClick={onRequest}
          >
            <Icon name="signal" size={20} />
            SEND HELP REQUEST
          </button>
          <small className="safe-note">
            <Icon name="shield" size={14} /> Works even with a weak connection
          </small>
        </section>

        <div className="section-heading">
          <div>
            <p className="eyebrow">ACTIVE REQUEST</p>
            <h3>Help is being arranged</h3>
          </div>
          <button onClick={onStatus}>View details</button>
        </div>

        <button className="active-request-card" onClick={onStatus}>
          <span className="request-priority" />
          <span className="request-icon">
            <Icon name="truck" />
          </span>
          <span className="request-copy">
            <strong>Evacuation request</strong>
            <small>
              <span className="live-dot" /> Verified · Updated 4 min ago
            </small>
          </span>
          <span className="request-arrow">
            <Icon name="chevron" size={19} />
          </span>
        </button>

        <section className="prepared-card">
          <span className="prepared-icon">
            <Icon name="droplet" />
          </span>
          <span>
            <strong>Flood safety checklist</strong>
            <small>6 steps to prepare while you wait</small>
          </span>
          <Icon name="chevron" size={18} />
        </section>
      </section>
    </main>
  )
}

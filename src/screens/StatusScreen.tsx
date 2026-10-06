import { useState } from "react"
import Header from "@/components/Header"
import Icon from "@/components/Icon"

interface StatusScreenProps {
  onBack: () => void
}

export default function StatusScreen({ onBack }: StatusScreenProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <main className="screen status-screen">
      <Header back onBack={onBack} title="Request status" />
      <section className="status-hero">
        <p className="eyebrow">REFERENCE RL-2849</p>
        <div className="status-icon-wrap">
          <span className="pulse-ring" />
          <span className="status-main-icon">
            <Icon name="shield" size={35} />
          </span>
        </div>
        <h1>Your request is verified</h1>
        <p>
          A coordinator has confirmed your details. Stay somewhere safe and keep
          your phone nearby.
        </p>
      </section>

      <section className="timeline-card">
        <div className="timeline-item complete">
          <span className="timeline-marker">
            <Icon name="check" size={15} />
          </span>
          <div>
            <strong>Request submitted</strong>
            <small>Today, 10:24 AM</small>
          </div>
        </div>
        <div className="timeline-item current">
          <span className="timeline-marker">
            <Icon name="check" size={15} />
          </span>
          <div>
            <strong>Details verified</strong>
            <small>Today, 10:31 AM</small>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-marker">
            <Icon name="truck" size={15} />
          </span>
          <div>
            <strong>Rescue team dispatched</strong>
            <small>Waiting for assignment</small>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-marker">
            <Icon name="home" size={15} />
          </span>
          <div>
            <strong>Assistance complete</strong>
            <small>We’ll update you here</small>
          </div>
        </div>
      </section>

      <section className="case-card">
        <div className="case-card-title">
          <span className="case-type-icon">
            <Icon name="truck" />
          </span>
          <div>
            <small>REQUEST TYPE</small>
            <strong>Evacuation</strong>
          </div>
          <span className="priority-badge">HIGH PRIORITY</span>
        </div>
        <button
          className="case-details-toggle"
          onClick={() => setExpanded((value) => !value)}
        >
          Request details
          <span className={expanded ? "rotate" : ""}>
            <Icon name="chevron" size={18} />
          </span>
        </button>
        {expanded && (
          <div className="expanded-details">
            <div>
              <span>People</span>
              <strong>2</strong>
            </div>
            <div>
              <span>Special care</span>
              <strong>Elderly</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Bang Khen</strong>
            </div>
          </div>
        )}
      </section>

      <section className="waiting-note">
        <Icon name="clock" size={20} />
        <div>
          <strong>While you wait</strong>
          <p>
            Move to higher ground if it is safe. Do not enter moving floodwater.
          </p>
        </div>
      </section>

      <button className="secondary-button">
        <Icon name="phone" size={18} /> Call emergency hotline
      </button>
    </main>
  )
}

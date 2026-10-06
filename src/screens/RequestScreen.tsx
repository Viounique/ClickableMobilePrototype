import { useState } from "react"
import Header from "@/components/Header"
import Icon from "@/components/Icon"
import type { Emergency, IconName } from "@/types"

interface RequestScreenProps {
  onBack: () => void
  onSubmitted: () => void
}

const emergencyOptions: { label: Emergency icon: IconName detail: string }[] = [
  { label: "Medical", icon: "cross", detail: "Injury or illness" },
  { label: "Evacuation", icon: "truck", detail: "Need to leave" },
  { label: "Food & Water", icon: "droplet", detail: "Essential supplies" },
  { label: "Other", icon: "spark", detail: "Another emergency" },
]

const careOptions = ["Infant", "Elderly", "Bedridden"]

export default function RequestScreen({
  onBack,
  onSubmitted,
}: RequestScreenProps) {
  const [emergency, setEmergency] = useState<Emergency | null>(null)
  const [people, setPeople] = useState(2)
  const [flags, setFlags] = useState<string[]>(["Elderly"])
  const [phone, setPhone] = useState("081 234 5678")
  const [submitted, setSubmitted] = useState(false)

  function toggleFlag(flag: string) {
    setFlags((current) =>
      current.includes(flag)
        ? current.filter((item) => item !== flag)
        : [...current, flag],
    )
  }

  function submit() {
    if (!emergency) return
    setSubmitted(true)
    window.setTimeout(onSubmitted, 1050)
  }

  if (submitted) {
    return (
      <main className="screen success-screen">
        <div className="success-graphic">
          <span className="success-ring" />
          <span className="success-check">
            <Icon name="check" size={42} strokeWidth={2.5} />
          </span>
        </div>
        <p className="eyebrow">REQUEST RECEIVED</p>
        <h1>Help is on the way</h1>
        <p>
          Your request is saved and has been shared with the rescue coordination
          team.
        </p>
        <div className="reference-pill">
          Reference ID&nbsp; <strong>RL-2849</strong>
        </div>
      </main>
    )
  }

  return (
    <main className="screen request-screen">
      <Header back onBack={onBack} title="Request assistance" />
      <div className="request-progress">
        <span className="filled" />
        <span />
        <span />
      </div>
      <div className="form-content">
        <div className="form-intro">
          <p className="eyebrow">STEP 1 OF 3</p>
          <h1>What do you need?</h1>
          <p>Choose the option that best describes your situation.</p>
        </div>

        <div className="emergency-grid">
          {emergencyOptions.map((item) => (
            <button
              className={
                emergency === item.label
                  ? "emergency-option selected"
                  : "emergency-option"
              }
              key={item.label}
              onClick={() => setEmergency(item.label)}
            >
              <span className="option-icon">
                <Icon name={item.icon} size={24} />
              </span>
              <strong>{item.label}</strong>
              <small>{item.detail}</small>
              {emergency === item.label && (
                <span className="selected-check">
                  <Icon name="check" size={14} />
                </span>
              )}
            </button>
          ))}
        </div>

        <section className="form-section">
          <div>
            <label>Number of people</label>
            <small>Including yourself</small>
          </div>
          <div className="stepper">
            <button
              onClick={() => setPeople((value) => Math.max(1, value - 1))}
            >
              −
            </button>
            <strong>{people}</strong>
            <button
              onClick={() => setPeople((value) => Math.min(20, value + 1))}
            >
              +
            </button>
          </div>
        </section>

        <section className="care-section">
          <label>Does anyone need special care?</label>
          <div className="care-options">
            {careOptions.map((flag) => (
              <button
                className={
                  flags.includes(flag) ? "care-pill selected" : "care-pill"
                }
                key={flag}
                onClick={() => toggleFlag(flag)}
              >
                {flags.includes(flag) && <Icon name="check" size={14} />}
                {flag}
              </button>
            ))}
          </div>
        </section>

        <label className="phone-field">
          <span>Phone number</span>
          <span className="input-wrap">
            <Icon name="phone" size={18} />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              inputMode="tel"
            />
          </span>
        </label>

        <div className="location-confirmed">
          <span>
            <Icon name="location" size={19} />
          </span>
          <div>
            <strong>Location captured</strong>
            <small>Accuracy within 12 metres</small>
          </div>
          <Icon name="check" size={19} />
        </div>
      </div>

      <div className="sticky-submit">
        {!emergency && <small>Select an assistance type to continue</small>}
        <button
          className="primary-button"
          disabled={!emergency}
          onClick={submit}
        >
          SUBMIT HELP REQUEST
          <Icon name="chevron" size={18} />
        </button>
      </div>
    </main>
  )
}

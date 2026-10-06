import Header from "@/components/Header"
import Icon from "@/components/Icon"

export default function ProfileScreen() {
  return (
    <main className="screen profile-screen">
      <Header title="Your profile" />
      <section className="profile-content">
        <div className="profile-avatar">
          <Icon name="person" size={35} />
        </div>
        <h1>Narin S.</h1>
        <p>Bangkok, Thailand</p>
        <div className="profile-list">
          <button>
            <span>
              <Icon name="phone" /> Contact information
            </span>
            <Icon name="chevron" size={18} />
          </button>
          <button>
            <span>
              <Icon name="people" /> Household details
            </span>
            <Icon name="chevron" size={18} />
          </button>
          <button>
            <span>
              <Icon name="shield" /> Privacy & safety
            </span>
            <Icon name="chevron" size={18} />
          </button>
          <button>
            <span>
              <Icon name="menu" /> Language
            </span>
            <strong>English</strong>
          </button>
        </div>
      </section>
    </main>
  )
}

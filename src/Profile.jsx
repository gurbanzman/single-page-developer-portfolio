import ContactLinks from "./ContactLinks";
import profile from "./assets/images/portfolio-profile.png"

export default function Profile() {
  return (
    <div className="profile-section">
      <ContactLinks />
      <div className="profile-user">
         <img src={profile} />
      </div>
    </div>
  )
}

import ContactLinks from "./ContactLinks";

export default function Profile() {
  return (
    <div className="profile-section">
      <ContactLinks />
      <div className="profile-user">
         <img src="/src/assets/images/portfolio-profile.png" alt="portfolio-profile.png" />
      </div>
    </div>
  )
}

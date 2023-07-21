import React from 'react'
import "./card.css"

const PoliticsCard = () => {
  return (
    <>

  
<section className="hero-section">
  <div className="card-grid">
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/hand-drawn-case-study-illustration_23-2149082710.jpg)"
        }}
      />
      <div className="card__content">
        <p className="card__category">Research</p>
        {/* <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    </a>
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage:
            "url(https://www.kommunicate.io/assets/resources/dev/images/guide-to-whatsapp-bulk-messaging.png)"
        }}
      />
      <div className="card__content">
        <p className="card__category">Bulk Messaging</p>
        {/* <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    </a>
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/ad-campaign-word-cloud-concept-155260881.jpg)"
        }}
      />
      <div className="card__content">
        <p className="card__category">Campaigns</p>
        {/* <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    </a>
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/popular-social-media-icons_248162-157.jpg?w=2000)"
        }}
      />
      <div className="card__content">
        <p className="card__category">Social Media</p>
        {/* <h3 className="card__heading">Example Card Heading</h3> */}
      </div>
    </a>
    <div></div>
  </div>
</section>


    </>
  )
}

export default PoliticsCard
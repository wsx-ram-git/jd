import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <section className="clsTestmonials">
        <div className="container">
          <div className="row">
            <h2>WHAT OUR CUSTOMERS SAY</h2>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p>Fove years ago I bought my house on lake Wisconsin, I knew nothing baout piers lifts etc... Dan's crew installed my pier and when I bought a new one installed that one too. Everything is done in a timely manner and the price is reasonable. Can't recomend enough. Thanks Dan!</p>
                  <span>-Scott Schmidlkofer </span>
                </div>
                <div className="carousel-item">
                  <p>We purchased a used boat rack, and the remote drive on it failed shortly after getting it installed. Our normal dock company didn't know when they could get the new lift drive unit we wanted. A friend recommended Hellenbrand. I called and talked with the owner on a Wednesday. He had the unit I wanted in stock. The next morning,...</p>
                  <span>-MARK GREENE </span>
                </div>
                <div className="carousel-item">
                  <p>It's Magic! Fantastic first experience. We recently moved to a lake property and had a pile of pier sections and boat lifts in our front yard. I called around to installation companies and what I found made Dan and his team stand out was that he installed when you called pending the queue that might be in front of you....</p>
                  <span>-Nic Schilling </span>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="clsReadMoreBtn"><Link href="/"><a className="btn btn-outline-success">READ MORE TESTIMONIALS</a></Link></div>
          </div>
        </div>
      </section>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-2">
            <div className="clsQuickLink">
              <h3>Quick Links </h3>
              <ul>
                <li>
                  <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                  <Link href="/"><a>About Us</a></Link>
                </li>
                <li>
                  <Link href="/"><a>Docks & Piers</a></Link>
                </li>
                <li>
                  <Link href="/"><a>Lifts & Hoists</a></Link>
                </li>
                <li>
                  <Link href="/"><a>Used Docks/Lifts</a></Link>
                </li>
                <li>
                  <Link href="/"><a>Services</a></Link>
                </li>
                <li>
                  <Link href="/"><a>Contact Us</a></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="clsFreeEstimates">
              <div className="clsfooterImage"><img className="img-fluid" src="monona_bg.jpg" /></div>
              <div className="clsFooterText">Free Estimates on New Piers, Boat Lifts, and Docks. Free Estimates on pier / dock removal, installation and storage. </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="clsFacebook">
              <img src="fb-pc0thp8c8wt85mf4qqh5vz0oqwbuqwf9i3d8apww9y.png" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row clsSiteAddress">
              <div className="col-lg-5"><img className="img-fluid" src="JD_hellenbrand-footer-logo.jpg" /></div>
              <div className="col-lg-7">
                <div className="clsAddress">N1792 Ryan Road<br />Lodi, WI 53555</div>
                <div className="clsAddress"><Link href="/"><a>608-513-0690</a></Link></div>
                <div className="clsAddress"><Link href="/">	jdhellenbrand@yahoo.com</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clsCopyRights">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <p>© 2021 JD Hellenbrand – All Rights Reserved. | <Link href="/"><a>Privacy Policy</a></Link> | <Link href="/"><a>Site Map</a></Link></p>
            </div>
            <div className="col-lg-5 text-right">
              <span className="website_design_by">Website Design by <a href="https://www.webstix.com/" target="_blank" rel="noopener"><img className="alignright size-full wp-image-24223" src="https://www.weberhomes.com/wp-content/uploads/2021/07/icon_webstix.gif" alt="webstix logo" width="75" height="20" />
              </a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
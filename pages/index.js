import styles from '../styles/Home.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout'


export default function Home() {
  return (
    <div classNameName={styles.container}>
 
 <Layout>
    
      <section className="clsBannerImage">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clsBannertext">
              <p className="text-white fs-5">Boat Lifts & Docks/Piers</p>
              <h1 className="text-white fs-1 fw-bolder">Madison's Boat<br />Lift & Pier Expert</h1>
              <p className="text-white fs-3 pt-3"> 608-513-0690</p>
            </div>
            <div className="col-lg-6 clsBannerForm">
            {/* <h2>How Can We Help You?</h2>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container padding-y clsWelcomeContent">
        <div className="row">
          <h1 className="text-center fs-1 fw-bolder">Why <span>JD Hellenbrand</span></h1>
          <p className="text-center clsWelcomeContentSection">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="clsThreeBox row gx-5">
            <div className="col-lg-4 text-center">
              <div className="bg-light">
                <h2>Call Us</h2>
                <p>Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.</p>
                <div className="clsGreenRound"><i className="fa fa-phone" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-light">
                <h2>Free Estimate</h2>
                <p>Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.</p>
                <div className="clsGreenRound"><i className="fa fa-calculator" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-light">
                <h2>Get On The Lake</h2>
                <p>Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.</p>
                <div className="clsGreenRound"><i className="fa fa-tint" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container padding-y clsWelcomeContent">
        <div className="row clsBlackImage gx-5">
          <h1 className="text-center fs-1 fw-bolder">For <span>Sale</span></h1>
          <div className="col-lg-4 clsSlaeSeaction">
            <div className="clsBgImageSection">
              <div className="clsImage"><img className="img-fluid" src="docks.jpg"></img></div>
              <div className="clstext">Docks/Piers</div>
            </div>
          </div>
          <div className="col-lg-4 clsSlaeSeaction">
            <div className="clsBgImageSection">
              <div className="clsImage"><img className="img-fluid" src="lifts.jpg"></img></div>
              <div className="clstext">Lifts/Hoists</div>
            </div>
          </div>
          <div className="col-lg-4 clsSlaeSeaction">
            <div className="clsBgImageSection">
              <div className="clsImage"><img className="img-fluid" src="used_docks.jpg"></img></div>
              <div className="clstext">Used Docks/Lifts</div>
            </div>
          </div>
        </div>
      </div>
      <section className="clsOurService">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8">
              <h2>Our <span>Services</span></h2>
              <p>We sell new docks, piers, and boat lifts / boat hoists in the Madison Wisconsin, Dane County area including Lake Wisconsin.  We’ll install your pier, dock and boat lift in the spring and remove it in the fall. We’ll even store it over the winter. </p>
              <p>
                Need something special? We carry stairs, platforms, and many unique boating accessories. Our Professional Barge Crane Services will get you in and out of emergencies or tight situations.
              </p>
              <Link href="/"><a className="btn btn-outline-success">More details</a></Link>
            </div>
            <div className="col-lg-4">
              <div className="clsWhiteBg">
                <div className="row">
                  <div className="col-lg-3"><img className="img-fluid" src="index.png" /></div>
                  <div className="col-lg-9"><h3>Installation &<br /> Removal</h3> </div>
                </div>
              </div>
              <div className="clsWhiteBg">
                <div className="row">
                  <div className="col-lg-3"><img className="img-fluid" src="index.png" /></div>
                  <div className="col-lg-9"><h3>Repairs</h3></div>
                </div>
              </div>
              <div className="clsWhiteBg">
                <div className="row">
                  <div className="col-lg-3"><img className="img-fluid" src="index.png" /></div>
                  <div className="col-lg-9"><h3>Barge Services</h3> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clsBlueCrane">
        <div className="container">
          <div className="row gx-5">
            <h2>Blue Crane is now <span>JD Hellenbrand!</span></h2>
            <div className="col-lg-6">
              <p>We are a professional, full-service, fully insured supplier of new or used docks, piers, and boatlifts for Lakes Mendota, Monona, Waubesa, Kegonsa and Lake Wisconsin.</p>
              <p>We serve many other lakes too – just email us.</p>
              <p>We sell and install Hewitt docks / piers & boat lifts / hoists on Madison-area lakes – and beyond.</p>
              <p>If you want a new pier / dock or boat lift / hoist, we’re your guys. We have a good supply of used docks and lifts too.</p>
              <p>Need your dock or pier put in or taken out? Dock and Pier installation is easy for us – we have the right equipment. We’ll even store your docks and lifts over the winter and reinstall them in the spring.</p>
              <p>We’re a homegrown, owner operated business. We’re hard working, friendly, and offer reasonable prices. Just ask your neighbor; they’ll know who we are.</p>
              <Link href="/"><a className="btn btn-outline-success">Read More</a></Link>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="jd-hellenbrand-welcome.jpg" />
            </div>
          </div>
        </div>
      </section>     
     </Layout>
    </div>
  )
}

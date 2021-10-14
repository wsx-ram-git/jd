import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/dist/client/link";

export default function about({ title, description, keywords, children }) {
    return (
        <div>
            <Layout>
                <div className="image-aboutus-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="lg-text">About Us</h1>
                                <p className="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bread-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-8">
                                <ol class="breadcrumb">
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li class="active">About Us</li>
                                </ol>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-4">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row py-4 mt-4">
                        <div className="col-lg-8">
                            <h2>Blue Crane is now JD Hellenbrand !</h2>
                            <p>We are a professional, full-service, fully insured supplier of new or used docks, piers, and boatlifts for Lakes Mendota, Monona, Waubesa, Kegonsa and Lake Wisconsin.</p>
                            <p>We serve many other lakes too – just email us.</p>
                            <p>We sell and install Hewitt docks / piers & boat lifts / hoists on Madison-area lakes – and beyond.</p>
                            <p>If you want a new pier / dock or boat lift / hoist, we’re your guys. We have a good supply of used docks and lifts too.</p>
                            <p>Need your dock or pier put in or taken out? Dock and Pier installation is easy for us - we have the right equipment. We’ll even store your docks and lifts over the winter and reinstall them in the spring.</p>
                        </div>
                        <div className="col-lg-4">
                            <img class="img-fluid" src="barge-lifting-boat-lift-1300x975-1024x768.jpg" />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

Layout.defaultProps = {
    title: 'JD Hellenbrand | JD Hellenbrand',
    description: 'Boats',
    keywords: 'JD Hellenbrand'
}
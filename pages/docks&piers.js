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
                                <h1 className="lg-text">Docks & Piers</h1>
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
                                    <li class="active">Docks & Piers</li>
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
                            <h2>Let the good times roll</h2>
                            <p>
                                Roll-A-Dock is simply the fastest and easiest way to get full enjoyment from your waterfront property. In cold climates, there’s no need to endure frigid water – just roll it in and you’re ready for action. Roll-A-Dock is ideally suited to gradual slopes and works equally well on soft or rocky bottoms. A basic dock can be easily placed with a vehicle or installed in a matter of minutes by as few as two people.
                            </p>
                            <h3>Easy Adjustment Over a Wide Range of Depths</h3>
                            <p>A built-in winch with removable hand crank allows quick height adjustment for different depths or changing water levels. Adjustments are easily made without ever stepping into the water. Standard Model adjusts from 2-1⁄2' to 5-1⁄2'. Deep Water Kit adjusts from 2-1⁄2' to 8'.</p>
                            <h3>4' and 6' Widths, Aluminum or Galvanized Steel</h3>
                            <p>
                                While some portable docks are as narrow as 36", Roll-A-Dock gives you the choice of 4' or 6' wide models - plenty of room for people to meet and pass. Select all-aluminum construction for low weight and easy handling or galvanized steel for maximum strength.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img class="img-fluid  mt-5" src="roll.jpg" />
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
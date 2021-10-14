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
                                <h1 className="lg-text">Lifts & Hoists</h1>
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
                                    <li class="active">Lifts & Hoists</li>
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
                            <p>
                            Hewitt Sectional Dock Systems offer greater economy, quick setup and minimal maintenance. Frames and decking are preassembled in easy to handle modules. The aluminum sides wrap around the decking to maintain a crisp, clean appearance. Section ends may be dressed off with optional aluminum or cedar end caps. Hewitt Sectional Docks offer many layout possibilities and give you the choice of three different decking options.
                            </p>
                            <p>
                            Frames, poles and brackets are all made from rustproof, corrosion resistant aluminum – never needs painting. Extruded aluminum side rails assures high strength and stability for a lifetime of service. Decking is fitted into a continuous channel on both sides and mechanically fastened for better 
                            </p>
                        </div>
                        <div className="col-lg-4">
                        <img class="img-fluid" src="sectional.jpg" />
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
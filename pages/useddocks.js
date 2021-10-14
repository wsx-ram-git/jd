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
                                <h1 className="lg-text">Used Docks/Lifts</h1>
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
                                    <li class="active">Used Docks/Lifts</li>
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
                            <h2>Modular Floating Dock System </h2>
                            <p>
                                When it comes to superior design and functionality, we've developed innovative solutions to problems that other manufacturers haven't even contemplated. Wave Armor's exclusive "H-Beam Channel Lock" connection system makes your Wave Dock section connections seamless and infinitely modular. The battle-proven design also provides just the right mix of rigidity and flexibility to handle anything Mother Nature can throw at it.
                            </p>
                            <p>
                                <b>Key Features:</b>
                                <ul className="mt-2">
                                    <li>Beautifully molded durable polyethylene construction with built-in UV protection.</li>
                                    <li>Easy to install, proprietary “H-Beam Channel Lock” connection system for hassle-free assembly/disassembly.</li>
                                    <li>Rugged, purpose-built dock float with rigid, closed cell foam-filled interior.</li>
                                    <li>This float keeps your deck where it is supposed to be, flat on the water.</li>
                                    <li>In-mold fastener attachments spaced around perimeter for adding tie-down cleats where you need them.</li>
                                    <li>Easily attaching accessories and components including: WavePort, PWC ports, bumpers, dock ramps, pipe adapters and post attachments, all utilizing the “H-Beam Channel Lock” attachment system.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img class="img-fluid" src="wavearm.jpg" />
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
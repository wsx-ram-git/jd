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
                                <h1 className="lg-text">Contact Us</h1>
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
                                    <li class="active">Contact Us</li>
                                </ol>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-4">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    {/* <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123" width="100%" height="650px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div> */}
                    <div class="contact-form">
                        <h1 class="title">Contact Us</h1>
                        <h2 class="subtitle">We are here assist you.</h2>
                        <form action="">
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="email" name="e-mail" placeholder="Your E-mail Adress" />
                            <input type="tel" name="phone" placeholder="Your Phone Number" />
                            <textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
                            <button class="btn-send">Get a Call Back</button>
                        </form>
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
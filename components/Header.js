import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from './Navbar'
export default function Header() {
    return (
<div className="container">
        <div className="row py-4">
          <div className="col-lg-3 col-7">
          <Link href="/"><a><img src="JD_hellenbrand_logo.jpg" className="img-fluid"></img></a></Link>
          </div>
          <div className="col-lg-9 col-5">
            <NavBar/>
          </div>
        </div>
      </div>

    )
}

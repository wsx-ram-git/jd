import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function NavBar() {
    return (
<nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link href="/"><a class="nav-link active" aria-current="page">Home</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/aboutus"><a class="nav-link">About Us</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/docks&piers"><a class="nav-link">Docks & Piers</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/lifts&hoists"><a class="nav-link">Lifts & Hoists</a></Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/useddocks"><a class="nav-link">Used Docks/Lifts</a></Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link href="/"><a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a></Link>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link href="/docks&piers"><a class="dropdown-item">Docks & Piers</a></Link></li>
                        <li><Link href="/lifts&hoists"><a class="dropdown-item">Lifts & Hoists</a></Link></li>
                        <li><Link href="/useddocks"><a class="dropdown-item">Used Docks/Lifts</a></Link></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <Link href="/contactus"><a class="nav-link">Contact Us</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

    )
}

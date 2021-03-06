import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'


export default function Layout({title, description, keywords, children}) {
    return (
        <div className={styles.container}>
        <Head>
          <title>JD Hellenbrand</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/jd.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
        </Head>
        <Header/>
       {children}
       <Footer/>
        </div>
    )
}

Layout.defaultProps={
    title:'JD Hellenbrand | JD Hellenbrand',
    description:'Boats',
    keywords: 'JD Hellenbrand'
}
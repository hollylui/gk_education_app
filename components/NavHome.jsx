import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import logo from '../assets/images/logo.png'

export default function NavBarHome () {

    return(
        <div className='container'> 
        <div className={styles.homeNav}>
        <Link href='/'> 
        <div className={styles.logo}>
            <img src={logo}></img>
        </div>
        </Link>
        <ul className={styles.navlist}>
         
          <Link className="homeLink" href='/about'>
              <li>ABOUT</li>
          </Link>

          <Link  href='/contact'>
          <li>CONTACT</li>
          </Link>
        </ul>
      </div>
      </div>

    )
}
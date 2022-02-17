import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import logo from '../assets/images/logo.png';
import Image from 'next/image';

export default function NavBarHome () {

    return(
        
        <div className={styles.homeNav}>
        <Link href='/'> 
        <div className={styles.logo}>
            <Image src={logo} width={100} height={100} className={styles.logo}/>
        </div>
        </Link>
        <ul className={styles.navlist}>
         
          <Link className={styles.homeLink} href='/about'>
              <li>ABOUT</li>
          </Link>

          <Link  className={styles.homeLink} href='/contact'>
          <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    

    )
}
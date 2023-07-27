import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/components/header.module.scss'
import logo from '/public/logo.png'

const links = [{
    label: 'Work',
    route: '/'
},{
    label: 'Projects',
    route: '/posts'
},{
    label: 'About',
    route: 'https://store.collectors-empire.com/'
}]
export default function Header(){
    return(
        <header>
            <Link href="/">
                <Image width={30} height={47.79} className={styles.logo} src={logo} alt='Collectors Empire'/>
            </Link>
            <nav className={styles.block_navigation}>
                <ul className={styles.navigation}>
                    {links.map (({label, route}) =>(
                        <li className={styles.items_menu} key = {route}>
                            <Link href = {route} data-text={label}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>                
            </nav>
        </header>
    )
}
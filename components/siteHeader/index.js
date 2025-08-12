import Image from 'next/image'
import Link from 'next/link'

import styles from './SiteHeader.module.css'
import logo from '../../public/images/logo.png'

export default function SiteHeader() {
	return (
		<div className={styles.container}>
			<Image src={logo} alt="" height="53" width="135" />
			<Link href='/'>Home</Link>
			<Link href='/catalog'>Catalog</Link>
		</div>
	)
}

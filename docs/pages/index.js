import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import styles from './index.styl'
console.log(styles)
const Home = () => (
	<div>
		<Header title="首页"></Header>
		<div className={styles.hero}>
			<Link href="/about"><a>here</a></Link>
			<h1 className='title'>Welcome to Next.js!</h1>
		</div>
	</div>
)

export default Home

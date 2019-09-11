import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const Header = ({title}) => {
	return (<Head>
		<title>{title}</title>
	</Head>)
}


export default Header
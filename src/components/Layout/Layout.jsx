import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './Layout.module.scss'

export default function Layout({ children, pageTitle, ...props }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>{pageTitle}</title>
			</Head>
			<div className={classes.content}>
				<Header />
				{children}
			</div>
			<Footer></Footer>
		</>
	)
}

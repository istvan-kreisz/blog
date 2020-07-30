import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Meta from '../Meta/Meta'
import classes from './Layout.module.scss'

export default function Layout({ children, pageTitle, description, ...props }) {
	return (
		<div className={classes.mainContainer}>
			<div className={classes.main}>
				<Meta title={pageTitle} desc={description}></Meta>
				<div className={classes.content}>
					<Header {...{ isWhite: props.isWhite || false }} />
					{children}
				</div>
			</div>
			<div className={classes.footer}>
				<Footer></Footer>
			</div>
		</div>
	)
}

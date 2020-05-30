import Link from 'next/link'
import classes from './Header.module.scss'

export default function Header(props) {
	return (
		<>
			<header className={props.isWhite ? classes.white : null}>
				<nav className={classes.navigation}>
					<Link href="/">
						<a className={classes.title}>Istvan Kreisz</a>
					</Link>
					<div className={classes.spacer}></div>
					<div className={classes.links}>
						<Link href="/about">
							<a>About</a>
						</Link>
						<Link href="/portfolio">
							<a>Portfolio</a>
						</Link>
						<Link href="/">
							<a>Blog</a>
						</Link>
					</div>
				</nav>
			</header>
		</>
	)
}

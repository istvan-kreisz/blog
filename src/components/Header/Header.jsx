import Link from 'next/link'
import classes from './Header.module.scss'

export default function Header(props) {
	return (
		<>
			<header style={{ ...(props.color && { color: props.color }) }}>
				<nav className={classes.navigation}>
					<div className={classes.titleContainer}>
						{props.leftLink === undefined ? (
							<Link href="/">
								<a>Istvan Kreisz</a>
							</Link>
						) : (
							props.leftLink
						)}
					</div>
					<div className={classes.spacer}></div>
					<div className={classes.links}>
						{props.rightLinks === undefined ? (
							<>
								{' '}
								<Link href="/">
									<a>About</a>
								</Link>
								<Link href="/portfolio">
									<a>Portfolio</a>
								</Link>
								<Link href="/blog">
									<a>Blog</a>
								</Link>
							</>
						) : (
							props.rightLinks
						)}
					</div>
				</nav>
			</header>
		</>
	)
}

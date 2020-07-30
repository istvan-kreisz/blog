import Link from 'next/link'
import classes from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.content}>
				<div className={classes.links}>
					<Link href="/">
						<a className={classes.title}>Istvan Kreisz</a>
					</Link>
					<div className={classes.mediaLinks}>
						<a aria-label="github" href={process.env.github}>
							<FontAwesomeIcon
								icon={['fab', 'github']}
								size="2x"
							/>
						</a>
						<a aria-label="twitter" href={process.env.twitter}>
							<FontAwesomeIcon
								icon={['fab', 'twitter']}
								size="2x"
							/>
						</a>
						<a aria-label="linkedin" href={process.env.linkedin}>
							<FontAwesomeIcon
								icon={['fab', 'linkedin']}
								size="2x"
							/>
						</a>
						<a aria-label="instagram" href={process.env.instagram}>
							<FontAwesomeIcon
								icon={['fab', 'instagram']}
								size="2x"
							/>
						</a>
					</div>
				</div>
				<p className={classes.copyright}>
					Copyright © 2020. Istvan Kreisz
				</p>
			</div>
		</footer>
	)
}

import Link from 'next/link'
import classes from './Footer.module.scss'
import { globals } from '../../shared/global'
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
						<a href={globals.github}>
							<FontAwesomeIcon
								icon={['fab', 'github']}
								size="2x"
							/>
						</a>
						<a href={globals.twitter}>
							<FontAwesomeIcon
								icon={['fab', 'twitter']}
								size="2x"
							/>
						</a>
						<a href={globals.linkedin}>
							<FontAwesomeIcon
								icon={['fab', 'linkedin']}
								size="2x"
							/>
						</a>
						<a href={globals.instagram}>
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

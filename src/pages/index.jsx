import Layout from '../components/Layout/Layout'
import Backdrop from '../components/Backdrop/Backdrop'
import classes from '../pages-lib/about/about.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = ({ title, description }) => {
	return (
		<>
			<Backdrop></Backdrop>
			<Layout pageTitle={`${title} | About`} description={description}>
				<div className={classes.container}>
					<section className={classes.main}>
						<div className={classes.titlebar}>
							<h1 className="title">Hi, I'm Istvan!</h1>
							<h2>iOS and Web Developer</h2>
						</div>

						<p>
							Lifelong learner & creator. I love technology. But
							what really gets me going is working on meaningful
							products, especially if they can make me a
							millionaire one day. <br /> Check out my bio below
							or visit the{' '}
							<Link href="/projects">
								<a>Projects</a>
							</Link>{' '}
							page to see my past works.
							<br />
							For stories about software development & building
							products, visit my
							<Link href="/blog">
								<a> Blog</a>
							</Link>
							{''}.
						</p>
					</section>
					<section className={classes.sidebar}>
						<div className={classes.mediaLinks}>
							<h4>Follow me:</h4>
							<a aria-label="github" href={process.env.github}>
								<FontAwesomeIcon
									icon={['fab', 'github']}
									size="lg"
								/>
							</a>
							<a aria-label="twitter" href={process.env.twitter}>
								<FontAwesomeIcon
									icon={['fab', 'twitter']}
									size="lg"
								/>
							</a>
							<a
								aria-label="linkedin"
								href={process.env.linkedin}
							>
								<FontAwesomeIcon
									icon={['fab', 'linkedin']}
									size="lg"
								/>
							</a>
							<a
								aria-label="instagram"
								href={process.env.instagram}
							>
								<FontAwesomeIcon
									icon={['fab', 'instagram']}
									size="lg"
								/>
							</a>
						</div>
						<div className={classes.personalDetails}>
							<h4>Personal details:</h4>
							<h5>Location</h5>
							<p>NYC, New York</p>
							<h5>Phone</h5>
							<a href="tel:+36308224417">
								<p>+36308224417</p>
							</a>
							<h5>Email</h5>
							<a href="mailto: hello@istvan-kreisz.com">
								<p>hello@istvan-kreisz.com</p>
							</a>
						</div>
					</section>
				</div>
				<section className={classes.bio}>
					<h3>A little about me:</h3>
					<p>
						I'm Hungarian-American dual citizen, born in the US but
						grew up in Hungary. After high school I decided to move
						to the US to do my studies there. I graduated as an
						electrical engineer in 2017 only to realize that my true
						passion was software development. So I did a bit of a
						career change and taught myself as much as I could about
						programming over the course of the next couple of years.
						<br />
						<br />I started my career as an iOS developer. I worked
						as an iOS developer for 2 startups (
						<a href="https://www.labtwin.com/">LabTwin</a> and{' '}
						<a href="https://www.sidelineswap.com/">SidelineSwap</a>
						) and was the co-founder and lead developer of a company
						creating a{' '}
						<a href="https://apps.apple.com/us/app/ball-smasher/id1381559021">
							game
						</a>{' '}
						that reached the #2 spot on the US App Store and got
						millions of downloads. More recently I learned some web
						development and built and launched two products:{' '}
						<a href="https://copdeck.com">CopDeck</a>, a sneaker
						inventory manager and price comparison app, and{' '}
						<a href="https://hideandseek.world">
							Hide & Seek World
						</a>
						, a multiplayer online game.
						<br />
						<br />
						If you want to get in touch, you can reach me at:
						<a
							className={classes.email}
							href="mailto:hello@istvan-kreisz.com"
						>
							hello@istvan-kreisz.com
						</a>
						or any of the social media links below.
					</p>
				</section>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`)

	return {
		props: {
			title: configData.default.title,
			description: configData.default.description,
		},
	}
}

export default About

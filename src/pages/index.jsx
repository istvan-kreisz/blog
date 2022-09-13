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
							<h2>Freelance iOS and Web Developer</h2>
						</div>

						<p>
							Lifelong learner and creator. I love coding and
							technology. But what really gets me going is working
							on products that have a purpose, or products that
							just make people happy.
							<br />
							<br />
							I've worked on various different iOS and web
							projects ranging from simple{' '}
							<a href="https://apps.apple.com/us/app/ball-smasher/id1381559021">
								time-waster games
							</a>{' '}
							to an advanced laboratory{' '}
							<a href="https://www.labtwin.com/">
								voice assistant application
							</a>{' '}
							and many others in between.
							<br />
							<br />
							Recently I started working as a freelance iOS and
							web developer. My 5+ years of experience of working
							on a wide range of products means that whatever you
							have in mind I can probably build it. Check out the{' '}
							<Link href="/projects">
								<a>Projects</a>
							</Link>{' '}
							page to see some of my past works.
							<br />
							<br />
							If you want to hire me or just get in touch, you can
							reach me at:
							<a
								className={classes.email}
								href="mailto:hello@istvan-kreisz.com"
							>
								hello@istvan-kreisz.com
							</a>
							or any of the social media links below.
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
							<a href="tel:+13479412889">
								<p>+1 (347) 941-2889</p>
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
						grew up in Hungary. After high school I moved to the US
						to do my studies there. I graduated as an electrical
						engineer in 2017 only to realize that my true passion
						was software development. So I did a bit of a career
						change and took a deep dive into the world of softtware
						development.
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
						millions of downloads. More recently I learned web
						development and degined, built and launched two
						products: <a href="https://copdeck.com">CopDeck</a>, a
						sneaker inventory manager and price comparison app, and{' '}
						<a href="https://hideandseek.world">
							Hide & Seek World
						</a>
						, an online multiplayer game.
						<br />
						<br />I always keep learning because software
						development is a very fast changing world, where you
						must keep up with the latest technologies and trends.
						Besides my passion for coding I'm a huge fan of history
						and an avid traveler, having travelled in Latin America,
						North America, Asia and Europe.
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

import Layout from '../components/Layout/Layout'
import Backdrop from '../components/Backdrop/Backdrop'
import classes from '../pages-lib/about/about.module.scss'
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
							<h4>iOS and Web Developer</h4>
						</div>

						<p>
							I am a very exciting person. I know this because I'm
							following a very exciting tutorial, and a
							not-exciting person wouldn't do that.
						</p>
						<h2>Yo sup here's some intro</h2>
						<p>
							I am a very exciting person. I know this because I'm
							following a very exciting tutorial, and a
							not-exciting person wouldn't do that. I am a very
							exciting person. I know this because I'm following a
							very exciting tutorial, and a not-exciting person
							wouldn't do that. I am a very exciting person. I
							know this because I'm following a very exciting
							tutorial, and a not-exciting person wouldn't do
							that. I am a very exciting person. I know this
							because I'm following a very exciting tutorial, and
							a not-exciting person wouldn't do that. I am a very
							exciting person. I know this because I'm following a
							very exciting tutorial, and a not-exciting person
							wouldn't do that. I am a very exciting person. I
							know this because I'm following a very exciting
							tutorial, and a not-exciting person wouldn't do
							that.
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
							<p>Berlin, Germany</p>
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

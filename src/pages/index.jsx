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
							I've got experience working for startups and as an
							indie developer. I love new challenges and learning
							new things. I put a strong emphasis on{' '}
							<strong>
								maintainable, elegant software architecture and
								world-class UI design
							</strong>{' '}
							in all my work.
							<br />
							<br />
							Besides my extensive experience as an iOS developer,
							I've gained experience in all stages of product
							creation as a solo developer, including:{' '}
							<strong>
								iOS, frontend and backend development, UI & UX
								design, product management
							</strong>
							.
							<br />
							<br />I enjoy working in fast-paced environments
							where creativity and ownership mindset are
							encouraged and software development principles are
							followed. I have experience working with{' '}
							<strong>
								iOS, Firebase, Google Cloud, React, Next.js,
								Typescript, web scraping.
							</strong>{' '}
							I like to stay up to date on the latest technologies
							and I enjoy developing new skills. Recently I
							started learning React Native development.
							<br />
							<br />
							Outside of work I love reading about history,
							geopolitics and technology. I'm an avid traveler,
							I've traveled in North America, Latin America,
							Europe and Asia. I love meeting new people and
							experiencing different cultures.
							<br />
							<br />
							Recently I've been working as an independent iOS and
							web developer. Check out the{' '}
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

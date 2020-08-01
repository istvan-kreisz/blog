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
							<h2>Web and iOS Developer</h2>
						</div>

						<p>
							Lifelong learner & creator. I love technology. But
							what really gets me going is working on meaningful
							products, especially if they can make me a
							millionaire one day. <br /> Check out my short bio
							below or visit the{' '}
							<Link href="/portfolio">
								<a>Portfolio</a>
							</Link>{' '}
							page to see my past works.
							<br />
							For stories about software development & building
							products, visit my
							<Link href="/">
								<a> Blog</a>
							</Link>
							{''}.
						</p>
						<h3>A little about me:</h3>
						<h5>TLDR:</h5>
						<p>
							Hungarian-American dual citizen, grew up in Hungary,
							lived in different parts of the US, currently living
							in Berlin, soon moving back to the States. I’m kind
							of a workaholic and I want to build things that have
							an impact. Read this blog to follow me on my
							journey.
						</p>

						<h5>Long version:</h5>
						<p>
							I was born in Boston, Massachusetts to Hungarian
							parents. We moved back to Hungary when I was only a
							couple months old and I grew up there. Yet being the
							naturally ambitious and curios guy I always have
							been I knew I had to move back to the States to
							chase my dreams.
							<br />
							<br />
							So after high school I moved to Massachusetts to do
							my studies there. Spent some great and life-changing
							years there, got my degree in electrical engineering
							and… moved back to Hungary. Admittedly that was not
							one of my best decisions, but I quickly realized my
							mistake. In the meantime I also found out that
							software development was my true passion so I made
							great efforts to teach myself as much as I possibly
							could instead of pursuing a career in electrical
							engineering.
							<br />
							<br />
							After about 6 months of working in Hungary, I quit
							my job and moved to Austin, TX to co-found a game
							development company with two former classmates. It
							lasted only 6 months but it was great fun. In that
							time we: wondered how we were gonna pay for food if
							our game wouldn’t take off, made a{' '}
							<a href="https://apps.apple.com/us/app/ball-smasher/id1381559021">
								game
							</a>{' '}
							which did take off, made money, started fighting…
							and then the whole thing went to shit. Oh well… onto
							the next one!
							<br />
							<br />
							After Texas I was at crossroads again. I knew I was
							still a noob in software development and I needed to
							learn more, but where do I go? I certainly didn’t
							want to go back to Hungary so my choice was between
							Western Europe and the US. I picked Berlin, Germany
							because it’s a startup capital and just a great city
							overall for young people. I spent about 1.5 years
							there working for a great{' '}
							<a href="https://www.labtwin.com/">startup</a> as an
							iOS Developer. I met some very smart people, grew a
							lot both as a developer and as a person and had a
							lot of fun in the process.
							<br />
							<br />
							Eventually I quit my Berlin job because I was
							getting close to hitting a plateau in my
							professional development and I wanted a change. Also
							I decided to move back to the US permanently. Since
							then I've shifted my focus from iOS to web
							development in order to grow my skillset and
							(eventually) become a full-stack developer.
							<br />
							<br />
							If you’re interested in my journey, save this page
							or follow me on Twitter where I’ll be posting
							regular updates. If you want to get in touch, you
							can reach me at:
							<a
								className={classes.email}
								href="mailto:hello@istvan-kreisz.com"
							>
								hello@istvan-kreisz.com
							</a>
							or any of the social media links below.
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

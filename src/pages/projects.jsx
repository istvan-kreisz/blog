import Layout from '../components/Layout/Layout'
import Backdrop from '../components/BackdropCircular/BackdropCircular'
import ProjectCard from '../pages-lib/portfolio/ProjectCard'
import classes from '../pages-lib/portfolio/portfolio.module.scss'
import matter from 'gray-matter'

const Portfolio = ({ webProjects, iosProjects, title, description }) => {
	const generateCards = (projects) => {
		if (projects && projects.length > 0) {
			return projects.map((project, index) => {
				const projectData = project.data
				const projectDesctiption = project.content
				const props = {
					index: index,
					tags: projectData.tags,
					title: projectData.title,
					description: projectDesctiption,
					date: projectData.date,
					image: projectData.image,
					link: projectData.link,
					backgroundColor: projectData.backgroundColor,
				}
				return ProjectCard(props)
			})
		} else {
			return null
		}
	}

	const webProjectList = generateCards(webProjects)
	const iosProjectList = generateCards(iosProjects)

	return (
		<>
			<Backdrop className={classes.backdrop} />
			<Layout pageTitle={`${title} | Projects`} description={description}>
				<section className={classes.header}>
					<div className={classes.titlebar}>
						<h1 className={classes.title}>Projects</h1>
						<p>
							Here are some of my past iOS and Web development
							projects
						</p>
					</div>
				</section>
				<section className={classes.projects}>
					<div className={classes.sectionTitle}>
						<h2>iOS Development</h2>
						<p>
							I have <span>5 years of experience</span> developing
							iOS apps. I <span>worked for 2 startups</span> as an
							iOS developer, <span>co-founded</span> an iOS game
							development company and I{' '}
							<span>
								built, designed and released 9 apps from
								scratch.
							</span>
							<br />
							<br />
							Skills:
							<br />
							<span>
								Swift, UIKit, SwiftUI, SpriteKit, Realm, Core
								Data, RxSwift, Combine, REST API, MVC, MVVM-C,
								Redux, Unit, UI Testing, Fastlane, Circle CI,
								Git, GitHub, Asynchronous programming,
								Bitbucket, Sketch, Figma
							</span>
						</p>
					</div>
					{iosProjectList ? (
						<ul className={classes.projectList}>
							{iosProjectList}
						</ul>
					) : null}
					<div className={classes.sectionTitle}>
						<h2>Web Development</h2>
						<p>
							I've been doing web development for 2-3 years. My
							primary focus has been frontend development with{' '}
							<span>React, TypeScript and Next.js</span>, as well
							as backend development with{' '}
							<span>Firebase and Google Cloud</span>. Since I
							started web development, I designed and built 2
							complex consumer products and several other websites
							from scratch.
							<br />
							<br />
							Skills:
							<br />
							<span>
								HTML, (S)CSS, Tailwind, JavaScript, TypeScript,
								React, Next.js, Google Cloud, Firebase, Google
								Analytics, Web Scraping, Serverless Computing,
								Netlify, Vercel, Stripe, Google Maps API
							</span>
						</p>
					</div>
					{webProjectList ? (
						<ul className={classes.projectList}>
							{webProjectList}
						</ul>
					) : null}
				</section>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`)

	const projects = (context) => {
		const keys = context.keys().reverse()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			const value = values[index]
			const document = matter(value.default)
			return { data: document.data, content: document.content }
		})
		return data
	}

	const webProjects = projects(
		require.context('../projects/web', true, /\.md$/)
	)
	const iosProjects = projects(
		require.context('../projects/ios', true, /\.md$/)
	)

	return {
		props: {
			webProjects: webProjects,
			iosProjects: iosProjects,
			title: configData.default.title,
			description: configData.default.description,
		},
	}
}

export default Portfolio

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
							Here are some of my past web and iOS development
							projects
						</p>
					</div>
				</section>
				<section className={classes.projects}>
					<div className={classes.sectionTitle}>
						<h2>Web Development</h2>
						<p>
							I recently took up web development after about 2
							years of professional iOS development. I can safely
							say I fell in love with the platform. I've been
							mainly focusing on acquiring the foundational skills
							of <span>frontend</span> web dev (
							<span>HTML, CSS, JS</span>), as well as learning my
							frontend framework of choice, <span>React</span>.
							Besides that I've been using{' '}
							<span>Firebase services</span> (authentication,
							analytics, database, hosting),{' '}
							<span>SSG (Next.js) </span>and{' '}
							<span>
								serverless functions (Google Cloud Functions)
							</span>{' '}
							extensively in my projects. Also, I've taken my
							first steps in learning <span>Node.js</span>.
						</p>
					</div>
					{webProjectList ? (
						<ul className={classes.projectList}>
							{webProjectList}
						</ul>
					) : null}
					<div className={classes.sectionTitle}>
						<h2>iOS Development</h2>
						<p>
							I started iOS development in my final year in
							college. The well-designed and user-friendly
							interfaces of iOS apps got me interested and once I
							put together my first simple app I was hooked. I
							spent the next 2 years learning the ins and outs of
							iOS / software development, building apps in my free
							time, working a full-time iOS development job and
							even co-founding an iOS game development company.
							I've used various different technologies &
							frameworks in my work as an app developer, some of
							the most notable ones:{' '}
							<span>
								Swift, Reactive Programming (Combine, RxSwift),
								UIKit, SwiftUI, Realm, Core Data, Unit, UI
								tests, Circle CI, Fastlane, AWS Cognito, AWS
								Amplify, Push Notifications, SpriteKit,
								Firebase, MVC, MVVM, MVVM-C, Redux
							</span>
							.
						</p>
					</div>
					{iosProjectList ? (
						<ul className={classes.projectList}>
							{iosProjectList}
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

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
							I started iOS development in my final year in
							college. The well-designed interfaces of iOS apps
							got me interested and once I put together my first
							app I was hooked. During my time as an iOS developer
							I've <span>worked for 2 startups</span> as an iOS
							developer, I <span>co-founded</span> my own (rather
							short-lived) iOS game development company,{' '}
							<span>
								built, designed and released 9 apps from scratch
							</span>{' '}
							and even started my own business and{' '}
							<span>built a complex consumer product from 0</span>
							. As a developer I put a lot of emphasis on creating
							clean, modularized code with a{' '}
							<span>
								well-structured and scalable architectures
							</span>
							. I've used various different technologies &
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
					<div className={classes.sectionTitle}>
						<h2>Web Development</h2>
						<p>
							I've been doing web development for 2-3 years. My
							primary focus has been frontend development with{' '}
							<span>React, TypeScript and Next.js</span>, as well
							as backend development with{' '}
							<span>Google Cloud (and Firebase)</span> serverless
							technologies. Since I started web development, I
							built 2 consumer products from the ground up:{' '}
							<a href="https://copdeck.com">CopDeck</a> and{' '}
							<a href="https://hideandseek.world">
								Hide & Seek World
							</a>
							.
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

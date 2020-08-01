import Layout from '../components/Layout/Layout'
import Backdrop from '../components/BackdropCircular/BackdropCircular'
import ProjectCard from '../pages-lib/portfolio/ProjectCard'
import classes from '../pages-lib/portfolio/portfolio.module.scss'
import matter from 'gray-matter'

const Portfolio = ({ webProjects, iosProjects, title, description }) => {
	const generateCards = (projects) => {
		if (projects && projects.length > 0) {
			return projects.map((project, index) => {
				const props = {
					index: index,
					tags: project.tags,
					title: project.title,
					description: project.description,
					date: project.date,
					image: project.image,
					link: project.link,
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
			<Layout
				pageTitle={`${title} | Portfolio`}
				description={description}
			>
				<section className={classes.header}>
					<div className={classes.titlebar}>
						<h1 className={classes.title}>Portfolio</h1>
						<p>Here are all my cool projects, check them out!</p>
					</div>
				</section>
				<section className={classes.projects}>
					<div className={classes.sectionTitle}>
						<h2>Web Development</h2>
						<p>Here's all my Web projects, blah blah blah</p>
					</div>
					{webProjectList ? (
						<ul className={classes.projectList}>
							{webProjectList}
						</ul>
					) : null}
					<div className={classes.sectionTitle}>
						<h2>iOS Development</h2>
						<p>Here's all my iOS projects, blah blah blah</p>
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
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			const value = values[index]
			const document = matter(value.default)
			return document.data
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

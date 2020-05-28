import Layout from '../components/Layout/Layout'
import classes from '../pages-lib/portfolio/portfolio.module.scss'
import matter from 'gray-matter'

// import { globals } from '../shared/global'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Portfolio = ({ projects, title, description, ...props }) => {
	console.log(projects)

	return (
		<>
			<Layout
				pageTitle={`${title} | Portfolio`}
				description={description}
			>
				<section className={classes.header}>
					<div className={classes.titlebar}>
						<h1 className={classes.title}>Portfolio</h1>
						<h4>Here are all my cool projects, check them out!</h4>
					</div>
				</section>
				<section className={classes.projects}>
					<div className={classes.sectionTitle}>
						<h3>Web Development</h3>
						<p>Here's all my Web projects, blah blah blah</p>
						<div className={classes.projectList}>
							<ul>
								{projects &&
									projects.map((project, index) => {
										return (
											<li key={index}>
												<p>{project.title}</p>
												<p>{project.description}</p>
												{/* <Link
													href={{
														pathname: `/post/${post.slug}`,
													}}
												>
													<a>
														{post.frontmatter.title}
													</a>
												</Link> */}
											</li>
										)
									})}
							</ul>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`)

	const projects = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			const value = values[index]
			const document = matter(value.default)
			return document.data
		})
		return data
	})(require.context('../projects', true, /\.md$/))

	return {
		props: {
			projects,
			title: configData.default.title,
			description: configData.default.description,
		},
	}
}

export default Portfolio

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
					</div>
					<ul className={classes.projectList}>
						{projects &&
							projects.map((project, index) => {
								return (
									<li
										className={classes.projectCard}
										key={index}
									>
										<img src="/images/sample.png" alt="" />
										<div className={classes.projectContent}>
											<ul className={classes.techList}>
												<li>Hey</li>
												<li>Hey</li>
											</ul>
											<h3>{project.title}</h3>
											<p>{project.description}</p>
											<p className={classes.date}>
												{project.date}
											</p>
										</div>
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

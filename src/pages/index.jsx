import Layout from '../components/Layout/Layout.jsx'
import ArticleCard from '../pages-lib/blog/ArticleCard'
import Backdrop from '../components/Backdrop/Backdrop'
import classes from '../pages-lib/blog/blog.module.scss'
import matter from 'gray-matter'

const Index = ({ articles, title, description, ...props }) => {
	const generateCards = (articles) => {
		if (articles && articles.length > 0) {
			return articles.map((article, index) => {
				const cardProps = {
					index: index,
					tags: article.frontmatter.tags,
					title: article.frontmatter.title,
					description: article.frontmatter.description,
					date: article.frontmatter.date,
					image: article.frontmatter.image,
					slug: article.slug,
				}
				return ArticleCard(cardProps)
			})
		} else {
			return null
		}
	}

	const articlesList = generateCards(articles)

	return (
		<>
			<Backdrop className={classes.backdrop} />
			<Layout pageTitle={`${title} | Blog`} description={description}>
				<section className={classes.header}>
					<div className={classes.intro}>
						<h1>Welcome to my blog</h1>
						<h4>
							Read about what I’m up to here yo. Lots of cool
							stories and whatnot.
						</h4>
						<div className={classes.searchBar}>
							<input type="text" placeholder="Search articles" />
							<button>Search</button>
						</div>
						<div className={classes.searchByTags}>
							<p>Filters:</p>
							<button>Web</button>
							<button>iOS</button>
							<button>Productivity</button>
						</div>
					</div>
					<div className={classes.imageContainer}>
						<img src="/images/sample.png" alt="" />
					</div>
				</section>
				<section className={classes.articles}>
					{articlesList ? (
						<ul className={classes.articlesList}>{articlesList}</ul>
					) : null}
				</section>
			</Layout>
		</>
	)
}

export default Index

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`)

	const articles = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			const value = values[index]
			const document = matter(value.default)
			return {
				frontmatter: document.data,
				markdownBody: document.content,
				slug,
			}
		})
		return data
	})(require.context('../posts', true, /\.md$/))

	return {
		props: {
			articles: articles,
			title: configData.default.title,
			description: configData.default.description,
		},
	}
}

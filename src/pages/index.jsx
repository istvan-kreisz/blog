import Layout from '../components/Layout/Layout.jsx'
import ArticleCard from '../pages-lib/blog/ArticleCard'
import Backdrop from '../components/BackdropCircular/BackdropCircular'
import classes from '../pages-lib/blog/blog.module.scss'
import matter from 'gray-matter'
import { useState } from 'react'

const Index = ({ articles, title, description, ...props }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filters, setFilters] = useState([])

	const articleTags = ['web', 'ios', 'productivity']

	const generateCards = (articles, searchTerm, filters) => {
		if (articles && articles.length > 0) {
			return articles
				.filter((article) => {
					const matchesTitle =
						article &&
						article.frontmatter &&
						article.frontmatter.title &&
						article.frontmatter.title
							.toLowerCase()
							.search(searchTerm) !== -1
					let matchesFilters = true
					if (filters.length > 0) {
						matchesFilters =
							article &&
							article.frontmatter.tags &&
							filters.reduce((previous, current) => {
								return (
									previous &&
									article.frontmatter.tags.includes(current)
								)
							}, true)
					}
					return matchesTitle && matchesFilters
				})
				.map((article, index) => {
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

	const searchTermChanged = (event) => {
		setSearchTerm(event.target.value)
	}

	const filterTapped = (type) => {
		if (filters.includes(type)) {
			setFilters(filters.filter((element) => element !== type))
		} else {
			setFilters((previusState) => [...previusState, type])
		}
	}

	const isTagActive = (tag) => {
		return filters.includes(tag)
	}

	const articlesList = generateCards(articles, searchTerm, filters)

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
							<input
								onChange={searchTermChanged}
								type="text"
								placeholder="Search by title"
							/>
						</div>
						<div className={classes.searchByTags}>
							<p>Filters:</p>
							{articleTags.map((tag) => {
								return (
									<button
										className={
											isTagActive(tag)
												? classes.active
												: null
										}
										key={tag}
										onClick={filterTapped.bind(null, tag)}
									>
										{tag}
									</button>
								)
							})}
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

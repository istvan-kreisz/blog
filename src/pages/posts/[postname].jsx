import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Backdrop from '../../components/Backdrop/Backdrop'
import classes from '../../pages-lib/posts/post.module.scss'

import Layout from '../../components/Layout/Layout'

export default function BlogPost({
	siteTitle,
	frontmatter,
	markdownBody,
	description,
}) {
	if (!frontmatter) return <></>

	return (
		<>
			<Backdrop {...{ image: frontmatter.image }} />
			<Layout
				{...{ isWhite: true }}
				pageTitle={`${siteTitle} | ${frontmatter.title}`}
				className={classes.layout}
				description={description}
			>
				<h1 className={classes.title}>{frontmatter.title}</h1>
				<article className={classes.article}>
					<ReactMarkdown source={markdownBody} />
				</article>
			</Layout>
		</>
	)
}

export async function getStaticProps({ params }) {
	const { postname } = params

	const content = await import(`../../posts/${postname}.md`)
	const config = await import(`../../siteconfig.json`)
	const data = matter(content.default)

	return {
		props: {
			siteTitle: config.title,
			frontmatter: data.data,
			markdownBody: data.content,
			description: config.default.description,
		},
	}
}

export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		const keys = context.keys()
		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

			return slug
		})
		return data
	})(require.context('../../posts', true, /\.md$/))

	const paths = blogSlugs.map((slug) => `/posts/${slug}`)

	return {
		paths,
		fallback: false,
	}
}

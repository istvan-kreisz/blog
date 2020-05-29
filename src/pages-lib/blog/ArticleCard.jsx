import classes from './ArticleCard.module.scss'
import Link from 'next/link'

const ArticleCard = (props) => {
	return (
		<li className={classes.articleCard} key={props.index}>
			<Link href="/posts/[postname]" as={`/posts/${props.slug}`}>
				<a>
					<img src="/images/sample.png" alt="" />
					<div className={classes.articleContent}>
						<ul className={classes.tags}>
							{props.tags.forEach((element) => {
								return <li>element</li>
							})}
						</ul>
						<h3>{props.title}</h3>
						<p>{props.description}</p>
						<p className={classes.date}>{props.date}</p>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default ArticleCard

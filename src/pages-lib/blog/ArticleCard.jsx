import classes from './ArticleCard.module.scss'
import Link from 'next/link'

const ArticleCard = (props) => {
	return (
		<li className={classes.articleCard} key={props.index}>
			<Link href="/posts/[postname]" as={`/posts/${props.slug}`}>
				<a aria-label={'post ' + props.slug}>
					<img src="/images/sample.png" alt="" />
					<div className={classes.articleContent}>
						<ul className={classes.tags}>
							{props.tags.map((element) => {
								return <li key={element}>{element}</li>
							})}
						</ul>
						<h2>{props.title}</h2>
						<p>{props.description}</p>
						<p className={classes.date}>{props.date}</p>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default ArticleCard

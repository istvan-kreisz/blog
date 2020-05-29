import classes from './ArticleCard.module.scss'
import Link from 'next/link'

const ArticleCard = (props) => {
	return (
		<li className={classes.projectCard} key={props.index}>
			<Link href={props.link}>
				<a>
					<img
						className={
							props.index % 2 == 0 ? null : classes.rightAligned
						}
						src="/images/sample.png"
						alt=""
					/>
					<div className={classes.projectContent}>
						<ul className={classes.techList}>
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

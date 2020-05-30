import classes from './ProjectCard.module.scss'

const ProjectCard = (props) => {
	return (
		<li className={classes.projectCard} key={props.index}>
			<a href={props.link}>
				<img
					className={
						props.index % 2 == 0 ? null : classes.rightAligned
					}
					src="/images/sample.png"
					alt=""
				/>
				<div className={classes.projectContent}>
					<ul className={classes.techList}>
						{props.tags.map((element) => {
							return <li>{element}</li>
						})}
					</ul>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
					<p className={classes.date}>{props.date}</p>
				</div>
			</a>
		</li>
	)
}

export default ProjectCard

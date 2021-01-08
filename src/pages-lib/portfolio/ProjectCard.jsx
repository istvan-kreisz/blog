import classes from './ProjectCard.module.scss'
import ReactMarkdown from 'react-markdown'

const ProjectCard = (props) => {
	return (
		<li className={classes.projectCard} key={props.index}>
			<div
				onClick={() => {
					window.location = props.link
				}}
				className={classes.container}
			>
				<div
					className={
						classes.imageWrapper +
						(props.index % 2 == 0 ? '' : ' ' + classes.rightAligned)
					}
				>
					<img
						style={{ backgroundColor: props.backgroundColor }}
						src={props.image && 'images/projects/' + props.image}
						alt=""
					/>
				</div>
				<div className={classes.projectContent}>
					<ul className={classes.techList}>
						{props.tags.map((element) => {
							return <li key={element}>{element}</li>
						})}
					</ul>
					<h3>{props.title}</h3>
					<ReactMarkdown source={props.description} />
					<div className={classes.spacer}></div>
					<p className={classes.date}>{props.date}</p>
				</div>
			</div>
		</li>
	)
}

export default ProjectCard

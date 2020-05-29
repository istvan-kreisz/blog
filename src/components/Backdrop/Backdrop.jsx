import classes from './Backdrop.module.scss'

export default function Backdrop(props) {
	console.log(props.image)
	return (
		<div className={classes.backdropContainer}>
			<div className={classes.backdrop}>
				{props && props.image ? (
					<img src={'/images/' + props.image} alt="" />
				) : null}
			</div>
		</div>
	)
}

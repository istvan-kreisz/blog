import classes from './BackdropCircular.module.scss'

export default function Backdrop() {
	return (
		<div className={classes.outerRing}>
			<div className={classes.innerRing}></div>
		</div>
	)
}

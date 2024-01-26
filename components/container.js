import classes from "../styles/container.module.css"

export default function myContainer({content}) {
    return (
        <div className={classes.containerBox}>{content}</div>
    )
}
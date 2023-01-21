import { classes } from '../../../helpers/class-binding'

interface ButtonTabProps {
    title: string
    active?: boolean
}

export default function ButtonTab({ title, active }: ButtonTabProps) {
    return (
        <a
            data-filter='*'
            href='#'
            className={classes(
                { 'btn-active': active },
                'btn btn-status rounded-pill text-sm me-3'
            )}
        >
            {title}
        </a>
    )
}

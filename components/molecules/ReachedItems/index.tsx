import HorizontalLine from '../../atoms/HorizontalLine'
import VerticalLine from '../../atoms/VerticalLine'
import ReachedItem from '../ReachedItem'

interface ReachedItemProps {
    order?: 'before'
    desc1: string
    desc2: string
}

export default function ReachedItems({
    order,
    desc1,
    desc2
}: ReachedItemProps) {
    return (
        <>
            {order === 'before' ? (
                <>
                    <VerticalLine />
                    <HorizontalLine />
                    <ReachedItem desc1={desc1} desc2={desc2} />
                </>
            ) : (
                <>
                    <ReachedItem desc1={desc1} desc2={desc2} />
                </>
            )}
        </>
    )
}

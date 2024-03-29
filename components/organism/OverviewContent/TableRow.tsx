interface TableRowProps {
    thumbnail: string
    title: string
    category: string
    item: number
    price: number
    status: 'Success' | 'Failed' | 'Pending'
}

export default function TableRow({
    thumbnail,
    title,
    category,
    item,
    price,
    status
}: TableRowProps) {
    return (
        <tr className='align-middle'>
            <th scope='row'>
                <img
                    className='float-start me-3 mb-lg-0 mb-3'
                    src={thumbnail}
                    width={80}
                    height={60}
                    alt=''
                />
                <div className='game-title-header'>
                    <p className='game-title fw-medium text-start color-palette-1 m-0'>
                        {title}
                    </p>
                    <p className='text-xs fw-normal text-start color-palette-2 m-0'>
                        {category}
                    </p>
                </div>
            </th>
            <td>
                <p className='fw-medium color-palette-1 m-0'>{item} Gold</p>
            </td>
            <td>
                <p className='fw-medium text-start color-palette-1 m-0'>
                    {price}
                </p>
            </td>
            <td>
                <div>
                    <span className={`float-start icon-status ${status.toLocaleLowerCase()}`}></span>
                    <p className='fw-medium text-start color-palette-1 m-0 position-relative'>
                        {status}
                    </p>
                </div>
            </td>
        </tr>
    )
}

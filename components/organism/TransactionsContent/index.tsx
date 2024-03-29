import ButtonTab from './ButtonTab'
import TableRow from './TableRow'

export default function TransactionsContent() {
    return (
        <main className='main-wrapper'>
            <div className='ps-lg-0'>
                <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
                    My Transactions
                </h2>
                <div className='mb-30'>
                    <p className='text-lg color-palette-2 mb-12'>
                        You’ve spent
                    </p>
                    <h3 className='text-5xl fw-medium color-palette-1'>
                        Rp 4.518.000.500
                    </h3>
                </div>
                <div className='row mt-30 mb-20'>
                    <div className='col-lg-12 col-12 main-content'>
                        <div id='list_status_title'>
                            <ButtonTab title='All Trx' active />
                            <ButtonTab title='Success' />
                            <ButtonTab title='Pending' />
                            <ButtonTab title='Failed' />
                        </div>
                    </div>
                </div>
                <div className='latest-transaction'>
                    <p className='text-lg fw-medium color-palette-1 mb-14'>
                        Latest Transactions
                    </p>
                    <div className='main-content main-content-table overflow-auto'>
                        <table className='table table-borderless'>
                            <thead>
                                <tr className='color-palette-1'>
                                    <th className='' scope='col'>
                                        Game
                                    </th>
                                    <th scope='col'>Item</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody id='list_status_item'>
                                <TableRow
                                    thumbnail='/img/overview-1.png'
                                    title='Mobile Legends: The New Battle 2021'
                                    category='Desktop'
                                    item={200}
                                    price={290000}
                                    status='Pending'
                                />
                                <TableRow
                                    thumbnail='/img/overview-2.png'
                                    title='Call of Duty:Modern'
                                    category='Desktop'
                                    item={200}
                                    price={290000}
                                    status='Success'
                                />
                                <TableRow
                                    thumbnail='/img/overview-3.png'
                                    title='Clash of Clans'
                                    category='Mobile'
                                    item={200}
                                    price={290000}
                                    status='Failed'
                                />
                                <TableRow
                                    thumbnail='/img/overview-4.png'
                                    title='The Royal Game'
                                    category='Mobile'
                                    item={200}
                                    price={290000}
                                    status='Pending'
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

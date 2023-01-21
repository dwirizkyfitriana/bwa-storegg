import Link from 'next/link'
import { classes } from '../../../helpers/class-binding'

interface MenuItemProps {
    title: string
    icon:
        | 'ic-menu-overview'
        | 'ic-menu-transactions'
        | 'ic-menu-messages'
        | 'ic-menu-card'
        | 'ic-menu-rewards'
        | 'ic-menu-settings'
        | 'ic-menu-logout'
    active?: boolean
    href: string
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active, href } = props
    return (
        <div className={classes({ active }, 'item mb-30')}>
            <img
                className='icon me-3'
                src={`/icon/${icon}.svg`}
                width={25}
                height={25}
            />
            <p className='item-title m-0'>
                <Link href={href}>
                    <a className='text-lg text-decoration-none'>
                        {title}
                    </a>
                </Link>
            </p>
        </div>
    )
}

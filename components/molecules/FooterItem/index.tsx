import Link from 'next/link'

interface FooterItemProps {
    title: string
    href: string
}

export default function FooterItem({ title, href = '/' }: FooterItemProps) {
    return (
        <li className='mb-6'>
            <Link href={href}>
                <a className='text-lg color-palette-1 text-decoration-none'>
                    {title}
                </a>
            </Link>
        </li>
    )
}

import FooterItem from '../FooterItem'

interface sectionItem {
    title: string
    href: string
}

interface FooterSectionProps {
    title: string
    sectionList: sectionItem[]
}

export default function FooterSection({
    title,
    sectionList
}: FooterSectionProps) {
    return (
        <div className='col-md-4 col-6 mb-lg-0 mb-25'>
            <p className='text-lg fw-semibold color-palette-1 mb-12'>{title}</p>
            <ul className='list-unstyled'>
                {sectionList.map((item, index) => (
                    <FooterItem
                        key={index}
                        href={item.href}
                        title={item.title}
                    />
                ))}
            </ul>
        </div>
    )
}

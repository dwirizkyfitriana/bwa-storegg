import Image from 'next/image'
import FooterSection from '../../molecules/FooterSection'

export default function Footer() {
    const companySection = [
        { title: 'About Us', href: '/' },
        { title: 'Press Release', href: '/' },
        { title: 'Terms of Use', href: '/' },
        { title: 'Privacy & Policy', href: '/' }
    ]

    const supportSection = [
        { title: 'Refund Policy', href: '/' },
        { title: 'Unlock Rewards', href: '/' },
        { title: 'Live Chatting', href: '/' }
    ]

    const connectSection = [
        { title: 'team@store.gg', href: 'mailto: hi@store.gg' },
        {
            title: 'Pasific 12, Jakarta Selatan',
            href: 'http://maps.google.com/?q=Pasific 12, Jakarta Selatan'
        },
        { title: '021 - 1122 - 9090', href: 'tel: 02111229090' }
    ]
    return (
        <section className='footer pt-50'>
            <footer>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 text-lg-start text-center'>
                            <a href='' className='mb-30'>
                                <Image
                                    src='/icon/logo.svg'
                                    width={60}
                                    height={60}
                                />
                            </a>
                            <p className='mt-30 text-lg color-palette-1 mb-30'>
                                StoreGG membantu gamers
                                <br /> untuk menjadi pemenang sejati
                            </p>
                            <p className='mt-30 text-lg color-palette-1 mb-30'>
                                Copyright 2021. All Rights Reserved.
                            </p>
                        </div>
                        <div className='col-lg-8 mt-lg-0 mt-20'>
                            <div className='row gap-sm-0'>
                                <FooterSection
                                    title='Company'
                                    sectionList={companySection}
                                />
                                <FooterSection
                                    title='Support'
                                    sectionList={supportSection}
                                />
                                <FooterSection
                                    title='Connect'
                                    sectionList={connectSection}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

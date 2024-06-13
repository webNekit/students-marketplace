'use client';
import { VKShareButton, TelegramShareButton, OKShareButton, EmailShareButton } from 'react-share';
import { FaVk, FaTelegramPlane, FaGoogle, FaOdnoklassniki } from "react-icons/fa";
import { usePathname } from 'next/navigation';

interface iShareParams {
    title?: string;
    image?: string;
    smallText?: string;
}

export function Share({ title, image, smallText }: iShareParams) {
    const pathName = usePathname();
    const domains = 'https://student-save.vercel.app';
    const currentUrl = `${domains}/${pathName}`
    return (
        <>
            <div className="flex items-center gap-4">
                <span className='text-white text-base'>Поделиться</span>
                <ul className="flex items-center gap-4 p-4 rounded-full border">
                    <li className="inline-flex">
                        <VKShareButton url={`${currentUrl}`} title={title} image={image} className='group'>
                            <FaVk size={20} className='transition-colors group-hover:text-primary' />
                        </VKShareButton>
                    </li>
                    <li className="inline-flex">
                        <TelegramShareButton url={`${currentUrl}`} title={title} className='group'>
                            <FaTelegramPlane size={20} className='transition-colors group-hover:text-primary' />
                        </TelegramShareButton>
                    </li>
                    <li className="inline-flex">
                        <OKShareButton url={`${currentUrl}`} title={title} description={smallText} image={image} className='group'>
                            <FaOdnoklassniki size={20} className='transition-colors group-hover:text-primary' />
                        </OKShareButton>
                    </li>
                    <li className="inline-flex">
                        <EmailShareButton url={`${currentUrl}`} title={title} body={smallText} className='group'>
                            <FaGoogle size={20} className='transition-colors group-hover:text-primary' />
                        </EmailShareButton>
                    </li>
                </ul>
            </div>
        </>
    );
}
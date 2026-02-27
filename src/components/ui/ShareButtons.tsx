'use client'

import {
    TelegramShareButton,
    TelegramIcon,
} from 'next-share'



export default function ShareButtons({ url, title }: { url: string, title: string }) {
    return (
        <div className="flex items-center gap-2">
            <TelegramShareButton url={url} title={title}>
                <TelegramIcon size={32} round />
            </TelegramShareButton>
        </div>
    )
}
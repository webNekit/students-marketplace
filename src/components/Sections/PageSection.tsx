import Image from "next/image";

interface iSectionProps {
    title?: string | 'Заголовок секции';
    text?: string | 'Описание страницы';
}

export function PageSection({ title, text } : iSectionProps){
    return(
       <section className="relative w-full py-12">
            <div className="relative w-full z-10">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto space-y-5">
                        <h1 className="text-white text-center text-3xl md:text-5xl font-semibold">{title}</h1>
                        <p className="text-gray-200 text-center text-xl md:text-2xl">{text}</p>
                    </div>
                </div>
            </div>
            <Image fill src={'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eed4f1110163487.603d2796bcb50.jpg'} alt="Изображение для баннера секции" className="w-full h-full opacity-10 object-cover object-center" />
       </section>
    )
}
import Image from "next/image";

interface iSectionProps {
    title?: string | 'Заголовок секции';
    text?: string | 'Описание страницы';
    img?: string;
}

export function PageSection({ title, text, img } : iSectionProps){
    return(
       <section className="relative w-full py-12">
            <div className="relative w-full z-10">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto space-y-5">
                        <h1 className="text-white text-center text-3xl md:text-5xl font-semibold">{title}</h1>
                        <p className="text-gray-500 text-center text-base md:text-xl">{text}</p>
                    </div>
                </div>
            </div>
            <Image fill src={`${img}`} alt="Изображение для баннера секции" className="w-full h-full opacity-10 object-cover object-center" />
       </section>
    )
}
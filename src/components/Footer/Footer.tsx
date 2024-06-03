import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-10 border-t" id="footer">
            <div className="container mx-auto">
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="w-full md:w-3/12 space-y-5">
                        <Link href={'/'} className="text-2xl text-gray-50 font-semibold">
                            Student<span className="text-indigo-500">Save</span>
                        </Link>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil aliquid iure! Exercitationem, ad nesciunt aperiam sequi nemo placeat debitis at, omnis sunt vitae voluptatem modi, rem quis expedita non culpa iure fugit repellendus. Rerum minima autem laboriosam odio optio quidem! Voluptas doloremque dignissimos placeat.</p>
                    </div>
                    <div className="w-full md:w-9/12 grid grid-cols-3 gap-5">
                        <div className="w-full space-y-5">
                            <h3 className="text-gray-50 text-lg font-medium">Основные разделы</h3>
                            <ul className="w-full space-y-3">
                                <li className="w-full">
                                    <Link href={'/design'}>Макеты</Link>
                                </li>
                                <li className="w-full">
                                    <Link href={'/template'}>Шаблоны</Link>
                                </li>
                                <li className="w-full">
                                    <Link href={'/libs'}>Библиотеки</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
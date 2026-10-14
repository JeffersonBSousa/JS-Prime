import Image from "next/image"
import Link from "next/link";
 
export default function Navbar() {
    return (
        <div className="w-full bg-blue-950 text-white">
            <div className="max-w-screen-2xl mx-auto flex justify-evenly uppercase font-bold items-center py-2 text-xs sm:text-base">
                <Link href="/">
                    <Image
                        priority
                        src="/img/JSPrime.svg"
                        alt="JS Prime"
                        width={240}
                        height={200}
                        className="cursor-pointer w-24 sm:w-60"
                    />
                </Link>
                <Link href="/" className="hover:text-yellow-200 transition-colors">
                    Início
                </Link>
                <Link href="/servicos" className="hover:text-yellow-200 transition-colors">
                    Serviços
                </Link>
                <Link href="/contato" className="hover:text-yellow-200 transition-colors">
                    Contato
                </Link>
                <Link href="/sobre" className="hover:text-yellow-200 transition-colors">
                    Sobre
                </Link>
            </div>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-blue-950 text-white text-base">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-28 pt-14 sm:px-20">
                    <div className="lg:w-1/3">
                        <Link
                            href="https://www.google.com/maps/place/Av.+Maria+Rosa,+1470+-+Mana%C3%ADra,+Jo%C3%A3o+Pessoa+-+PB,+58038-461,+Brasil/@-7.10249,-34.839648,72205m/data=!3m1!1e3!4m6!3m5!1s0x7acdd1359e014f3%3A0x850840a91d6b46a8!8m2!3d-7.1024757!4d-34.8396293!16s%2Fg%2F11c48fymnd?hl=pt-BR&entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="cursor-pointer">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d314426.68191383954!2d-34.839648!3d-7.10249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd1359e014f3%3A0x850840a91d6b46a8!2sAv.%20Maria%20Rosa%2C%201470%20-%20Mana%C3%ADra%2C%20Jo%C3%A3o+Pessoa+-+PB%2C%2058038-461%2C%20Brasil!5e1!3m2!1spt-BR!2sus!4v1739674662893!5m2!1spt-BR!2sus"
                                    width="300"
                                    height="200"
                                    loading="lazy"
                                    className="w-full h-full pointer-events-none"
                                ></iframe>
                            </div>
                        </Link>
                    </div>
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        <div>
                            <h3 className="font-semibold">HORÁRIO DE FUNCIONAMENTO</h3>
                            <p>Segunda a Sexta-feira: 08h00 às 17h30</p>
                            <p>Sábado: 08h00 às 12h00</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">NOSSO ENDEREÇO</h3>
                            <p>Avenida Maria Rosa, nº 1470, sala 10 - Manaira, João Pessoa, PB, Brasil</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        <h3 className="font-bold">ENTRE EM CONTATO</h3>
                        <Link
                            href="#contato"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <Image
                                src="/svg/Telephone.svg"
                                width={24}
                                height={20}
                                loading="lazy"
                                alt="Telefone para contato"
                            />
                            <span className="font-semibold">(83) 3142-7333</span>
                        </Link>
                        <Link
                            href="https://wa.me/55[DDD][NUMERO]?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <Image
                                src="/svg/WhatsApp.png"
                                width={24}
                                height={10}
                                loading="lazy"
                                alt="Whatsapp"
                            />
                            <span className="font-semibold">(83) 98800-5001</span>
                        </Link>
                        <Link
                            href="mailto:[E-MAIL]"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <Image
                                src="/svg/email.svg"
                                width={24}
                                height={10}
                                loading="lazy"
                                alt="Email"
                            />
                            <span className="font-semibold">[E-MAIL]</span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/[USUARIO]"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <Image
                                src="/svg/instagram.png"
                                width={24}
                                height={20}
                                loading="lazy"
                                alt="Instagram"
                            />
                            <span className="font-semibold">Instagram JS Prime</span>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center py-14">
                    <p>
                        © 2026 JS Prime Manutenção e Instalação. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Reviews from "../components/reviews";

export default function Contato() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20">
        <div className="lg:w-1/3 px-4 text-xl lg:text-3xl items-center flex">
          <p className="text-center px-6 sm:px-20 lg:px-0">
            A <span className="font-bold">JS Prime Manutenção e Instalação</span> é uma empresa especializada
            técnica especializada em serviços, revisões e manutenções de fogões,
            através do seu trabalho promove qualidade, segurança e confiança.
            Com olhar humanizado e moderno atende desde residências até grande
            empresas.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            loading="lazy"
            src="/img/SEBASTIAO.avif"
            alt="Sc fogoes"
            width={520}
            height={520}
            className="lg:w-96 lg:h-96 xl:w-[520px] xl:h-[520px]"
          />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20">
        <div className="flex justify-center items-center">
          <Image
            loading="lazy"
            src="/img/SEBASTIAO.avif"
            alt="Sc fogoes"
            width={520}
            height={520}
            className="lg:w-96 lg:h-96 xl:w-[520px] xl:h-[520px]"
          />
        </div>
        <div className="lg:w-1/3 px-4 text-center flex flex-col">
          <div className="my-auto">
            <p className="font-bold px-6 sm:px-20 lg:px-0 text-xl lg:text-3xl pb-4">
              Um Legado Deixado
            </p>
            <p className="font-semibold px-6 sm:px-20 lg:px-0 pb-4">
              Sebastião Mariano – Bastos dos Fogões
            </p>
            <p className="px-6 sm:px-20 lg:px-0">
              O legado de Sebastião Mariano, nosso querido mentor &quot;Bastos
              dos Fogões&quot;, atravessa gerações. Seu conhecimento, dedicação
              e boas práticas continuam vivos em cada um de nós.
            </p>
            <p className="px-6 sm:px-20 lg:px-0 pb-4">
              Com uma trajetória profissional exemplar, ele plantou sementes que
              frutificam até hoje, inspirando-nos a seguir honrando sua
              história. Viveu sua vida com amor e entrega à profissão,
              exercendo-a com maestria até seus últimos dias.
            </p>
            <p className="font-semibold px-6 sm:px-20 lg:px-0">
              Obrigado, Sebastião Mariano, por tudo! Seu legado jamais será
              esquecido.
            </p>
          </div>
        </div>
      </div>
      {/*
         <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20">
            <div className="lg:w-1/3 px-4 text-center flex flex-col">
               <div className="my-auto">
                  <p className="font-bold px-6 sm:px-20 lg:px-0 text-xl lg:text-3xl pb-4">Cerlison Silva</p>
                  <p className="font-semibold px-6 sm:px-20 lg:px-0 pb-4">Técnico Especialista em Fogões</p>
                  <p className="px-6 sm:px-20 lg:px-0 pb-4">Profissional experiente e qualificado, especializado na manutenção e reparo de fogões de todas as marcas e modelos. Atualmente, atua na empresa com dedicação, dando continuidade ao legado de seu pai, Bastos dos Fogões.</p>
                  <p className="px-6 sm:px-20 lg:px-0">Seguindo os ensinamentos e valores transmitidos por seu pai, Cerlison mantém o compromisso com a qualidade e excelência, garantindo um serviço confiável e de alto nível.</p>

               </div>
            </div>
            <div className="flex justify-center items-center">
               <Image
                  loading="lazy"
                  src="/img/CERLISON.png"
                  alt="Sc fogoes"
                  width={520}
                  height={520}
                  className="lg:w-96 lg:h-96 xl:w-[520px] xl:h-[520px]"
               />
            </div>
         </div>
*/}
      <Reviews />
      <Footer />
    </div>
  );
}

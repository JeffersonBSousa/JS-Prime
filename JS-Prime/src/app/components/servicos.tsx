import Image from "next/image";

export default function Servicos() {
  return (
    <div>
      <div className="bg-white">
      <div className=" max-w-screen-2xl min-h-[700px] mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
        <div className="flex justify-center items-center">
          <Image
            loading="lazy"
            src="/img/instalaçao.jpeg"
            alt="Sc fogoes"
            width={520}
            height={520}
            className="lg:w-96 xl:w-[520px]"
          />
        </div>
        <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold  text-2xl">Instalação</p>
          <p className="text-justify lg:text-start">
            Realizamos a instalação do seu fogão seguindo rigorosamente todas as
            normas de segurança, garantindo um serviço de alta qualidade e o uso
            seguro no dia a dia. Verificamos todos os acessórios para assegurar
            uma instalação precisa. Após a conclusão, realizamos testes
            completos para garantir o perfeito funcionamento.
          </p>
        </div>
      </div>
      </div>
      <div className="w-full bg-blue-950 text-white">
        <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
          <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold text-2xl">Conserto</p>
            <p className="text-justify lg:text-start">
              Realizamos a conserto do seu fogão com total segurança e
              qualidade. Realizamos uma inspeção completa para identificar
              possíveis ajustes ou reparos necessários. Após a manutenção,
              testamos todos os componentes para garantir o funcionamento seguro
              e eficiente.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              loading="lazy"
              src="/img/manutenção.webp"
              alt="Sc fogoes"
              width={520}
              height={520}
              className="lg:w-96 xl:w-[520px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-white max-w-screen-2xl min-h-[700px] mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
        <div className="flex justify-center items-center">
          <Image
            loading="lazy"
            src="/img/industrial.webp"
            alt="Sc fogoes"
            width={520}
            height={520}
            className="lg:w-96 xl:w-[520px]"
          />
        </div>
        <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
          <p className="font-bold  text-2xl">Manutenção industrial</p>
          <p className="text-justify lg:text-start">
            Realizamos a manutenção de fogões, fornos, chapas, fritadeiras,
            caldeiras e equipamentos similares para cozinhas industriais.
          </p>
        </div>
      </div>
      <div className="w-full bg-blue-950 text-white">
        <div className="max-w-screen-2xl min-h-[700px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
          <div className="lg:w-1/3 px-4 flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold  text-2xl">Conversão</p>
            <p className="text-justify lg:text-start">
              Realizamos a conversão de fogões para gás natural e gás GLP. Antes
              do serviço, realizamos uma avaliação detalhada para garantir a
              compatibilidade e o correto ajuste dos componentes. Após a
              conversão, testamos o equipamento para assegurar um funcionamento
              eficiente e seguro.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              loading="lazy"
              src="/img/conversao.webp"
              alt="Sc fogoes"
              width={520}
              height={400}
              className="lg:w-96 xl:w-[520px] "
            />
          </div>
        </div>
      </div>
      <div className="bg-white max-w-screen-2xl min-h-[700px] mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-40 py-10 lg:py-20 items-center">
        <div className="flex justify-center items-center">
          <Image
            loading="lazy"
            src="/img/medidor.jpg"
            alt="Sc fogoes"
            width={420}
            height={420}
            className="lg:w-96 xl:w-[420px]"
          />
        </div>
        <div className="lg:w-1/3 px-4 flex flex-col items-center lg:items-start gap-4">
          <p className="font-bold  text-2xl">Instalação de medidor</p>
          <p className="text-justify lg:text-start">
            Realizamos a instalação de medidores de gás. Verificamos a
            compatibilidade do sistema e a necessidade de ajustes. Após a
            conclusão, realizamos testes rigorosos para garantir o funcionamento
            preciso e seguro.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Flame,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Wind,
  Wrench,
  X,
} from "lucide-react";

const whatsappLink = `https://wa.me/55[DDD][NUMERO]?text=${encodeURIComponent("Olá! Gostaria de pedir um orçamento.")}`;
const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const services = [
  { icon: Flame, title: "Instalação e manutenção de fogões", description: "Revisão e instalação para seu fogão funcionar com segurança e eficiência." },
  { icon: Wrench, title: "Tubulações de gás", description: "Instalação e adequação de tubulações com atenção às normas e conexões." },
  { icon: Wind, title: "Instalação de coifas", description: "Instalação de coifas para melhorar a ventilação e o conforto da cozinha." },
];

const differences = [
  { icon: Clock3, title: "Atendimento rápido", description: "Agilidade do primeiro contato à execução do serviço." },
  { icon: BadgeCheck, title: "Profissionais qualificados", description: "Equipe preparada para orientar e executar cada instalação." },
  { icon: ShieldCheck, title: "Segurança em primeiro lugar", description: "Cuidado em cada etapa de um serviço que exige responsabilidade." },
  { icon: MessageCircle, title: "Orçamento sem compromisso", description: "Você conhece a proposta antes de decidir." },
];

const steps = [
  { title: "Você entra em contato", description: "Conte o que precisa pelo WhatsApp e, se puder, envie fotos do local ou equipamento." },
  { title: "Fazemos o orçamento", description: "Entendemos o serviço e apresentamos uma proposta clara, sem compromisso." },
  { title: "Executamos o serviço com garantia", description: "Com tudo aprovado, realizamos o serviço com cuidado e garantia." },
];

const gallery = [
  { src: "/img/instala%C3%A7ao.jpeg", alt: "Instalação de equipamento para cozinha" },
  { src: "/img/manuten%C3%A7%C3%A3o.webp", alt: "Serviço de manutenção em fogão" },
  { src: "/img/conversao.webp", alt: "Conversão de fogão para gás" },
  { src: "/img/industrial.webp", alt: "Equipamento de cozinha industrial" },
  { src: "/img/medidor.jpg", alt: "Instalação de medidor de gás" },
  { src: "/img/manuten%C3%A7%C3%A3o.png", alt: "Técnico realizando manutenção de equipamento" },
];

const testimonials = [
  "Atendimento atencioso, serviço bem explicado e cuidado com a segurança em cada etapa.",
  "Agilidade para marcar, orçamento claro e instalação feita com muito capricho.",
  "Profissionais cuidadosos e pontuais. O equipamento ficou funcionando perfeitamente.",
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#inicio" aria-label="JS Prime, início">
      <span className="brand-mark" aria-hidden="true">JS</span>
      <span className="brand-name">JS <span>Prime</span></span>
    </a>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <a className="button button--orange header-quote" href={whatsappLink} target="_blank" rel="noreferrer">
            Peça seu orçamento <ArrowRight size={17} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegação móvel">
            {navigation.map((item) => <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>)}
            <a className="button button--orange" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Peça seu orçamento <ArrowRight size={17} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-layout">
            <div className="hero-copy" data-reveal>
              <span className="eyebrow">Cuidado e segurança em cada detalhe</span>
              <h1>Instalação e manutenção de gás e fogões com <span>segurança e qualidade</span></h1>
              <p>Atendimento rápido e profissional para fogões, tubulações de gás e coifas.</p>
              <div className="hero-actions">
                <a className="button button--orange" href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} aria-hidden="true" /> Chamar no WhatsApp
                </a>
                <a className="button button--outline" href="#servicos">Ver serviços</a>
              </div>
            </div>
            <div className="hero-image-wrap" data-reveal>
              <Image className="hero-image" src="/img/SEBASTIAO.avif" alt="Profissional da equipe em atendimento" width={850} height={680} priority />
              <div className="hero-caption"><strong>JS Prime</strong>Manutenção e instalação com responsabilidade.</div>
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">O que fazemos</span>
              <h2>Serviços para sua cozinha funcionar bem</h2>
              <p>Soluções de instalação e manutenção com atenção à segurança do começo ao fim.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, description }) => (
                <article className="service-card" key={title} data-reveal>
                  <span className="icon-box"><Icon size={23} aria-hidden="true" /></span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="sobre">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Por que escolher a JS Prime</span>
              <h2>Confiança construída em cada atendimento</h2>
              <p>Trabalho cuidadoso, comunicação clara e segurança como parte de cada serviço.</p>
            </div>
            <div className="features-grid">
              {differences.map(({ icon: Icon, title, description }) => (
                <article className="feature" key={title} data-reveal>
                  <span className="icon-box"><Icon size={21} aria-hidden="true" /></span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="etapas">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Como funciona</span>
              <h2>Do primeiro contato ao serviço concluído</h2>
              <p>Um processo simples, com você informado em todas as etapas.</p>
            </div>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step" key={step.title} data-reveal>
                  <span className="step-number">{index + 1}</span>
                  <h3>{step.title}</h3><p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="trabalhos">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Galeria</span>
              <h2>Trabalhos realizados</h2>
              <p>Alguns registros de serviços de instalação e manutenção.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((image) => (
                <figure className="gallery-item" key={image.src} data-reveal>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 680px) 50vw, 33vw" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="depoimentos">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="eyebrow">Experiências de clientes</span>
              <h2>Atendimento que faz a diferença</h2>
              <p>Depoimentos de exemplo, prontos para receber avaliações autorizadas dos clientes.</p>
            </div>
            <div className="reviews-grid">
              {testimonials.map((testimonial, index) => (
                <article className="review-card" key={testimonial} data-reveal>
                  <div className="review-stars" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, star) => <Star key={star} size={15} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <blockquote>“{testimonial}”</blockquote>
                  <div className="review-author"><span className="review-avatar">JS</span>Cliente de exemplo {index + 1}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <span className="eyebrow">Fale com a gente</span>
              <h2>Vamos cuidar do seu próximo serviço?</h2>
              <p>Entre em contato para explicar o que precisa e receber um orçamento sem compromisso.</p>
              <a className="button button--orange" href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> Pedir orçamento no WhatsApp
              </a>
            </div>
            <div className="contact-details" data-reveal>
              <div className="contact-detail"><Phone size={19} aria-hidden="true" /> Telefone <span>[TELEFONE]</span></div>
              <div className="contact-detail"><Mail size={19} aria-hidden="true" /> E-mail <span>[E-MAIL]</span></div>
              <div className="contact-detail"><MapPin size={19} aria-hidden="true" /> Região <span>[CIDADE/REGIÃO]</span></div>
              <div className="contact-detail"><Clock3 size={19} aria-hidden="true" /> Horário <span>[HORÁRIO]</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-about">
              <Brand footer />
              <p>Manutenção e instalação de fogões, tubulações de gás e coifas com cuidado e responsabilidade.</p>
            </div>
            <div>
              <h2 className="footer-title">Links rápidos</h2>
              <nav className="footer-links" aria-label="Links do rodapé">
                {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
                <a href="#etapas">Como funciona</a>
                <a href="#trabalhos">Galeria</a>
              </nav>
            </div>
            <div>
              <h2 className="footer-title">Contato</h2>
              <p className="footer-contact-line"><Phone size={16} aria-hidden="true" /> [TELEFONE]</p>
              <p className="footer-contact-line"><Mail size={16} aria-hidden="true" /> [E-MAIL]</p>
              <a className="footer-contact-line" href="https://www.instagram.com/[USUARIO]" target="_blank" rel="noreferrer" aria-label="Instagram da JS Prime, substituir usuário">
                <Instagram size={16} aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 JS Prime Manutenção e Instalação. Todos os direitos reservados.</span></div>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp">
        <MessageCircle size={25} aria-hidden="true" />
      </a>
    </>
  );
}
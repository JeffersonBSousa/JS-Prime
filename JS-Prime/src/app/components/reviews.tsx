import { Star } from "lucide-react";

type Review = {
  name: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Ana Carolina dos Santos Machado",
    rating: 5,
    text: "Serviço rápido e de qualidade. Instalador muito educado, deixou tudo funcionando perfeitamente, recomendo a empresa!",
  },
  {
    name: "Rogério Coutinho",
    rating: 5,
    text: "A instalação do forno foi feita de modo profissional e ainda recebi dicas que como usar de forma adequada. Recomendo.",
  },
  {
    name: "José da Penha Soares de Melo",
    rating: 5,
    text: "Gostaria de parabenizar a equipe pelo trabalho executado no fogão em minha residência. O serviço foi bem feito e ficamos satisfeitos.",
  },
  {
    name: "Mario Atur Abreu",
    rating: 5,
    text: "Atendimento rápido e profissional. Técnico gentil, e percebi claramente que é entendido o que faz. Parabéns!",
  },
  {
    name: "Gisele Li",
    rating: 5,
    text: "Profissionais excelentes e super capacitados. Só executam o serviço após sua autorização e nada além do necessário é consertado. Não inventam defeitos. Muito honestos com preço justo",
  },
  {
    name: "Vanusa Alves",
    rating: 5,
    text: "Serviço excelente, rapidez no atendimento e funcionários educados e gentis.",
  },
  {
    name: "Veruska coelho",
    rating: 5,
    text: "Atendimento excelente,técnico experiente e de grande profissionalismo. Muito satisfeita . Agora , voltar pro fogão!",
  },
  {
    name: "Severino Silva",
    rating: 5,
    text: "O atendimento via WhatsApp foi super rápido, a menina que atendeu, foi muito gentil. Os materiais utilizados como mangueiras e válvulas todos dentro da norma da NBR o técnico que me atendeu, muito experiente e me explicou tudo que foi feito. Empresa de qualidade. Estou indicando para toda a minha família",
  },
  {
    name: "Rogerio Moraes",
    rating: 5,
    text: "Atendimento rápido e preço justo. Instalador bem preparado e educado. Preocupado em deixar tudo ok. Indico a empresa.",
  },
  {
    name: "Paula Almeida",
    rating: 5,
    text: "Atendimento de qualidade. O técnico foi muito honesto e competente. Estão de parabéns. Honestidade é uma raridade nos dias de hoje.",
  },
  {
    name: "Marines Passos Barboza",
    rating: 5,
    text: "Técnico muito profissional, fez um excelente trabalho, rápido, pode contratar o serviço nota 10.",
  },
  {
    name: "Marcelo Teixeira",
    rating: 5,
    text: "Localizei essa empresa pesquisando na internet e fiquei satisfeito com a agilidade do atendimento. Estão de parabéns.",
  },
  {
    name: "Fábio Cordeiro",
    rating: 5,
    text: "Quero parabenizar o técnico que veio fazer o serviço. O rapaz é muito educado, cordial e resolutivo. Tô muito satisfeito com o serviço",
  },
  {
    name: "Jose Aparecido",
    rating: 5,
    text: "Excelente atendimento! Serviço de primeira qualidade!",
  },
  {
    name: "Thiago Araujo",
    rating: 5,
    text: "Pessoal muito atencioso e prestativo. O servico ficou excelente!",
  },
  {
    name: "Joseane Anselmo",
    rating: 5,
    text: "Ótima! Um profissional de primeira linha . E os valores compatível ao seu trabalho. Essa Empresa super indico. Deus os abençoe 🙏",
  },
];

const ReviewCard = ({ name, rating, text }: Review) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-300"}
            size={20}
            fill={index < rating ? "#facc15" : "#e5e7eb"}
          />
        ))}
      </div>
      <p className="text-gray-700 font-medium">{name}</p>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
    </div>
  );
};

export default function Reviews() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">O que nossos clientes dizem sobre nós</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

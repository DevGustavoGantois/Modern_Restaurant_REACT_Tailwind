import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Pratos", targetId: "dishes" },
  { text: "Sobre", targetId: "about" },
  { text: "Missão", targetId: "mission" },
  { text: "Especialidades", targetId: "expertise" },
  { text: "Análise", targetId: "review" },
  { text: "Contato", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Massa cremosa com bacon e queijo",
  },
  {
    image: dish2,
    title: "Frango Tikka Masala",
    description: "Curry indiano com frango tenro em molho picante",
  },
  {
    image: dish3,
    title: "Salada Caprese",
    description: "Tomates frescos, mussarela e manjericão com cobertura balsâmica",
  },
  {
    image: dish4,
    title: "Rolinho de Sushi",
    description: "Diversos frutos do mar e vegetais envoltos em algas e arroz",
  },
  {
    image: dish5,
    title: "Bolo Lava De Chocolate",
    description: "Bolo de chocolate decadente com centro pegajoso",
  },
  {
    image: dish6,
    title: "Salada grega",
    description: "Alface crocante, azeitonas, queijo feta e molho picante",
  },
  {
    image: dish7,
    title: "Pad Tailandês",
    description: "Macarrão de arroz frito com camarão, tofu e amendoim",
  },
  {
    image: dish8,
    title: "Pato de Pequim",
    description: "Pato crocante com panquecas, pepino e molho hoisin",
  },
  {
    image: dish9,
    title: "Bife Wellington",
    description: "Filé de carne tenro enrolado em massa com cogumelos e ervas",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Sobremesa italiana com camadas de biscoitos embebidos em café e mascarpone",
  },
];

export const ABOUT = {
  header: "Adoramos cozinhar!",
  content:"Na Restaura acreditamos que a boa comida vai além do sabor; conta uma história de dedicação e criatividade. Das criações exclusivas do nosso chef ao nosso serviço atencioso, cada detalhe é selecionado para garantir que sua visita seja excepcional. Esteja você saboreando nosso renomado Tikka Kebab ou explorando nosso cardápio diversificado inspirado em sabores globais, cada prato é uma celebração de sabor e inovação. Junte-se a nós em uma viagem culinária onde cada mordida deixa uma impressão duradoura. Experimente a Restaura – onde cada refeição é uma obra-prima.",
};

export const MISSION =
  "No nosso restaurante, a nossa missão é criar experiências gastronómicas deliciosas e memoráveis.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italiana",
    description:
      "Experimente os sabores da Itália com a nossa requintada cozinha italiana, com receitas tradicionais e pratos contemporâneos.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japonesa",
    description:
      "Delicie-se com a arte da excelência culinária japonesa, oferecendo uma fusão de sabores clássicos e modernos.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indiana",
    description:
      "Delicie-se com os sabores ricos e diversificados da Índia, com um menu que celebra a herança culinária do país.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Crítico gastronómico",
  content:
    "“Como crítico gastronômico experiente, minhas expectativas são sempre altas quando entro em um novo restaurante. A Restaura, com o seu exterior despretensioso e interior elegantemente desenhado, prometia uma experiência culinária única desde o momento em que entrei. E devo dizer que superou as minhas expectativas.”",
};

export const CONTACT = [
  { key: "Endereço", value: "Endereço: 123 Rua Principal, Salvador, Brasil, 345678" },
  { key: "Telefone", value: "Telefone: (71) 99958-8246" },
  { key: "Email", value: "Email: gugagantoisdev@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/devgustavogantois_/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];

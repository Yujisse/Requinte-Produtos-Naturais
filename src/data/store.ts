import {
  Leaf,
  CookingPot,
  Scale,
  Sprout,
  Sandwich,
  Pill,
  Flower2,
  Droplet,
  Apple,
  Star,
  MapPin,
  Truck,
  HeartHandshake,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export const store = {
  name: "Requinte Produtos Naturais",
  tagline: "Produtos naturais em Curitiba",
  category: "Loja de produtos naturais",
  unit: "Unidade Uberaba",
  address: {
    street: "Rua Eunice Bettini Bartoszeck, 1870",
    district: "Uberaba",
    city: "Curitiba",
    state: "PR",
    cep: "81590-180",
  },
  coordinates: {
    lat: -25.4809415,
    lng: -49.2015316,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-25.4809415%2C-49.2015316",
  phone: {
    display: "(41) 99283-8869",
    intl: "+55 41 99283-8869",
    link: "tel:+5541992838869",
  },
  whatsapp: {
    number: "5541992838869",
    display: "(41) 99283-8869",
    mainUrl:
      "https://wa.me/5541992838869?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Requinte%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.",
  },
  instagram: {
    handle: "@requinteguab",
    url: "https://www.instagram.com/requinteguab/",
  },
  areaServed: "Curitiba e região",
  deliveryNote:
    "Pedidos e disponibilidade devem ser consultados pelo WhatsApp.",
  reviews: {
    rating: "4,9",
    count: 63,
    excerpts: [
      "Muita variedade de produtos e ótimo atendimento.",
      "Ambiente limpo, agradável e equipe que conhece os produtos.",
      "Produtos de qualidade e preços justos.",
    ],
  },
  hours: [
    { day: "Segunda a sexta", time: "9h às 19h" },
    { day: "Sábado", time: "9h às 16h" },
    { day: "Domingo", time: "Fechado" },
  ],
  hoursNote: "Horários podem variar em feriados. Confirme pelo WhatsApp.",
  seo: {
    title: "Requinte Produtos Naturais | Produtos Naturais em Curitiba",
    description:
      "Chás, temperos, produtos a granel, castanhas, suplementos e muito mais no Uberaba, Curitiba. Consulte produtos e entregas pelo WhatsApp.",
    canonical: "https://requinteprodutosnaturais.com.br/",
    ogImage:
      "https://images.pexels.com/photos/5332489/pexels-photo-5332489.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=-25.4809415,-49.2015316&z=16&output=embed",
  images: {
    logo: "/images/logo-requinte.png",
    storefront: "https://images.pexels.com/photos/8228650/pexels-photo-8228650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    heroProducts: "https://images.pexels.com/photos/5332489/pexels-photo-5332489.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    chasTemperos: "https://images.pexels.com/photos/12944684/pexels-photo-12944684.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    produtosGranel: "https://images.pexels.com/photos/3735156/pexels-photo-3735156.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    pastasSuplementos: "https://images.pexels.com/photos/23384626/pexels-photo-23384626.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    cosmeticosNaturais: "https://images.pexels.com/photos/8100691/pexels-photo-8100691.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    interiorLoja: "https://images.pexels.com/photos/13253598/pexels-photo-13253598.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    equipeRequinte: "https://images.pexels.com/photos/8475204/pexels-photo-8475204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    fallback:
      "https://images.pexels.com/photos/165228/pexels-photo-165228.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
  },
} as const;

export type CategoryFilter =
  | "todos"
  | "alimentacao"
  | "bem-estar"
  | "suplementos"
  | "cuidados-pessoais";

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
  filter: CategoryFilter;
}

export const productCategories: ProductCategory[] = [
  {
    id: "chas-infusoes",
    name: "Chás e infusões",
    description: "Mais de 60 opções de chás e infusões para o seu dia a dia.",
    image:
      "https://images.pexels.com/photos/19288835/pexels-photo-19288835.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Leaf,
    filter: "bem-estar",
  },
  {
    id: "temperos-especiarias",
    name: "Temperos e especiarias",
    description: "Mais de 30 opções de temperos e especiarias para dar sabor.",
    image:
      "https://images.pexels.com/photos/5504609/pexels-photo-5504609.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: CookingPot,
    filter: "alimentacao",
  },
  {
    id: "produtos-granel",
    name: "Produtos a granel",
    description: "Compre na quantidade que você precisa, sem desperdício.",
    image:
      "https://images.pexels.com/photos/3735179/pexels-photo-3735179.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Scale,
    filter: "alimentacao",
  },
  {
    id: "castanhas-graos-sementes",
    name: "Castanhas, grãos e sementes",
    description: "Opções variadas para snacks, receitas e alimentação equilibrada.",
    image:
      "https://images.pexels.com/photos/29219216/pexels-photo-29219216.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Sprout,
    filter: "alimentacao",
  },
  {
    id: "pastas-snacks",
    name: "Pastas e snacks",
    description: "Pastas de amendoim, frutas secas e opções sem adição de açúcar.",
    image:
      "https://images.pexels.com/photos/23384624/pexels-photo-23384624.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Sandwich,
    filter: "alimentacao",
  },
  {
    id: "suplementos-vitaminas",
    name: "Suplementos e vitaminas",
    description: "Produtos para diferentes rotinas e práticas esportivas.",
    image:
      "https://images.pexels.com/photos/7615558/pexels-photo-7615558.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Pill,
    filter: "suplementos",
  },
  {
    id: "cosmeticos-naturais",
    name: "Cosméticos naturais",
    description: "Cuidados com a pele e cabelos com produtos de origem natural.",
    image:
      "https://images.pexels.com/photos/8101512/pexels-photo-8101512.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Flower2,
    filter: "cuidados-pessoais",
  },
  {
    id: "mel-incensos-naturais",
    name: "Mel, incensos e outros naturais",
    description: "Mel, incensos e produtos aromáticos para o seu ambiente.",
    image:
      "https://images.pexels.com/photos/4921856/pexels-photo-4921856.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop",
    icon: Droplet,
    filter: "bem-estar",
  },
];

export const categoryFilters: { id: CategoryFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "alimentacao", label: "Alimentação" },
  { id: "bem-estar", label: "Bem-estar" },
  { id: "suplementos", label: "Suplementos" },
  { id: "cuidados-pessoais", label: "Cuidados pessoais" },
];

export interface FeaturedItem {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const featuredItems: FeaturedItem[] = [
  {
    id: "chas-selecionados",
    name: "Chás selecionados",
    description: "Infusões variadas para diferentes momentos do dia.",
    image:
      "https://images.pexels.com/photos/165228/pexels-photo-165228.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    icon: Leaf,
  },
  {
    id: "temperos-granel",
    name: "Temperos a granel",
    description: "Especiarias para realçar o sabor das suas receitas.",
    image:
      "https://images.pexels.com/photos/19227962/pexels-photo-19227962.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    icon: CookingPot,
  },
  {
    id: "castanhas-frutas-secas",
    name: "Castanhas e frutas secas",
    description: "Snacks naturais e ingredientes para a sua despensa.",
    image:
      "https://images.pexels.com/photos/35166629/pexels-photo-35166629.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    icon: Sprout,
  },
  {
    id: "pastas-amendoim",
    name: "Pastas de amendoim",
    description: "Pastas cremosas para complementar suas refeições.",
    image:
      "https://images.pexels.com/photos/8611766/pexels-photo-8611766.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    icon: Sandwich,
  },
  {
    id: "snacks-sem-acucar",
    name: "Snacks e opções sem adição de açúcar",
    description: "Alternativas para quem busca reduzir o consumo de açúcar.",
    image:
      "https://images.pexels.com/photos/12945019/pexels-photo-12945019.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    icon: Apple,
  },
  {
    id: "suplementos-rotinas",
    name: "Suplementos para diferentes rotinas",
    description: "Opções para complementar a sua alimentação e rotina.",
    image:
      "https://images.pexels.com/photos/4378601/pexels-photo-4378601.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    icon: Pill,
  },
];

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: ShoppingBag,
    title: "Grande variedade",
    description:
      "Chás, temperos, castanhas, produtos a granel, suplementos e muito mais.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento próximo",
    description:
      "Tire dúvidas e consulte produtos diretamente com nossa equipe pelo WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Compre com praticidade",
    description:
      "Consulte entregas em Curitiba e região ou retire em nossa loja no Uberaba.",
  },
];

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  {
    icon: ShoppingBag,
    title: "Variedade de produtos",
    description:
      "Categorias diversificadas para diferentes gostos e necessidades.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento atencioso",
    description: "Equipe disponível para ajudar você a escolher com calma.",
  },
  {
    icon: Leaf,
    title: "Produtos selecionados",
    description: "Buscamos boas opções para compor a nossa seleção.",
  },
  {
    icon: Star,
    title: "Preços justos",
    description: "Procuramos oferecer uma boa relação entre qualidade e valor.",
  },
  {
    icon: Truck,
    title: "Entregas em Curitiba",
    description: "Consulte disponibilidade e condições para a sua região.",
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

export interface GalleryImage {
  src: string;
  alt: string;
  tall?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/8228650/pexels-photo-8228650.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
    alt: "Fachada de loja de produtos naturais com plantas e toldo",
  },
  {
    src: "https://images.pexels.com/photos/13253598/pexels-photo-13253598.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop",
    alt: "Interior de loja com potes de produtos naturais em prateleira de madeira",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/19288834/pexels-photo-19288834.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
    alt: "Seleção de chás em frascos de vidro em prateleira de madeira",
  },
  {
    src: "https://images.pexels.com/photos/5504609/pexels-photo-5504609.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
    alt: "Temperos coloridos em pó à venda",
  },
  {
    src: "https://images.pexels.com/photos/3735156/pexels-photo-3735156.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop",
    alt: "Dispensadores de produtos a granel em loja",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/23384626/pexels-photo-23384626.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
    alt: "Pasta de amendoim em pote de vidro com amendoins",
  },
  {
    src: "https://images.pexels.com/photos/8100691/pexels-photo-8100691.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
    alt: "Frasco de cosmético natural com gotas em tecido",
  },
  {
    src: "https://images.pexels.com/photos/8475204/pexels-photo-8475204.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop",
    alt: "Equipe de loja sorrindo com aventais",
  },
];

export const instagramImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/12944684/pexels-photo-12944684.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    alt: "Variedade de chás à venda na Requinte",
  },
  {
    src: "https://images.pexels.com/photos/8859643/pexels-photo-8859643.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    alt: "Temperos coloridos disponíveis na loja",
  },
  {
    src: "https://images.pexels.com/photos/29219216/pexels-photo-29219216.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    alt: "Castanhas e sementes em cestas na loja",
  },
  {
    src: "https://images.pexels.com/photos/4921856/pexels-photo-4921856.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    alt: "Mel natural em pote",
  },
  {
    src: "https://images.pexels.com/photos/11465621/pexels-photo-11465621.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    alt: "Incensos aromáticos disponíveis na Requinte",
  },
  {
    src: "https://images.pexels.com/photos/7262393/pexels-photo-7262393.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    alt: "Produtos de cuidado natural na loja",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "A Requinte faz entregas?",
    answer:
      "A loja divulga entregas para Curitiba e região. Consulte pelo WhatsApp a disponibilidade, taxa e prazo para o seu endereço.",
  },
  {
    question: "Como faço um pedido?",
    answer:
      "Envie uma mensagem pelo WhatsApp informando os produtos ou categorias que procura. A equipe confirmará as opções disponíveis.",
  },
  {
    question: "Os produtos do site estão sempre disponíveis?",
    answer:
      "O estoque pode variar. Por isso, recomendamos confirmar a disponibilidade antes de se deslocar ou finalizar o pedido.",
  },
  {
    question: "Onde fica a loja?",
    answer:
      "A unidade destacada fica na Rua Eunice Bettini Bartoszeck, 1870, no bairro Uberaba, em Curitiba.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Consulte as formas de pagamento disponíveis diretamente com a equipe pelo WhatsApp.",
  },
  {
    question: "Produtos naturais e suplementos substituem orientação profissional?",
    answer:
      "Não. Produtos naturais e suplementos não substituem diagnóstico, tratamento ou orientação de profissionais de saúde.",
  },
];

export interface Step {
  number: number;
  title: string;
  description: string;
}

export const howToBuySteps: Step[] = [
  {
    number: 1,
    title: "Escolha o que procura",
    description: "Explore nossas categorias ou envie sua lista pelo WhatsApp.",
  },
  {
    number: 2,
    title: "Fale com a equipe",
    description:
      "Confirme produtos, valores, disponibilidade e condições de entrega.",
  },
  {
    number: 3,
    title: "Receba ou retire",
    description: "Combine a entrega ou visite nossa unidade no Uberaba.",
  },
];

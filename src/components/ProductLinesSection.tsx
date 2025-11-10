import { ProductLine } from "./ProductLine";

const productLines = [
  {
    id: "start-i-modern",
    title: "Linha Start I Modern",
    description: "Ideal para otimizar espaços. A Linha Start I Modern traz equipamentos compactos, fáceis de ajustar e com visual moderno, perfeitos para treinos práticos em ambientes com espaço limitado.",
    highlights: [
      "Perfeita para salas de fitness menores ou studios",
      "Design moderno que atrai os alunos",
      "Ajustes simples e intuitivos"
    ],
    categories: ["Pernas", "Costas", "Peitoral", "Braços"],
    products: [
      { name: "Flexo Extensor", code: "LS643", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
      { name: "Adutor Abdutor", code: "LS620", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
      { name: "Puxador Conjugado", code: "LS618", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "start-ii",
    title: "Linha Start II",
    description: "A escolha ideal para orçamentos públicos e institucionais. São equipamentos tradicionais, fáceis de ajustar e com baixo custo de manutenção. A linha Start II tem o ótimo custo-benefício para o seu negócio.",
    highlights: [
      "Melhor Custo-Benefício: Durabilidade e baixo custo de manutenção",
      "Tradicional e Robusta: Equipamentos que resistem ao uso intenso",
      "Facilidade de Uso: Simples de regular e executar os exercícios"
    ],
    categories: ["Pernas", "Costas", "Peitoral", "Braços", "Multi-Estações"],
    products: [
      { name: "Extensão", code: "LS100", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
      { name: "Adutor Abdutor", code: "LS120", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
      { name: "Crossmith", code: "LS156", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "start-iii-modern",
    title: "Linha Start III Modern",
    description: "Design e segurança em primeiro lugar. Apresenta uma estrutura robusta com carenagens totalmente fechadas (proteção contra acidentes) e QR Code que mostra a forma correta de regular o aparelho.",
    highlights: [
      "Máxima Segurança: Carenagens fechadas protegem os alunos",
      "Instrução Integrada: QR Code ensina o uso correto do aparelho",
      "Estrutura Robusta: Alta durabilidade para o dia a dia escolar"
    ],
    categories: ["Pernas", "Glúteos", "Costas", "Peitoral", "Braços"],
    products: [
      { name: "Extensão", code: "LS300", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
      { name: "Adutor/Abdutor", code: "LS420", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
      { name: "Puxador Vertical", code: "LS417", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "start-iv",
    title: "Linha Start IV",
    description: "A combinação de design, tecnologia e sofisticação. Esta linha foi pensada para proporcionar conforto e segurança, com detalhes que valorizam a estética e tornam a academia da sua universidade muito mais atraente.",
    highlights: [
      "Ajuste \"Rapid Fire\": Troca rápida sem sair do aparelho",
      "Instrução Visual: Adesivo 3D da região muscular e QR Code de regulagem",
      "Alta Performance: Ideal para academias universitárias de alto padrão"
    ],
    categories: ["Abdômen", "Braços", "Costas", "Ombros", "Peito", "Pernas"],
    products: [
      { name: "Flexão", code: "LS314", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
      { name: "Abdutor", code: "LS322", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
      { name: "Adutor/Abdutor", code: "LS320", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "start-v",
    title: "Linha Start V",
    description: "A fusão perfeita entre design, inovação e desempenho. Criada para quem busca uma experiência imersiva, unindo estética e funcionalidade para elevar o padrão da academia a um novo patamar.",
    highlights: [
      "Linha Premium: O que há de mais moderno para instalações universitárias",
      "Ajuste \"Rapid Fire\" e QR Code para instrução",
      "Design Superior: Carenagem em aço escovado e estofamento anatômico"
    ],
    categories: ["Pernas", "Braços", "Peitoral", "Costas", "Multi-Estações"],
    products: [
      { name: "Extensão", code: "LS500", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
      { name: "Flexão", code: "LS514", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
      { name: "Crossmith", code: "LS556", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "crossing-limits",
    title: "Linha Crossing Limits",
    description: "Focada em performance. Com design moderno, estrutura robusta e biomecânica diferenciada, a linha Crossing Limits (articulada/peso livre) foi projetada para suportar grandes cargas de peso, mantendo a estabilidade.",
    highlights: [
      "Alta Performance: Ideal para departamentos de atletismo e treinamento esportivo",
      "Biomecânica Avançada: Movimentos precisos para atletas",
      "Durabilidade Extrema: Feita para suportar grandes cargas"
    ],
    categories: ["Pernas", "Costas", "Peitoral", "Ombros"],
    products: [
      { name: "Leg Press 45°", code: "CL5", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
      { name: "Maquina Hack", code: "CL4", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
      { name: "Remada Baixa", code: "CL6", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "imports-forca",
    title: "Linha Imports | Força",
    description: "Equipamentos de força selecionados (Bateria de Pesos e Articulados) que complementam nosso portfólio, oferecendo soluções de biomecânica e design internacionais para academias de alto padrão.",
    highlights: [
      "Equipamentos com biomecânica diferenciada",
      "Opções articuladas (plate-loaded) para treinos avançados",
      "Variedade de estações para treinos completos"
    ],
    categories: ["Bateria de Pesos", "Articulados", "Articulados Titan"],
    products: [
      { name: "Puxada Alta", code: "L152", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
      { name: "Leg Press 180°", code: "L138", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
      { name: "Hack 45° Articulado", code: "L142", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" }
    ]
  }
];

const complementaryLines = [
  {
    id: "peso-livre",
    title: "Linha Peso Livre",
    description: "A base de toda academia. Projetados para oferecer versatilidade, eficiência e resultados excepcionais. Com nossa linha de pesos livres, seus alunos têm a liberdade de variar treinos e aumentar progressivamente a carga.",
    highlights: [
      "Essencial: Bancos, suportes e racks indispensáveis para qualquer academia",
      "Versatilidade: Permite centenas de variações de exercícios",
      "Durabilidade: Estruturas robustas para suportar peso"
    ],
    categories: ["Bancos de Supino", "Bancos Reguláveis", "Suportes", "Articulados"],
    products: [
      { name: "Supino 3 em 1 Modern", code: "LS449", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
      { name: "Leg Press 45° Articulado", code: "PIG61", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
      { name: "Supino Reto Articulado", code: "CS360", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "cardio",
    title: "Linha Cardio",
    description: "Resistência e durabilidade para alto fluxo. Desde esteiras de última geração até bicicletas ergométricas de alta resistência e elípticos de suavidade incomparável, cada aparelho foi selecionado para proporcionar conforto e resultados.",
    highlights: [
      "Alto Desempenho: Equipamentos profissionais feitos para uso contínuo",
      "Durabilidade: Essencial para o alto fluxo de alunos",
      "Variedade: Esteiras, bicicletas (horizontal e vertical), elípticos e simuladores de escada"
    ],
    categories: ["Esteiras", "Bicicletas", "Elípticos", "Escadas"],
    products: [
      { name: "Esteira Profissional VT3000", code: "VT3000", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
      { name: "Bicicleta Horizontal Eletromagnética", code: "VBH2100", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
      { name: "Simulador de Escada Prestige Touch", code: "PST", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" }
    ]
  },
  {
    id: "acessorios",
    title: "Linha Acessórios",
    description: "Todos os complementos para sua academia. Desde as versáteis anilhas injetadas até os clássicos dumbells, halteres, barras e colchonetes, oferecemos uma variedade incrível de peças e acessórios.",
    highlights: [
      "Tudo em um só lugar: O portfólio completo para montar sua academia",
      "Qualidade: Anilhas, halteres e barras com padrão de qualidade Vitally",
      "Organização: Estantes para halteres, anilhas e barras"
    ],
    categories: ["Anilhas", "Halteres/Dumbbells", "Barras", "Puxadores", "Armazenamento"],
    products: [
      { name: "Anilha Injetada", code: "ANI", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
      { name: "Dumbbell Injetado", code: "DBI", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
      { name: "Barras Cromadas C/ Recartilho", code: "BCR", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" }
    ]
  }
];

export const ProductLinesSection = () => {
  return (
    <section className="w-full py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça Nossas Linhas de Produtos para o Setor Educacional
          </h2>
        </div>

        {/* Linhas de Força */}
        {productLines.map((line, index) => (
          <ProductLine key={line.id} {...line} index={index} />
        ))}

        {/* Linhas Complementares */}
        <div className="mt-20 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Linhas Complementares
          </h3>
        </div>
        
        {complementaryLines.map((line, index) => (
          <ProductLine key={line.id} {...line} index={productLines.length + index} />
        ))}
      </div>
    </section>
  );
};

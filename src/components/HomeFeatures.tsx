import React from 'react';

export const HomeFeatures = () => {
  const beneficios = [
    {
      id: 1,
      icone: "🌟", // Dica: No seu projeto oficial, troque por ícones do Lucide ou Phosphor Icons
      titulo: "Qualidade Premium",
      texto: "Selecionamos rigorosamente cada item. O padrão ",
      destaque: "Minha Loja",
      textoFinal: " que você já conhece e confia."
    },
    {
      id: 2,
      icone: "💬",
      titulo: "Atendimento Humanizado",
      texto: "Dúvidas? Nossa equipe está sempre pronta para ajudar. Aqui, você fala com ",
      destaque: "pessoas de verdade",
      textoFinal: ", não com robôs."
    },
    {
      id: 3,
      icone: "🔒",
      titulo: "Compra 100% Segura",
      texto: "Ambiente blindado e criptografado. Garantimos a total ",
      destaque: "segurança dos seus dados",
      textoFinal: " em todas as etapas."
    },
    {
      id: 4,
      icone: "📦",
      titulo: "Troca Facilitada",
      texto: "Não serviu ou não era o que esperava? A primeira troca é ",
      destaque: "por nossa conta",
      textoFinal: ", sem letras miúdas ou burocracia."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-6xl font-extrabold text-[#212121] mb-4">
            A excelência que você <span className="span-destaque">merece</span>
          </h2>
          <p className="text-corpo max-w-2xl mx-auto text-lg">
            Mais do que vender produtos, nós nos dedicamos a entregar uma experiência de compra impecável do início ao fim.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {beneficios.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icone}
              </div>
              <h3 className="text-[#212121] font-bold text-xl mb-3">
                {item.titulo}
              </h3>
              <p className="text-corpo leading-relaxed">
                {item.texto}
                <span className="span-destaque">{item.destaque}</span>
                {item.textoFinal}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
import React from 'react';

const avaliacoesSimuladas = [
  {
    id: 1,
    nome: 'Carlos M.',
    data: '18 de Abril, 2026',
    nota: 5,
    textoInicial: 'Produto sensacional. Fiquei muito surpreso com a ',
    destaque: 'qualidade do material',
    textoFinal: ' e o acabamento impecável. Vale cada centavo!',
  },
  {
    id: 2,
    nome: 'Juliana T.',
    data: '12 de Abril, 2026',
    nota: 4,
    textoInicial:
      'Muito bom, atendeu às minhas expectativas. Apenas a embalagem que chegou um pouco amassada, mas o ',
    destaque: 'produto estava intacto',
    textoFinal: '.',
  },
  {
    id: 3,
    nome: 'Rafael S.',
    data: '05 de Abril, 2026',
    nota: 5,
    textoInicial: 'Amei! Comprei com um pouco de receio, mas a ',
    destaque: 'entrega foi super rápida',
    textoFinal: ' e o tamanho serviu perfeitamente.',
  },
];

interface ProductReviewsProps {
  rate: number;
  count: number;
}

export const ProductReviews = ({ rate, count }: ProductReviewsProps) => {
  return (
    <section className="mt-20 border-t border-gray-200 pt-16 px-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Resumo Geral das Avaliações (Lado Esquerdo) */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-extrabold text-[#212121] mb-6">
            Avaliações dos Clientes
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-black text-[#212121]">{rate}</span>
            <div className="flex flex-col">
              <div className="flex text-2xl">
                {[1, 2, 3, 4, 5].map((estrela) => (
                  <span
                    key={estrela}
                    className={
                      estrela <= Math.round(rate)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-corpo-branco">Baseado em {count} avaliações</span>
            </div>
          </div>

          <button className="w-full border-2 border-[#212121] text-[#212121] font-bold py-3 rounded hover:bg-[#212121] hover:text-white transition-colors mt-4">
            Escrever uma Avaliação
          </button>
        </div>

        {/* Lista de Avaliações (Lado Direito) */}
        <div className="md:w-2/3 flex flex-col gap-8">
          {avaliacoesSimuladas.map((av) => (
            <div
              key={av.id}
              className="border-b border-gray-100 pb-8 last:border-0"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-[#212121]">{av.nome}</h4>
                  <div className="flex text-yellow-400 text-sm mt-1">
                    {[1, 2, 3, 4, 5].map((estrela) => (
                      <span key={estrela}>
                        {estrela <= av.nota ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="span-destaque text-xs">{av.data}</span>
              </div>

              {/* Aqui usamos as suas classes customizadas */}
              <p className="text-corpo-branco mt-3 leading-relaxed">
                {av.textoInicial}
                <span className="span-destaque">{av.destaque}</span>
                {av.textoFinal}
              </p>

              {/* Tag de Compra Verificada */}
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  ✓ Compra Verificada
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

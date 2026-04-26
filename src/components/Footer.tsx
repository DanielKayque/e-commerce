import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#212121] pt-16 pb-8 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-12">
        
        <div>
          <h2 className="text-[#ebebeb] text-2xl font-extrabold mb-4">MINHA LOJA</h2>
          <p className="textos-corpo mb-4 leading-relaxed">
            Assine nossa newsletter e garanta <span className="span-destaque">10% OFF</span> na sua primeira compra de produtos selecionados.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black font-bold px-4 py-2 rounded hover:bg-gray-200 transition-colors">
              Assinar
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-[#ebebeb] text-lg font-extrabold mb-4">CATEGORIAS</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="produto/categorias/electronics" className="textos-corpo hover:text-white transition-colors">Eletrônicos</Link></li>
            <li><Link to="produto/categorias/jewelery" className="textos-corpo hover:text-white transition-colors">Joias</Link></li>
            <li><Link to="produto/categorias/men's%20clothing" className="textos-corpo hover:text-white transition-colors">Moda Masculina</Link></li>
            <li><Link to="produto/categorias/women's%20clothing" className="textos-corpo hover:text-white transition-colors">Moda Feminina</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#ebebeb] text-lg font-extrabold mb-4">INSTITUCIONAL</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/sobre" className="textos-corpo hover:text-white transition-colors">Sobre a Marca</Link></li>
            <li><Link to="/trocas" className="textos-corpo hover:text-white transition-colors">Trocas e Devoluções</Link></li>
            <li><Link to="/termos" className="textos-corpo hover:text-white transition-colors">Termos de Uso</Link></li>
            <li><Link to="/privacidade" className="textos-corpo hover:text-white transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#ebebeb] text-lg font-extrabold mb-4">ATENDIMENTO</h3>
          <ul className="flex flex-col gap-3">
            <li className="textos-corpo">Seg a Sex das 09h às 18h</li>
            <li className="textos-corpo">contato@minhaloja.com.br</li>
            <li className="textos-corpo flex items-center gap-2 mt-4">
               <span className="span-destaque">Siga-nos nas redes</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8">
        <p className="textos-corpo text-sm">
          © {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.
        </p>
        <p className="textos-corpo text-sm mt-4 md:mt-0">
          Desenvolvido com <span className="span-destaque">&hearts;</span> para o portfólio.
        </p>
      </div>
    </footer>
  );
};
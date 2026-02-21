import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * Lider Flow Landing Page
 * Design: Dark Blue (#003d7a) + Green Accent (#2d8659)
 * Logo: KS Lider Flow (Blue K + Green S)
 * Typography: Poppins (body) + Playfair Display (headlines)
 * Layout: Asymmetric sections with alternating image/text positioning
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo-ks.png" alt="KS Lider Flow" className="h-12 w-auto" />
            <span className="font-bold text-primary text-lg hidden sm:inline">Lider Flow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#metodologia" className="text-foreground hover:text-accent transition">Metodologia</a>
            <a href="#contexto" className="text-foreground hover:text-accent transition">Contexto</a>
            <a href="#contato" className="text-foreground hover:text-accent transition">Contato</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:opacity-90">
            Comprar Treinamento
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-dark-blue min-h-screen flex items-center relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="1200" height="600" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                  SEJA<br />
                  <span className="text-accent">LÍDER FLOW</span>
                </h1>
                <p className="text-xl text-gray-100 max-w-lg">
                  Desenvolvimento de liderança baseado em neurociência e comportamento humano
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg">
                  Iniciar Treinamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                  Saiba Mais
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-full">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028562142/fFNbewxDOuSWtmRx.png"
                alt="Líder profissional"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <ChevronDown className="w-8 h-8 text-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section id="metodologia" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028562142/fVACvgHvsNdMZvRy.png"
                alt="Equipe em treinamento"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <div className="accent-line mb-4"></div>
                <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Metodologia<br />
                  <span className="text-accent">LÍDER FLOW</span>
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Desenvolvimento de liderança baseado em neurociência e comportamento humano que ensina o líder primeiramente regular a si mesmo para regular o ambiente.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Integra autoconexão, comunicação ajustada, influência e equilíbrio entre poder e leveza para gerar engajamento, segurança psicológica e resultados sustentáveis.
              </p>

              <div className="pt-4">
                <Button className="bg-primary text-white hover:opacity-90 px-8 py-6 text-lg">
                  Conheça a Metodologia
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto Organizacional Section */}
      <section id="contexto" className="py-20 gradient-dark-blue text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="accent-line mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Playfair Display' }}>
                CONTEXTO ORGANIZACIONAL
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                O desempenho de uma equipe não depende apenas de estratégia ou competência técnica. Depende, sobretudo, da qualidade da liderança. Estudos da Gallup indicam que a liderança é responsável por até 70% da variação no engajamento das equipes.
              </p>

              <p className="text-xl leading-relaxed">
                Ou seja: o líder é o principal modulador do ambiente emocional e produtivo. Pesquisas publicadas pela Harvard Business Review reforçam que ambientes com maior segurança psicológica apresentam:
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Mais colaboração</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Maior inovação</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Redução de comportamentos defensivos</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Melhor desempenho coletivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema Real Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028562142/jPsOKMQxNtjpscxE.png"
                alt="Líder em reunião"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <div className="accent-line mb-4"></div>
                <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  O PROBLEMA<br />
                  <span className="text-accent">REAL</span>
                </h2>
              </div>

              <p className="text-lg text-gray-700">
                Em ambientes onde o líder ativa constantemente estados de alerta, observa-se:
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-lg">Comunicação reativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-lg">Retenção de informação</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-lg">Queda de criatividade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-lg">Aumento de conflitos improdutivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-lg">Performance inconsistente</span>
                </li>
              </ul>

              <div className="bg-primary/10 border-l-4 border-accent p-6 rounded">
                <p className="text-gray-800">
                  <span className="font-semibold text-primary">Isso não é apenas comportamental.</span> É neurobiológico. O cérebro humano prioriza segurança antes de performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 gradient-dark-blue text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="accent-line"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Comece Sua Jornada
              </h2>
              <p className="text-xl text-gray-100">
                Preencha o formulário abaixo e nossa equipe entrará em contato para discutir como podemos ajudar sua organização
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Empresa</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensagem *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-32"
                  placeholder="Conte-nos sobre seus objetivos e desafios de liderança..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-lg font-semibold"
              >
                {submitted ? '✓ Mensagem Enviada!' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Pronto para transformar sua liderança?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Nossos treinamentos são personalizados para sua organização. Descubra como o Lider Flow pode impactar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:opacity-90 px-10 py-6 text-lg">
              Comprar Treinamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-10 py-6 text-lg">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-ks.png" alt="KS Lider Flow" className="h-10 w-auto" />
              </div>
              <p className="text-gray-200 text-sm">
                Transformando líderes através de neurociência e comportamento humano.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><a href="#" className="hover:text-accent transition">Metodologia</a></li>
                <li><a href="#" className="hover:text-accent transition">Treinamentos</a></li>
                <li><a href="#" className="hover:text-accent transition">Consultoria</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><a href="#" className="hover:text-accent transition">Sobre</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><a href="#" className="hover:text-accent transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition">Termos</a></li>
                <li><a href="#" className="hover:text-accent transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-200">
            <p>&copy; 2024 Lider Flow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

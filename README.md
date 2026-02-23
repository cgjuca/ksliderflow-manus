# Líder Flow - Landing Page

Página de apresentação profissional da metodologia Líder Flow, desenvolvida com HTML5, CSS3 e JavaScript puro.

## Estrutura do Projeto

```
lider-flow-project/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos globais
├── js/
│   └── script.js      # Funcionalidades JavaScript
├── assets/            # Pasta para imagens locais (opcional)
└── README.md          # Este arquivo
```

## Características

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave com scroll automático
- ✅ Cores profissionais (Navy + Gold)
- ✅ Tipografia moderna (Inter)
- ✅ Formulário de contato funcional
- ✅ Seção de módulos com estrutura completa
- ✅ Sem dependências externas (HTML/CSS/JS puro)
- ✅ Otimizado para SEO
- ✅ Acessível e semântico

## Como Usar Localmente

1. **Clonar ou baixar o projeto**
   ```bash
   git clone <seu-repositorio>
   cd lider-flow-project
   ```

2. **Abrir no navegador**
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou use um servidor local:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```

3. **Acessar em seu navegador**
   - Abra `http://localhost:8000`

## Deployment

### Vercel
1. Faça push do projeto para GitHub
2. Conecte seu repositório no Vercel
3. Vercel detectará automaticamente e fará o deploy
4. Seu site estará disponível em `seu-projeto.vercel.app`

### Netlify
1. Faça push do projeto para GitHub
2. Conecte seu repositório no Netlify
3. Configure a pasta raiz como `./`
4. Clique em Deploy
5. Seu site estará disponível em `seu-projeto.netlify.app`

### GitHub Pages
1. Faça push do projeto para GitHub
2. Vá para Settings > Pages
3. Selecione `main` branch como source
4. Seu site estará disponível em `seu-usuario.github.io/lider-flow-project`

### Servidor Próprio
1. Faça upload dos arquivos via FTP/SFTP
2. Configure seu domínio para apontar para o servidor
3. Acesse seu site via seu domínio

## Personalização

### Cores
Edite as variáveis CSS em `css/styles.css`:
```css
:root {
    --navy: #1a2a4a;      /* Cor primária */
    --gold: #d4a574;      /* Cor destaque */
    --light-blue: #f0f4f8; /* Cor de fundo claro */
    --dark-blue: #1e3a5f; /* Cor secundária */
}
```

### Tipografia
A fonte padrão é "Inter" do Google Fonts. Para mudar:
1. Edite a importação em `css/styles.css`
2. Atualize a propriedade `font-family` em `body` e `h1-h6`

### Imagens
As imagens estão usando URLs CDN. Para usar imagens locais:
1. Coloque as imagens na pasta `assets/`
2. Atualize os `src` das imagens em `index.html`

### Formulário de Contato
O formulário usa `mailto:` por padrão. Para integrar com um serviço:

**Opção 1: FormSubmit.co (Gratuito)**
```javascript
// Em js/script.js, substitua a função handleContactForm por:
fetch('https://formsubmit.co/seu-email@example.com', {
    method: 'POST',
    body: new FormData(document.querySelector('form')),
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {
    if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        document.querySelector('form').reset();
    }
});
```

**Opção 2: Backend Próprio**
Configure um endpoint POST em seu servidor e atualize a URL em `js/script.js`.

## SEO

O projeto inclui meta tags básicas. Para melhorar SEO:

1. **Atualize meta description em `index.html`:**
   ```html
   <meta name="description" content="Sua descrição otimizada">
   ```

2. **Adicione Open Graph tags:**
   ```html
   <meta property="og:title" content="Líder Flow">
   <meta property="og:description" content="...">
   <meta property="og:image" content="URL-da-imagem">
   ```

3. **Adicione favicon:**
   ```html
   <link rel="icon" href="assets/favicon.ico">
   ```

## Suporte

Para dúvidas ou sugestões, entre em contato:
- Email: contato@liderflow.com.br
- Telefone: (11) 99999-9999
- LinkedIn: [Líder Flow](https://linkedin.com)
- Instagram: [@liderflow](https://instagram.com)

## Licença

Este projeto é propriedade de Líder Flow. Todos os direitos reservados.

---

**Versão:** 1.0.0  
**Última atualização:** Fevereiro 2026

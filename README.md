# 💈 Landing Page Barber

**Landing page educacional para uma barbearia fictícia.**

Este projeto foi desenvolvido como exercício prático de construção de interfaces web. A página simula a apresentação de uma barbearia, com destaque para serviços, informações do estabelecimento e canais de contato demonstrativos.

> **Nota:** este é um projeto de estudo, não um site comercial entregue a um cliente. As informações sobre a barbearia são ilustrativas.

🔗 **[Visualizar a demonstração](https://jkdev31.github.io/landing-page-barber/)**

## Funcionalidades e elementos da página

- Seção inicial com chamada principal e navegação interna para os serviços.
- Apresentação da barbearia e dos serviços, com imagens e valores ilustrativos.
- Layout com adaptações para diferentes larguras de tela.
- Animações de entrada com a biblioteca AOS.
- Mapa ilustrativo incorporado e ícones de redes sociais ainda demonstrativos.
- Aviso visível de que a página é um projeto educacional sem agendamento real.

## Tecnologias utilizadas

- **HTML5:** estrutura e conteúdo das seções.
- **CSS3 e SCSS (Sass):** estilos, organização em arquivos parciais e regras responsivas.
- **JavaScript:** inicialização da biblioteca AOS.
- **AOS, Font Awesome e Google Fonts:** efeitos visuais, ícones e tipografia.
- **Google Maps Embed:** mapa ilustrativo incorporado à página.

## Organização do projeto

- `index.html` — estrutura principal da página.
- `scss/style.scss` — arquivo SCSS principal.
- `partials/` — arquivos SCSS de cores, cabeçalho e layout.
- `scss/style.css` — CSS compilado utilizado pela página.
- `js/scripts.js` — inicialização das animações AOS.
- `imagens/` — imagens, logotipos e ícones utilizados na interface.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/JkDeV31/landing-page-barber.git
   ```

2. Entre na pasta `landing-page-barber`.
3. Abra o arquivo `index.html` no navegador.

O CSS compilado já está incluído no repositório. Não é necessário compilar o SCSS apenas para visualizar a página. Alguns recursos visuais dependem de conexão com a internet.

## Estado atual e limitações

- Há textos provisórios (`Lorem ipsum`) nas seções de apresentação.
- Os seis links de redes sociais ainda usam destinos ilustrativos (`#`) e precisam de revisão.
- Os dois CTAs que anteriormente simulavam agendamento agora navegam para a seção **Serviços**, sem abrir um WhatsApp fictício.
- O atalho flutuante de WhatsApp fictício foi retirado; **não há um sistema real de agendamento**.
- Os preços ainda são apresentados como elementos `<button>` sem ação — melhoria futura.
- O mapa é ilustrativo, não a localização de um estabelecimento contratado.
- O indicador de foco para navegação por teclado já foi corrigido no PR #1; uma auditoria completa de acessibilidade continua pendente, assim como a revisão dos metadados de SEO.

Esses pontos estão documentados para diferenciar a demonstração educacional de um produto pronto para uso comercial.

## Autor

**Cleverson Lemes | JkDeV**  
[Perfil do GitHub](https://github.com/JkDeV31) · [LinkedIn](https://www.linkedin.com/in/cleverson-lemes-390a27235/)

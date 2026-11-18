# 💈 Landing Page Barber

**Landing page educacional para uma barbearia fictícia.**

Este projeto foi desenvolvido como exercício prático de construção de interfaces web. A página simula a apresentação de uma barbearia, com destaque para serviços e informações do estabelecimento. Os links do GitHub, LinkedIn e e-mail são canais profissionais do desenvolvedor — não da barbearia fictícia.

> **Nota:** este é um projeto de estudo, não um site comercial entregue a um cliente. As informações sobre a barbearia são ilustrativas.

🔗 **[Visualizar a demonstração](https://jkdev31.github.io/landing-page-barber/)**

## Funcionalidades e elementos da página

- Seção inicial com chamada principal e navegação interna para os serviços.
- Apresentação da barbearia e dos serviços, com imagens e valores ilustrativos.
- Layout com adaptações para diferentes larguras de tela, incluindo áreas de toque ampliadas para links sociais no mobile.
- Animações de entrada com a biblioteca AOS, respeitando a preferência de movimento reduzido (`prefers-reduced-motion`).
- Mapa ilustrativo incorporado e links reais de GitHub, LinkedIn e e-mail do desenvolvedor, identificados como canais profissionais dele (não da barbearia).
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
- `scss/style.css.map` — mapa de fontes CSS existente, ainda pendente de recompilação com os estilos mais recentes.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/JkDeV31/landing-page-barber.git
   ```

2. Entre na pasta `landing-page-barber`.
3. Abra o arquivo `index.html` no navegador.

O CSS compilado já está incluído no repositório. Não é necessário compilar o SCSS apenas para visualizar a página. Alguns recursos visuais dependem de conexão com a internet.

Para manutenção dos estilos, o arquivo principal é `scss/style.scss`, que importa os parciais da pasta `partials/`. O CSS utilizado pelo navegador está em `scss/style.css`. O mapa `scss/style.css.map` **não está sincronizado com todas as alterações recentes**: sua regeneração deve ser feita com um compilador Sass e validada antes de ser publicada.

## Prévia social

A capa de compartilhamento está em [`imagens/preview-social-barber.png`](imagens/preview-social-barber.png), em **1200 × 630 px**. Ela identifica a marca **JkDeV**, o título **Landing Page Barber** e o caráter de **Projeto educacional**. É uma ilustração gerada com IA para apresentar o projeto, não uma captura literal da interface nem um trabalho entregue a um cliente.

O `index.html` define título, descrição, URL, imagem e texto alternativo em Open Graph, além do cartão `summary_large_image` para redes que utilizam Twitter Cards. As URLs são absolutas e apontam para a demonstração no GitHub Pages. A imagem só ficará acessível por essas URLs depois da publicação; redes sociais podem manter prévias antigas em cache.

## Estado atual e limitações

- Os textos provisórios (`Lorem ipsum`) das seções **Sobre** e **Serviços** foram substituídos por conteúdo demonstrativo em português, sem apresentar a barbearia fictícia como um estabelecimento real.
- Os seis links antes fictícios (`#`) foram substituídos por GitHub, LinkedIn e e-mail do autor, com nomes acessíveis. Esses contatos pertencem ao desenvolvedor, **não à barbearia demonstrativa**.
- Os dois CTAs que anteriormente simulavam agendamento agora navegam para a seção **Serviços**, sem abrir um WhatsApp fictício.
- O atalho flutuante de WhatsApp fictício foi retirado; **não há um sistema real de agendamento**.
- Os três preços ilustrativos são apresentados como etiquetas informativas (`<span class="haircut-price">`), sem simular botões ou agendamento real.
- O mapa incorporado foi mantido como demonstração técnica, configurado para uma visão geral ilustrativa do Brasil, sem marcador intencional de estabelecimento ou endereço de atendimento. O autor confirmou em testes manuais no navegador que o mapa carrega sem destacar um local comercial específico e que a seção permanece organizada em 360 px.
- O indicador de foco para navegação por teclado foi corrigido anteriormente. Os textos brancos em superfícies de vermelho principal agora utilizam um tom de maior contraste; uma auditoria completa de acessibilidade ainda é necessária.
- Foram incluídas dimensões intrínsecas para imagens e `loading="lazy"` nos elementos visuais abaixo da primeira tela, buscando reservar proporções e evitar carregar imagens fora de vista prematuramente; **não há métricas de desempenho pré e pós-alteração**.
- O HTML contém metadados básicos de SEO, URL canônica e uma prévia social específica, documentada acima. A aparência final do cartão depende da rede social e de seu cache.
- As imagens SVG de fundo e da seção Sobre contêm recursos incorporados relativamente pesados; a conversão/compressão depende de comparação visual e medição e não foi realizada neste pacote.

Esses pontos estão documentados para diferenciar a demonstração educacional de um produto pronto para uso comercial.

## Autor

**Cleverson Lemes | JkDeV**  
[Perfil do GitHub](https://github.com/JkDeV31) · [LinkedIn](https://www.linkedin.com/in/cleverson-lemes-390a27235/)

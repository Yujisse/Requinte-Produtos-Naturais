# Requinte Produtos Naturais

Website oficial da **Requinte Produtos Naturais**, loja de produtos naturais no bairro Uberaba, Curitiba – PR.

Site profissional, responsivo e otimizado para conversão via WhatsApp, com foco em SEO local, acessibilidade e performance.

## Sobre o projeto

- **Tecnologia:** React + TypeScript + Vite + Tailwind CSS + Lucide React
- **Idioma do conteúdo:** Português (Brasil)
- **Backend:** Não há. Site estático sem banco de dados, autenticação ou sistema de pagamentos.
- **Deploy:** Netlify

## Instalação

```bash
npm install
npm run dev
```

O servidor de desenvolvimento inicia automaticamente.

## Build de produção

```bash
npm run build
```

Os arquivos finais são gerados na pasta `dist/`.

## Como editar as informações da loja

Todas as informações de negócio (nome, endereço, telefone, WhatsApp, horários, categorias, avaliações, FAQ, SEO) estão centralizadas em:

```
src/data/store.ts
```

Altere esse arquivo para atualizar dados em todo o site. Não é necessário editar os componentes individualmente.

## Como substituir imagens

As imagens estão definidas no objeto `images` dentro de `src/data/store.ts`.

### Usar imagens reais da loja

1. Coloque os arquivos em `public/images/` com os nomes esperados:
   - `logo-requinte.png`
   - `fachada-requinte.webp`
   - `hero-produtos.webp`
   - `chas-temperos.webp`
   - `produtos-granel.webp`
   - `pastas-suplementos.webp`
   - `cosmeticos-naturais.webp`
   - `interior-loja.webp`
   - `equipe-requinte.webp`

2. Em `src/data/store.ts`, troque as URLs externas pelos caminhos locais:
   ```ts
   storefront: "/images/fachada-requinte.webp",
   heroProducts: "/images/hero-produtos.webp",
   // ...
   ```

3. Para a galeria (`galleryImages`) e o Instagram (`instagramImages`), substitua as URLs pelos caminhos das suas fotos.

As imagens atuais são placeholders de stock (Pexels) e podem ser substituídas a qualquer momento.

## Estrutura do projeto

```
public/
  images/              # Imagens reais da loja (substituir aqui)
  _redirects           # Redirecionamento SPA para Netlify
  _headers             # Cabeçalhos de segurança
  robots.txt           # Directivas para robôs de busca
  favicon.svg          # Favicon em formato SVG (folha)
src/
  components/
    Header.tsx         # Cabeçalho com menu responsivo e acessível
    Hero.tsx           # Seção de abertura com chamada para WhatsApp
    TrustStrip.tsx     # Faixa de destaques (avaliação, variedade, entrega)
    About.tsx          # Sobre a loja com cartões de benefícios
    ProductCategories.tsx  # Grid de categorias com filtros funcionais
    FeaturedProducts.tsx   # Produtos mais procurados (seção verde)
    HowToBuy.tsx       # Passos para comprar
    Advantages.tsx     # Cartões de vantagens
    Gallery.tsx        # Galeria com lightbox acessível
    Reviews.tsx        # Avaliações do Google
    InstagramSection.tsx   # Chamada e grid do Instagram
    Location.tsx       # Endereço, horários e mapa Google
    FAQ.tsx            # Accordion de perguntas frequentes
    Footer.tsx         # Rodapé completo
    WhatsAppButton.tsx # Botão flutuante (desktop)
    MobileBar.tsx      # Barra fixa inferior (mobile)
  data/
    store.ts           # Dados centralizados da loja
  hooks/
    useReveal.ts       # Hook para animações de scroll
  utils/
    whatsapp.ts        # Geração de links do WhatsApp
  styles/
    global.css         # Estilos globais e componentes base
  App.tsx              # Componente raiz com Schema.org
  main.tsx             # Entry point
```

## SEO

- Title e meta description otimizados para busca local
- Dados estruturados Schema.org `Store` (LocalBusiness)
- Open Graph e Twitter Card
- `canonical` definido em `store.ts`
- `robots.txt` com referência ao sitemap
- URLs limpas com anchor links (`#produtos`, `#sobre`, etc.)

### Sitemap

Para gerar o sitemap, crie um arquivo `public/sitemap.xml` com:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://requinteprodutosnaturais.com.br/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Atualize a URL em `store.ts` (`seo.canonical`) e em `public/robots.txt` caso o domínio seja diferente.

## Deploy no Netlify

1. Faça push do projeto para um repositório no GitHub.
2. No Netlify, clique em **Add new site → Import an existing project**.
3. Conecte o repositório do GitHub.
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **Deploy**.

Os arquivos `public/_redirects` e `public/_headers` são aplicados automaticamente.

## Acessibilidade

- HTML semântico com landmarks (`header`, `main`, `footer`, `nav`, `section`)
- Navegação por teclado em menu, accordion, galeria (lightbox) e botões
- `aria-expanded`, `aria-modal`, `aria-label` quando necessário
- Foco visível em todos os elementos interativos
- Contraste de cores conforme WCAG
- `prefers-reduced-motion` respeitado
- Alvos de toque mínimos de 44px

## Segurança

- Headers de segurança no `public/_headers` (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- CSP compatível com Google Fonts, Google Maps iframe, imagens HTTPS e navegação para WhatsApp/Instagram
- Sem `dangerouslySetInnerHTML` em conteúdo de usuário
- Sem tokens, credenciais ou dados de clientes expostos

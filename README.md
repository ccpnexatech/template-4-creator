# Template Profissional para Consultórios e Profissionais Autônomos

Template estático em **HTML + CSS + JavaScript puro**, pronto para GitHub Pages.

## Estrutura

```bash
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/
└── README.md
```

## Como personalizar os dados profissionais

Abra `index.html` e edite:

- Nome do profissional (header, hero e footer).
- Especialização e registro profissional.
- Cidade/região e endereço.
- Telefone e link do WhatsApp (`https://wa.me/...`).
- Título e descrição SEO no `<head>`.

Dica: faça uma busca por `Dra. Mariana Costa`, `CRP 00/123456` e `5511999999999` para atualizar rapidamente.

## Como editar serviços

No bloco `#services` do `index.html`, cada serviço está em um `<article class="card">` com:

- `<h3>` para título
- `<p>` para descrição curta

Você pode duplicar/remover cards conforme necessário.

## Como atualizar depoimentos

No bloco `#testimonials` do `index.html`, cada depoimento está em:

```html
<blockquote class="card testimonial">
  <p>Texto do depoimento</p>
  <cite>— Nome</cite>
</blockquote>
```

Mantenha textos curtos para aparência mais natural.

## Como mudar as cores

As cores ficam em variáveis CSS no topo de `assets/css/style.css`:

```css
:root {
  --color-primary: #1f4e6d;
  --color-secondary: #2f6f6a;
  --color-accent: #e7f0f5;
  --color-bg: #f8fafb;
  --color-text: #1b2530;
  --color-muted: #5d6a74;
}
```

Altere somente esses valores para manter consistência visual.

## Como funciona o formulário sem backend

O formulário em `#contact` é processado por `assets/js/main.js`.
Ao enviar, o script abre o WhatsApp com mensagem pré-preenchida, sem necessidade de servidor backend.

## Deploy no GitHub Pages

1. Suba os arquivos para um repositório no GitHub.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment**, selecione:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (ou `master`), pasta `/root`
4. Salve e aguarde o link público ser gerado.

Pronto: o site ficará publicado como página estática.

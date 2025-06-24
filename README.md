# Plataforma de Conexão Voluntária

## Descrição

A **Plataforma de Conexão Voluntária** é uma aplicação web que conecta voluntários a organizações com necessidades específicas, promovendo ações de impacto social. Os usuários podem cadastrar necessidades (como doações ou voluntariado) com validação de dados e integração com a API ViaCEP, visualizar todas as necessidades registradas, filtrá-las por tipo de ajuda, pesquisar por palavras-chave, e limpar todos os cadastros armazenados. O projeto possui um design moderno, responsivo e acessível, com um layout limpo, animações suaves, e um botão de limpeza bem integrado.

## Funcionalidades

- **Cadastro de Necessidades**:

  - Formulário para registrar necessidades, incluindo instituição, tipo de ajuda, título, descrição, CEP, endereço (preenchido automaticamente via API ViaCEP), e contato.
  - Validação de campos obrigatórios, e-mail/telefone, e CEP (8 dígitos).
  - Armazenamento persistente no `localStorage` com um ID único por necessidade.
  - Feedback visual com mensagens de sucesso ou erro no DOM.

- **Visualização de Necessidades**:

  - Exibição de todas as necessidades em cards, com título, instituição, tipo de ajuda, descrição, endereço, e contato.
  - Filtro por tipo de ajuda (Educação, Saúde, Meio Ambiente, etc.).
  - Pesquisa por palavra-chave no título ou descrição.
  - Botão "Limpar Necessidades" para remover todos os cadastros do `localStorage`, com feedback visual no DOM por 3 segundos.
  - Mensagem de fallback quando não há resultados.

- **Design Moderno**:

  - Interface com gradientes vibrantes, sombras suaves, transições em botões e cards, e tipografia limpa (fonte Inter).
  - Layout responsivo para desktops e dispositivos móveis, com o botão de limpeza posicionado abaixo dos campos de filtro e pesquisa.
  - Footer fixado na parte inferior da tela, mesmo em páginas com pouco conteúdo.

- **Integração com API**:

  - Consulta automática de endereços via API ViaCEP ao preencher o CEP no formulário.

## Estrutura do Projeto

```
/projeto
  /css
    styles.css          # Estilos globais com design moderno e responsivo
  /js
    cadastro.js         # Lógica para validação, integração com ViaCEP e armazenamento no localStorage
    visualizacao.js     # Lógica para exibição, filtro, pesquisa e limpeza de necessidades
  index.html            # Página inicial com links para cadastro e visualização
  cadastro.html         # Página para cadastrar necessidades
  visualizacao.html     # Página para visualizar, filtrar e limpar necessidades
  README.md             # Documentação do projeto
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização com flexbox, grid, gradientes, sombras, e animações.
- **JavaScript**: Lógica de validação, integração com API, e manipulação do `localStorage`.
- **API ViaCEP**: Consulta de endereços a partir do CEP.
- **Google Fonts**: Fonte Inter para tipografia moderna.


. **Teste as funcionalidades**:

   - Na página inicial (`index.html`), clique nos botões para acessar o cadastro ou visualização.
   - Em `cadastro.html`, preencha o formulário (use um CEP válido, ex.: `01001000`) e cadastre uma necessidade.
   - Em `visualizacao.html`, use o filtro por tipo de ajuda, a pesquisa por palavra-chave, ou o botão "Limpar Necessidades" para explorar ou resetar os dados.
   - Verifique o `localStorage` (F12 &gt; Application &gt; Local Storage) para confirmar os dados salvos na chave `necessidades`.


## Estilização

- **Header**: Gradiente vibrante (`#6b48ff` a `#00ddeb`), com navegação clara e links com efeito hover.
- **Main**: Conteúdo centralizado em cards ou formulários com sombras suaves e bordas arredondadas.
- **Botões**: Estilo moderno com fundo roxo (ou vermelho para limpar), transições de escala, e bordas arredondadas. O botão "Limpar Necessidades" é posicionado abaixo dos campos de filtro e pesquisa para melhor alinhamento.
- **Cards**: Exibição em grid responsivo, com animação de elevação no hover.
- **Footer**: Fixado na parte inferior com fundo escuro e texto branco.
- **Responsividade**: Layout ajustado para telas pequenas, com navegação, filtros, e botão de limpeza empilhados vertically.


## Licença

© 2025 Plataforma de Conexão Voluntária. Todos os direitos reservados.
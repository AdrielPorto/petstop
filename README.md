# PetStop

> Sistema de Monitoramento de Pontos de Hidratação e Alimentação dos animais em vulnerabilidade urbana.

![Banner](./public/images/banner.png)

PetStop é uma plataforma desenvolvida para que voluntários e organizações possam cadastrar, monitorar e gerenciar pontos de alimentação e hidratação de animais em situação de rua. Através do sistema, é possível encontrar locais abastecidos no mapa, contribuindo para que esses animais recebam os cuidados essenciais para seu bem-estar.

## Funcionalidades

- **Mapeamento de Pontos**: Visualize no mapa pontos de água e comida para pets de rua.
- **Cadastro Simples**: Registre novos pontos preenchendo as informações, como endereço, descrição, contato e foto.
- **Geolocalização Integrada**: Integração com API do OpenStreetMap (Nominatim) para auto-preenchimento de endereços ao clicar no mapa.
- **Tipos de Ponto**: Classifique o ponto como apenas hidratação, apenas alimentação ou ambos.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript Vanilla, Leaflet (Mapas).
- **Backend**: Node.js, Express.
- **Template Engine**: Handlebars (hbs).
- **Banco de Dados**: SQLite (com `sqlite-async`).

## Início Rápido

Siga as instruções abaixo para rodar o projeto localmente na sua máquina.

### Pré-requisitos

- Node.js (versão 14+ sugerida)
- npm ou yarn

### Instalação

1. Clone o repositório ou baixe o projeto:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd petstop
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Executando a Aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run start
```

Acesse no navegador: `http://localhost:5500`

## Estrutura do Banco de Dados

A aplicação utiliza o **SQLite** e o banco é inicializado automaticamente na primeira execução através do `src/database/db.js`.

A tabela principal é `stops` com campos para latitude, longitude, endereço completo, foto, e tipo de abastecimento.

## Status do Projeto

🚧 Este projeto está em construção. Ainda está em fase de desenvolvimento e aprimoramento.

## Licença

Este projeto é disponibilizado sob a licença [MIT](LICENSE).

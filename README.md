# movsh

Interface de linha de comando para consulta de filmes utilizando a API do The Movie Database (TMDB).

## Pré-requisitos

* Node.js (versão 18 ou superior)
* npm (gerenciador de pacotes do Node)
* Chave de API do TMDB (v3 auth)

## Instalação

1. Clone o repositório ou baixe os arquivos.
2. No diretório raiz, instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo chamado `.env` na raiz do projeto e adicione sua chave de API:

```text
TMDB_API_KEY=sua_chave_aqui
```

## Uso

A ferramenta utiliza o argumento `--tipo` para filtrar as listagens.

```bash
node src/index.js --tipo [opção]
```

### Opções disponíveis:

* `em-cartaz`: Lista filmes que estão sendo exibidos nos cinemas.
* `popular`: Lista os filmes mais populares atualmente.
* `bem-avaliados`: Lista os filmes com as melhores notas da crítica.
* `futuros`: Lista filmes com lançamento próximo.

### Exemplo de comando:

```bash
node src/index.js --tipo popular
```

## Estrutura do projeto

* `src/cli/`: Lógica de captura e validação de argumentos de linha de comando.
* `src/services/`: Integração e chamadas HTTP para a API externa.
* `src/utils/`: Utilitários para saída de dados e logs.
* `src/index.js`: Ponto de entrada da aplicação.

## Licença

Este projeto é distribuído sob os termos da Licença MIT. 

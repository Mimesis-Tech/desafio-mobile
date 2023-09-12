   <h1 align="center">Huddle</h1>

Um aplicativo mobile desenvolvido com Expo que consome os dados da API TMDB para listar filmes. Este projeto utiliza axios para fazer as chamadas à API, TypeScript para tipagem estática, styled-components para estilização, dotenv para variáveis de ambiente e expo-font para gerenciamento de fontes.

## Imagens do Projeto

Aqui estão algumas capturas de tela do aplicativo:

| Tela Inicial | Detalhes do Filme |
| ------------ | ----------------- |

|
<img src="../screenshots/tela-inicial.png" width="160px" /> | <img src="../screenshots/detalhes-do-filme.png" width="160px" /> |

## Tecnologias Utilizadas

Alguns recursos utilizados para implementação do huddle.

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Expo font](https://docs.expo.dev/versions/latest/sdk/font/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjwmICoBhDxARIsABXkXlLbvFtVRm5bU8Qevth-5dIPPv0h17ICOoz8nntYiwqCjFn29MRA5QcaAlXTEALw_wcB)

## Pré-requisitos

Antes de começar, certifique-se de ter o ambiente Expo configurado e o Node.js instalado em sua máquina. Você também precisará de uma chave de API da TMDb.

- [Expo](https://expo.dev/)
- [Node.js](https://nodejs.org/)
- [Chave de API da TMDb](https://www.themoviedb.org/documentation/api)

## Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/Robson-Carvalho/desafio-mobile
```

Navegue até o diretório do projeto:

```bash
cd desafio-mobile
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env.development.local` na raiz do projeto e adicione sua chave de API TMDB:

```env
TMDB_API_KEY=Sua_Chave_API_TMDB
```

Inicie o projeto:

```bash
npm start
```

Você pode usar um emulador ou um dispositivo físico para testar o aplicativo Depois de concluir com sucesso o passo a passo descrito, caso tenha um emulador android configurado no seu sistema, após iniciar o projeto, poderá pressionar a letra `a` do seu teclado para que o aplicativo seja executado no emulador.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias para este projeto. Basta seguir estas etapas:

- Faça um fork do projeto.
- Crie uma nova branch com a sua feature: `git checkout -b minha-feature`
- Faça commit das suas mudanças: `git commit -m 'Adiciona nova feature'`
- Faça push para a branch: `git push origin minha-feature`
- Abra um `pull request` na branch principal.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](../LICENSE) para obter detalhes.

## Autor

Feito com 💜 por [Robson Carvalho](https://portfolio-robson-carvalho.vercel.app/) 👋

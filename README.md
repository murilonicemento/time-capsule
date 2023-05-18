# Cápsula do Tempo

Este é um projeto de capsula do tempo para armazenar recordações de momentos importantes em sua carreira. Ele permite que você adicione eventos e detalhes relacionados a cada um deles, criando uma visualização cronológica dos marcos profissionais que você deseja registrar.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- **NextJS**: um framework React para criação de aplicativos web do lado do cliente.
- **NextAuth**: uma biblioteca para autenticação de usuários em aplicativos NextJS.
- **ReactJS**: uma biblioteca JavaScript para construção de interfaces de usuário.
- **ReactNative**: um framework para desenvolvimento de aplicativos móveis multiplataforma.
- **NodeJS**: um ambiente de execução JavaScript assíncrono baseado no motor V8 do Chrome.
- **Prisma**: uma camada de acesso a dados ORM (Object-Relational Mapping) para bancos de dados.
- **Zod**: uma biblioteca de validação de dados altamente eficiente e fácil de usar.
- **TailwindCSS**: um framework CSS utilitário para criação de interfaces responsivas e personalizáveis.
- **NativeWind**: um conjunto de utilitários CSS para o desenvolvimento de aplicativos React Native.
- **Expo Go**: um cliente para executar e testar aplicativos React Native usando o Expo development tools.
- **Fastify**: um framework web rápido e leve para Node.js.
- **ESLint**: uma ferramenta de análise de código estática para identificar problemas e padronizar o código.
- **TypeScript**: um superconjunto de JavaScript que adiciona tipagem estática opcional.
- **SQLite**: um sistema de gerenciamento de banco de dados relacional leve e autônomo.

## Funcionalidades

- **Autenticação de Usuário**: o NextAuth é usado para autenticar usuários no aplicativo, permitindo que cada usuário tenha sua própria linha do tempo personalizada.
- **Adicionar Eventos**: os usuários podem adicionar eventos à linha do tempo, fornecendo detalhes como título, descrição, data e local.
- **Editar e Excluir Eventos**: os usuários podem editar ou excluir eventos existentes em sua linha do tempo.
- **Visualização Cronológica**: os eventos são exibidos em uma visualização cronológica, permitindo que os usuários vejam facilmente a ordem em que ocorreram.

## Configuração e Execução do Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone o repositório do projeto.

3. Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências:

```bash
npm install
```

4. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente, fornecendo os valores apropriados:

```makefile
NEXTAUTH_SECRET=
DATABASE_URL=
```

5. Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o aplicativo em seu navegador em http://localhost:3000.

## Contribuição

Se você deseja contribuir para o projeto, siga as instruções abaixo:

1. Faça um fork do repositório:

2. Clone o repositório forkado:

```bash
git clone https://github.com/murilonicemento/time-capsule.git
```

3. Crie uma branch para a sua contribuição:

```bash
git checkout -b https://github.com/murilonicemento/time-capsule.git
```

4. Faça as alterações desejadas e faça commit das suas alterações:

```bash
git add .
git commit -m "Minha contribuição"
```

5. Faça um push das suas alterações para o repositório forkado:

```bash
git push origin minha-contribuicao
```

6. Abra um pull request no repositório original.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

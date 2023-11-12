// .env
- Arquivo criado para definir variáveis de ambiente que não irão ao git
- Contém variáveis de conexão com o MySQL Server e a porta de acesso ao Server

// .env.example
- É um "Gabarito" que vai ao git contendo as variáveis que serão necessárias no arquivo .env, porém, sem seus valores

// Estrutura
- Server
    - Código para criação do servidor
- App
    - Código de criação do nosso app
- Router
    - Arquivo que irá conter todas nossas rotas e seus métodos de acesso
- Models
    - Arquivos relacionados ao banco de dados
    - Cada tabela do nosso database vai ter um arquivo model separado
- Controllers
    - Códigos em que armazenará as funções que serão utilizadas nos callbacks das rotas
    - Funções que farão validações e trabalharão o código
    - Criação foi necessária pois a função do router é apenas criar as rotas, e não trabalhar o código
# Template de arquitetura front-end

Esse repositório é destinado a um template de arquitetura padrão para a Empresa Junior de Engenharia de Computação.

O template visa organizar e direcionar a codificação de projetos front-end, a fim de melhorar a produtividade e organização dentro da empresa.

#  A arquitetura

A arquiterua é composta por diversas pastas, arquivos, bibliotecas e nomeações específicas para arquivos. 

## Arquitetura de pastas e arquivos

- `.env` e `.env.example`: Dizem respeito aos arquivos que contém as variaveis de ambiente. O segundo arquivo serve apenas de exemplo para o primeiro, pois este não sobe para o repositório;
  
- `public/`: pasta que contém os arquivos públicos, como o ícone da página, entre outros;
  
- `src/`: pasta que contém todos os arquivos de código do projeto. É nessa pasta que está toda a lógica do layout.
  
     - `src/data/`: Essa pasta guarda os hooks, serviços, configurações e utilitários que serão utilizados no projeto:
       
        - Os hooks devem ser criados na pasta `src/data/hooks/` e devem iniciar com o nome `use` seguido do nome do hook com o padrão ***Camel Case***:
            - ex: `useApi.js`, `useGet.js`;
              
        - Os serviços devem ser criados na pasta `src/data/services/` e devem iniciar com o nome do serviço seguido por `.service`:
            - ex: `api.service.js`;
              
        - A pasta `src/data/store/` guarda arquivos de configuração, arquivos de dados e outros diversos arquivos que não se encaixam em outros módulos da aquitetura. O nome do arquivo segue apenas o ***Camel Case*** iniciando com letra minúscula:
            - ex: `config.js`;
              
        - A pasta `src/data/utils/` guarda arquivos de utilitários que serão utilizados no projeto. Os nomes dos arquivos devem iniciar com o nome da util seguido de `.util` para indicar que é uma *util*:
            - ex: `common.util.js`
                - Obs: utilitários de uso comum devem ser feitos dentro do arquivo `src/data/utils/common.util.js`;
  
    - `src/pages/`: Essa pasta abarca todas as paǵinas que o projeto terá:
      
        - Nesta pasta, para criar uma página é necessário criar uma pasta, começando com letra maiúscula e seguindo o padrão **Camel Case***, com o nome da página que será criada. Dentro dessa pasta criada é necessário ter dois arquivos e uma pasta:
          
            - `src/pages/{Página}/components/`: é a pasta onde vão ficar os componentes específicos dessa página;
              
            - `src/pages/{Página}/index.jsx`: é o arquivos que irá conter o componente da página;
              
            - `src/pages/{Página}/styles.js` : é o arquivo que irá conter toda a estilização da página;

    - `src/router/`: Essa pasta contém os arquivos que fazem a lógica de roteamento do projeto:
      
        - `src/router/routes.jsx`: esse arquivo contém as rotas e os componentes que essas rotas geram em um array.
          
        - `src/router/PrivateRouter.jsx`: é um componente especial dentro do contexto do projeto. Ele controla as rotas, adicionando privacidade, se necessário, às rotas.
          
        - `src/router/routes.jsx`: é o arquivo que contém o objeto de rotas propriamente dito. É esse arquivo que é utilizado para gerar o roteamento;
   
    - `src/ui/`: Essa pasca armazena todos os componentes de estilização, desde a componentes gerais, até a temas inteiros.
      
        - `src/ui/components/`: Essa pasta armazena os componentes gerais da aplicação. Componentes esses que são utilizados em diversas telas. Aqui deve-se seguir o mesmo padrão encontrado na pasta `/src/pages/`, com exceção do arquivo `index.js`, que terá o mesmo nome da pasta, mas com a extensão. É importante também, dentro do arquivo do componente a ***exportação não ser default***:
            - ex:
            ```
                -NavBar
                    -components/
                    NavBar.jsx
                    styles.js
            ```

        - `src/ui/styles/`: Essa pasta armazena os arquivos de estilização geral. Não tem restrição para nomes dos arquivos aqui.
          
        - `src/ui/themes/`: Essa pasta armazena os arquivos de tema do ***material-ui***. É possível criar um tipo de tema diferente no mesmo padrão do arquivo e importá-lo para o `main.jsx`. Adendo: é possível, com isso, criar temas dark e light;
  
    - `src/App.jsx`: Aqui é o esqueleto padrão da aplicação, todas as páginas do projeto serão renderizadas nesse arquivo, onde se encontra o componente `<Outlet />`.
      
    - `src/main.jsx`: Aqui está a lógica de renderização da aplicação. O componente `<ThemeProvider />` é o componente que cuida de aplicar o tema do ***material-ui*** ao projeto.

Os demais arquivos e pastas dizem respeito ao layout padrão do **react + vite**.

Dentro da pasta `src/` existem outros arquivos `README.md` que explicam o que cada pasta e arquivo é no contexto da arquitetura.

É importante ressaltar que os arquivos devem seguir o padrão ***Camel Case***, iniciando com letra minúscula ( no caso de arquivos de configuração, hook, services, etc. ), ou iniciando com letra maiúscula ( no caso de arquivos de páginas e componentes);

# Rodando em sua máquina

Para rodar em sua máquina, o primeiro passo é baixar as dependências:

- `yarn` ou `npm install`

Depois disso copie o arquivo `.env.example` para um novo arquito `.env` e edite as informações de acordo com o seu ambiente.

- `cp .env.example .env`

Após isso, execute o script de inicialização ( que pode ser encontrado no arquivo `package.json`).

- `yarn dev` ou `npm run dev` 

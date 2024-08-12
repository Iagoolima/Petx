# Projeto Petx - Web

Este projeto é uma aplicação desenvolvida com as tecnologias modernas Next.js e React, além de outras bibliotecas populares, para construir interfaces web responsivas e de alta performance.


## Tecnologias Utilizadas

- **Node.js**: v20.12.0
- **Next.js**: 14.2.3
- **React**: 18


## Estrutura do Projeto

O projeto segue as melhores práticas de desenvolvimento, adotando o Design Atomic para garantir uma arquitetura de componentes modular e reutilizável. A estrutura foi planejada para facilitar a manutenção futura e promover a escalabilidade da aplicação. 

A abordagem de Design Atomic divide a interface em cinco níveis hierárquicos de componentes:

1. **Átomos**: Os menores blocos de construção, como botões, inputs e ícones.
2. **Moléculas**: Combinações de átomos que formam componentes mais complexos, como campos de formulário ou cartões de informação.
3. **Organismos**: Seções independentes da interface, como cabeçalhos ou rodapés, compostos por moléculas e átomos.
4. **Templates**: Layouts que organizam organismos e definem a estrutura da página.
5. **Páginas**: Instâncias específicas dos templates com dados e conteúdo reais.


## Scripts Disponíveis

- **`dev`**: Inicia o servidor de desenvolvimento local.
- **`devip`**: Inicia o servidor de desenvolvimento local com um IP específico.
- **`build`**: Compila a aplicação para produção.
- **`start`**: Inicia a aplicação em modo de produção.
- **`format`**: Formata o código utilizando Prettier.

## Instalação

Para começar a trabalhar com o projeto, siga estas etapas:

1. **Instale as dependências**:
    ```bash
    npm install
    ```

2. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000) por padrão.
# WEBDEV - Twitter Bootstrap 4

Projeto de apoio para aula de Bootstrap para alunos da disciplina de Frameworks Frontend.

### Objetivos

- Apresentar o Bootstrap v4
- A partir de um estudo de caso recriar a página inicial de maneira simples
- Demonstrar utilização das grids, layout, forms e principais componentes
- Criar página secundária no estudo de caso
- Analisar código desenvolvido e possibilidades de melhoria
- Introdução ao Bower
- Instalar dependëncias via bower
- Criar compoonentes prõprios com bower
- Introdução ao SASS
- Recursos SASS com SCSS
- Customizar Bootstrap com SASS
- Implementação do SASS no estudo de caso em códigos próprios
- Introdução ao Grunt
- Apresentação das Ferramentas do Grunt
- Implementação do Grunt no Estudo de Caso

# Pré-Instalação
No Windows, utilize um terminal de sua escolha mas recomendo o Node.js command prompt
```
npm config set registry http://registry.npmjs.org
npm install -g bower
npm install -g grunt
```

# Instalação
```
git clone https://github.com/eduardobona/webdev-twbs.git
cd webdev-twbs
bower install
npm install
```

# Atividades Aula 1
- Com base no código-fonte entregue deixar a página inicial o mais próximo do site http://volvocars.com.br
- Com o código da página inicial já desenvolvido (ou quase), criar uma outra página chamada visao.html que se aproxime desta URL http://www.volvocars.com/br/sobre/nossas-historias/visao-2020 e você não precisa se precoupar neste momento com os cídeos. Pode trabalhar com imagens no lugar deles.

# Atividades Aula 2
Com base no código desenvolvido na aula anterior e no material e apresentação SASS apresentado em sala de aula:

- Faça um novo clone do projeto base
- Inclua o css e atualize a página inicial com a parte refente aos modelos de carros.
- Inclua o css e o arquivo visao.html referente a página Sobre > Visão 2020 do site oficial da Volto
- Reescreva seu código em SCSS ou SASS de modo a padronizar seu código legado com o novo código base que foi criado com SASS
- Na medida do possível e conforme seu entendimento, "componentize" ou "modularize" o máximo seus estilos criados obtendo uma estrutura altamente desaclopada e reaproveitável

Ao término da atividade, envie um arquivo zipado sem a pasta node_modules e sem a pasta bower_components para o email pos@eduardobona.com,br com o assunto "Atividade Aula 2 Out/2016 - [COLOQUE_SEU_NOME]". Se o trabalho for feito em equipe cada integrante deve mandar email separadamente.

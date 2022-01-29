
# Git e GitHub

1. Trabalhar com o **GIT** sempre tem 3 estágios, o primeiro é a **WORKING TREE**, é aqui que você trabalha e é livre, o segundo estágio é o **STAGE**, aqui você vai estacionando "stageando" as modificações para dar **Commit** e ele perpetuar isso.

2. GIT é um rastreador de texto, e não de arquivos, e por isso pastas não são rastreadas.

3. Sempre organize o seu GIT, os seus Commits, suas Branches e seus Merges.

4. Existe a possibilidade de passar um repositório Subversion para GIT.

5. Não utilize o GIT para armazenar fotos, pois o GIT não é capaz de fazer uma boa gestão de arquivos deste tipo, pois arquivos deste tipo são binarios e o GIT toda vez que tiver uma alteração nele vai salvar o arquivo inteiro novamente no histórico, pensando em um arquivo de 200 Mb com 5 Commits o seu repositório vai estar pesando 1 Gb. (Use o GIT LFS para Isso)

6. Para limpar um repositório GIT que já tem vários Commits você pode usar o BFG Repo-Cleaner.

7. Se você enviou arquivos com senhas, hardcoded de coisas importantes em um Commit, você precisa usar o vídeo (https://youtu.be/6OokP-NE49k?t=1864) para deletar eles.

## O Começo de tudo

#### Contas

- Como criar uma conta no GitHub.

- Como criar e linkar uma chave SSH.

#### Baixando e Instalando

- Como Baixar o Git

- Como Atualizar o Git

#### Iniciando Repositórios

- Como criar um repositório no local (git init)

- Como crair um repositório no GitHub (git clone)

+ Como clonar o repositório de outra pessoa (git clone)

### Comandos Básicos

- git add [. * ou nome do arquivo]

- git commit -m "Mensagem"

- git log

- git status

### Criação de Branches

- git branch

- git branch [nome]

- git Branch -d (e -D) [Nome]

- git Branch -m [Nome]  [NovoNome]

- git Checkout [nome]

- git Merge [nome]

### Conexão Remoto vs Local

- git Push

- git Pull

- git Switch

## Comandos Avançados

### Correção de Commits

- git reset --HARD HEAD~Numero

- git reset --SOFT HEAD~Numero

- git rebase -i HEAD~Numero (Forma Oficial)

- git rebase [nome da branch] (Merge uma Branch)

- git reset -- (Tira tudo do Stage Git Add)

- git reset -- [nome do arquivo] (Tira ele do Stage)

- git add -p (depois vai no s)

### Visualização do Stage Git

- git diff --staged

### O Verdadeiro Banco de Dados do Git

- git reflog

- git gb (Deleta o Reflog)

## Procedimentos Complexos

### Recuperando Arquivos Deletados

- git reglog

- git checkout -b [nomealeatorioparabranch] [id do commit]

- git checkout main

- git rebase [nomealeatorioparabranch]

- git branch -d [nomealeatorioparabranch]

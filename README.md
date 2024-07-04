
# cypress-web-ci

Este repositório GitHub contém um projeto de integração contínua (CI) para testes de Cypress. A configuração utiliza o GitHub Actions para executar os testes automaticamente após cada push para o repositório. ✅

## Requisitos
Uma conta GitHub

Uma conta Cypress.io (opcional, para relatórios aprimorados)

Um repositório GitHub contendo testes de Cypress

## Instalação
1.Crie um fork do repositório cypress-web-ci em sua conta GitHub.

2.Acesse o seu fork e navegue até a seção "Actions".

3.Clique no botão "New workflow".

4.Selecione o arquivo main.yml do repositório cypress-web-ci como modelo de workflow.

5.Personalize o workflow de acordo com suas necessidades, por exemplo, definindo o nome do
workflow, os gatilhos e as variáveis de ambiente.

7.Clique no botão "Start workflow" para iniciar o workflow pela primeira vez.

## Configuração

O arquivo main.yml contém o workflow do CI. Você pode personalizar este arquivo para atender às suas necessidades específicas. As seguintes opções podem ser configuradas:

Nome do workflow: O nome do workflow que será exibido no GitHub Actions.

Gatilhos: Os eventos que acionarão a execução do workflow. Por exemplo, você pode configurar o workflow para ser executado após cada push para o branch principal ou após cada pull request.

Variáveis de ambiente: As variáveis de ambiente que serão disponibilizadas para os testes de Cypress. Por exemplo, você pode definir uma variável de ambiente para armazenar a URL do seu aplicativo web.

## Executando testes

Os testes de Cypress serão executados automaticamente sempre que o workflow for acionado. Você pode visualizar o resultado dos testes na página "Actions" do seu repositório GitHub.




Feature: Cadastro

Como usuário, desejo realizar um Cadastro
Para que possa acessar o sistema

Scenario: Cadastro de usuário no site
    Given Que acesso o site
    When Informar meus dados
    And Clicar em salvar
    Then Deve ser cadastrado com sucesso

    #Given -> Contexto - Dado que
    #When -> ação executada - Quando
    #Then - > resultado esperado - Entao
    #And -> continuidade do passo anterior - E
    ##language-pt pra alterar linguagem
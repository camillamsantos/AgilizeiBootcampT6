Feature: Listagem

    Como usuário, desejo acessar a Listagem
    Para que possa visualizar meus dados de cadastro


Scenario: Listagem sem Registros
    Given Que site não possui Registros - WebTable
    When Acessar a Listagem
    Then Devo visualizar a listagem vazia


Scenario: Listagem com Apenas um Registro
    Given Que o site possui apenas um Registro
    When Acessar a listagem
    Then Devo visualizar apenas um registro






    #Given -> Contexto - Dado que
    #When -> ação executada - Quando
    #Then - > resultado esperado - Entao
    #And -> continuidade do passo anterior - E
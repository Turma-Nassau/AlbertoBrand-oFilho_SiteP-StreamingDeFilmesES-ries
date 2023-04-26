# :moneybag: Planner Financeiro Pessoal :moneybag:

Este aplicativo ajudará as pessoas a entender e gerenciar melhor suas vidas financeiras, melhorar o bem-estar e reduzir o estresse financeiro. Os usuários poderão adicionar e gerenciar suas receitas e despesas, criar orçamentos e visualizar seu histórico financeiro.

## Funcionalidades :pushpin:

- Adicione Despesas
- Crie diferentes categorias de orçamentos
- Veja o historico financeiro
- Verifique o saldo geral da conta
- Defina metas financeiras
- Notificar o usuario sobre os limites

## Roadmap :pushpin:

1. Iniciar desenvolvimento

2. Adicionar principais funcionalidades

3. Separar transações baseada nos bancos

## :hammer_and_wrench: Stack utilizada

**Front-end:** React, TailwindCSS

**Back-end:** Node, Express, PostgreSQL

## :man_technologist: Autores

- [@BettoBrandao](https://github.com/BettoBrandao)

## :receipt: Mockup/Storyboard

- [Figma](https://www.figma.com/file/Fx2X5515V87p7mndj0KT1w/Diagrama---Planner-Financeiro?node-id=0-1&t=K28sDhRZgtjI4Ekj-0) In Progress

## Estrutura de Dados

- Usuario
  - Possibilidade de Fazer logins e Cadastros.

```s
    Usuario {
        id_user:1
        nome_user:"Nome Usuario"
        sobrenome_user:"Sobrenome Usuario"
        email:"examplo@examplo.com"
        senha:"123LKhjya"
        saldo_total:12354.55
    }
```

- Conta
  - Adicionar contas bancarias para salvar saldos.

```s
    Conta{
        id_conta:01
        nome_banco:"NuBank"
        saldo_banco:5425.40
        id_user:1
    }
```

- Despesas
  - Adicionar despesas e relacionar elas com contas bancarias criadas.

```s
    Despesas{
        id_despesa:0001
        nome_despesa:"Hot-Dog"
        tipo_despesa:"Alimentos"
        valor_despesa:12.99
        id_conta:01
        id_user:1
    }
```

- Renda
  - Adicionar renda e relacionar com contas bancarias criadas.

```s
    Renda{
        id_renda:00001
        nome_renda:"Salario Site"
        tipo_renda:"Salario"
        valor_renda:3200.00
        id_conta:01
        id_user:1
    }
```

- Orçamentos
  - Criar orçamentos com limites especificos e avisar quando estiver perto de esgotar.

```s
    Orçamentos{
        id_orcamento:000001
        nome_orcamento:"Entrerterimento"
        limite_orcamento:700.00
        valor_orcamento:50.00
        categoria_orcamento:"Entrerterimento"
        id_user:1
    }
```

- Categorias
  - Criar Categorias personalizadas para despesas e renda.

```s
    Categorias{
        id_categoria:10001
        nome_categoria:"Entrerterimento"
        tipo_categoria:"Despesa"
        id_user:1
    }
```

- Obejetivo
  - Criar objetivos financeiros, com foco em guardar dinheiro para futuros planejamentos.

```s
    Objetivo{
        id_objetivo:10024
        nome_objetivo:"Carro"
        valortotal_objetivo:25000.00
        valor_objetivo:5768.00
        id_user:1
    }
```

---
title: Aprendizagem Automática (Machine Learning)
excerpt: "Introdução à conceitos de Aprendizagem Automática."
---

# T02 - Machine Learning

A aprendizagem automática é a ciência de programar computadores para que possam aprender a partir de dados. Podem ser classificados por

- Paradigma de aprendizagem;
- Intuição matemática;
- Tipo de problema que resolvem.

![image.png](/assets/images/aprendizagem-automatica/image0.png)

# 1. Tipos de Modelos de Aprendizagem Automática

## 1.1. Paradigma de Aprendizagem

- **Aprendizagem Supervisionada:** Aprende a partir de um conjunto de dados onde as respostas já são conhecidas.
    - Identificação de e-mails como spam
- **Aprendizagem Não Supervisionada:** Dado que não possuem respostas desejadas. O modelo tenta encontrar padrões.
    - Estratificação de pacientes / agrupamento de clientes..
- **Aprendizagem Semi-supervisionada:** Utiliza pequena quantidade de dados que possuem a resposta com uma grande quantidade de dados que não possuem.
    - LLM
- **Aprendizagem por Reforço:** O modelo aprende através de recompensas obtidas.
    - Jogos.

## 1.2. Modelo Baseado na Intuição Principal

Distinguem-se pela lógica interna que processam informação.

- **Modelos Geométricos:** Utilizam intuição geometrica, como hiperplanos de separação, transformações lineares e métricas de distância.
    - Ex.: KNN (K-Nearest Neighbour) e Regressão linear.
    
    ![image.png](/assets/images/aprendizagem-automatica/image1.png)
    

- **Modelos Probabilísticos:** Encaram aprendizagem como **redução de incerteza**, utilizando distribuição de probabilidades.
    - Ex.: Naïve Bayes
    
    ![image.png](/assets/images/aprendizagem-automatica/image2.png)
    
- **Modelos Lógicos**: São definidos por expressões lógicas que são facilmente interpretáveis pelo ser humano.
    - Ex.: Árvores de Decisão
        
        ![image.png](/assets/images/aprendizagem-automatica/image3.png)
        

## 1.3. Classificação vs. Regressão

- Classificação: O output é qualitativo ou categórico
    - E-mail: spam ou não spam
    - Tumor: cancerígeno ou não cancerígeno.
- Regressão: O output é quantitativo ou numérico contínuo
    - Prever peso de uma pessoa
    - Prever preço de uma casa

# 2. Introdução à Aprendizagem Supervisionada.

**Prever uma saída com base em entradas,** utilizando um conjunto de dados para o qual as respostas já são conhecidas. Dividem-se em duas principais categorias:

- Classificação
- Regressão

## 2.1 Conceitos e Nomenclatura Fundamental.

- **Instâncias**: objetos de interesse no espaço de dados
    - ex.: e-mails individuais.
- **Rótulos** (Labels): São as respostas desejadas que o modelo deve aprender
    - ex.: classificação “spam”
- **Conjunto de Treino:** Conjunto de instâncias já rotulada, usado para o modelo aprender os padrões
- **Conjunto de Teste**: Dados rotulado que **não foram usados no treino**, servindo para avaliar quão bem o modelo se comporta com dados novos.

## 2.2 Exemplos de Aplicação.

- **Saúde**: Prever diagnósticos de câncer com base em dados do paciente
- **Economia**: Estimar crescimento do PIB usando dados políticos e estruturais
- **E-commerce**: Prever a probabilidade de um cliente comprar algo com base no comportamento de cliques.

## 2.3. Desafios.

- **Complexidade Computacional**
    - Encontrar o modelo “ótimo” é um problema.
- **Quantidade e Qualidade de Dados:**
    - Tarefas simples exigem milhares de exemplos, enquanto tarefas complexas podem exigir milhões.
- **A Maldição da Dimensionalidade:**
    - Quanto maior o número de dimensões (features) mais difícil se torna encontrar padrões úteis.
- **Overfitting vs. Underfitting:**
    - O overfitting ocorre quando o modelo decora o ruído dos dados de treino e falha em generalizar para novos dados
    - O underfitting acontece quando o modelo é simples demais para captar padrões reais.
- **Teorema “No-Free-Lunch“:**
    - Não existe um algoritmo único que seja superior para todos os tipos de problema.
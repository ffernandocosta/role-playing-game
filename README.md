# Role Playing Game
_[Read it in English](#English)_

Role playing game que desenvolvi quando terminei o módulo 7 do curso de JavaScript do [Scrimba](scrimba.com). Eu refiz ele inteiro do zero e implementei uma nova regra no jogo: Cada vez que algum personagem tirar dados iguais, o personagem ganha vida.

## Índice

- [Geral](#geral)
  - [Funções implementadas](#funções-implementadas)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [O que eu aprendi](#o-que-eu-aprendi)
- [Feito por](#feito-por)

## Geral

### Funções implementadas

Os usuários devem ser capazes de:

- Clickar no botão 'Attack' e rolar os dados
- Ver quanto de dano tirou do monstro e quanto de dano sofreu
- Ver quanto de vida ganhou quase tire dados iguais
- Ver a barra de vida ficar mais baixa enquanto toma dano e caso esteja abaixo de 20% de vida, a barra fica vermelha
- Ver a mensagem de fim de jogo correta de acordo com o resultado final de quem foi vencedor

### Screenshot

![Screenshot]()

### Links

- [Live version](https://role-playing-game-sable.vercel.app)

## Meu processo

### Tecnologias Utilizadas

- JavaScript
- Semantic HTML5 markup
- CSS custom properties
- Grid
- Flexbox


### O que eu aprendi

- Classes no JavaScript para criar objetos e sintaxe de 'Constructor functions' que me ajudou a entender melhor o que são Classes
- .reduce method usado nesse projeto para somar o total dos dados tirados e calcular o dano
- 'New' operator para criar nova instância de objetos
- Array() constructor usado nesse projeto para criar uma array de dados
- Ternary operator, uma alternativa para substituir 'if, else' statements
- Import/Export e como separar pedaços de códigos úteis em arquivos separados melhorando a oranização do meu código e projeto

```js
const proudOfThisFunc = () => {
  
  function hasDuplicates(currentDiceScore) {
    const duplicates = [];
    const trackDuplicate = {};

    for(let i = 0; i < currentDiceScore.length; i++){
        const currentDice = currentDiceScore[i]

        trackDuplicate[currentDice] ? duplicates.push(currentDice) : trackDuplicate[currentDice] = true;
    }

    return duplicates.length ? duplicates.reduce((total, currentDuplicate) => total + currentDuplicate) : false;
}
}
```


## Feito por

<div>
  <a href="https://www.linkedin.com/in/ffernando-costa/?locale=en_US" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="My Linkedin profile"></a>
  <a href="https://twitter.com/ffernandodev" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="My twitter profile"</a>
</div>



<div id="English">

_English version_

</div>

# Role Playing Game

This is a project I built after module 7 of [Scrimba's](scrimba.com) JavaScript course. To practice the skills that I learned in this module I decided to code the JavaScript part of this project totally from scratch. I end it up coding a new rule to the game: If you roll equal dice, you gain more health points.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Clickar no botão 'Attack' e rolar os dados
- Ver quanto de dano tirou do monstro e quanto de dano sofreu
- Ver quanto de vida ganhou quase tire dados iguais
- Ver a barra de vida ficar mais baixa enquanto toma dano e caso esteja abaixo de 20% de vida, a barra fica vermelha
- Ver a mensagem de fim de jogo correta de acordo com o resultado final de quem foi vencedor

- Click on 'Attack' button and roll the dices
- See how much damage you dealt/took
- See how many gained health points if rolled dices had duplicates
- See health bar get smaller while taking damage and turn red if health below 20%
- See end game message accordingly of who won the game

### Screenshot

![Screenshot]()

### Links

- [Live version](https://role-playing-game-sable.vercel.app)

## My process

### Built with

- JavaScript
- Semantic HTML5 markup
- CSS custom properties
- Grid
- Flexbox

### What I learned

- JavaScript'Classes used to create objects
- .reduce() method used in this project to return the total sum of all the rolled dices
- 'New' operator to create new instances of objects
- Array() constructor used in this project to create a new array of dices
- Ternary operator used as an alternative to an 'if, else' statement
- Import/Export and how to separate pieces of useful code in different files and have better organization

```js
const proudOfThisFunc = () => {
  
  function hasDuplicates(currentDiceScore) {
    const duplicates = [];
    const trackDuplicate = {};

    for(let i = 0; i < currentDiceScore.length; i++){
        const currentDice = currentDiceScore[i]

        trackDuplicate[currentDice] ? duplicates.push(currentDice) : trackDuplicate[currentDice] = true;
    }

    return duplicates.length ? duplicates.reduce((total, currentDuplicate) => total + currentDuplicate) : false;
}
}
```


## Author

<div>
  <a href="https://www.linkedin.com/in/ffernando-costa/?locale=en_US" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="My Linkedin profile"></a>
  <a href="https://twitter.com/ffernandodev" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="My twitter profile"</a>
</div>

# Animações com CSS

Este README explica conceitos básicos de animação usando CSS, abordando três lições principais: HOVER, TRANSFORM, e TRANSITION.

## Lição 1: HOVER

A pseudo-classe `:hover` é usada para aplicar estilos a um elemento quando o cursor do mouse está sobre ele. Para ativar o elemento com a classe `hover`, use a seguinte sintaxe:

```css
.btn:hover {
  /* Estilos para o estado hover */
}
```

## Lição 2: TRANSFORM

A propriedade `transform` permite alterar a posição, dimensão e rotação de um elemento. As alterações podem incluir:

- `translateY()`: Mover o elemento para cima ou para baixo.
- `translateX()`: Mover o elemento para os lados.

**Nota:** Valores positivos movem o elemento para cima ou para a direita, enquanto valores negativos movem para baixo ou para a esquerda.

## Lição 3: TRANSITION

A propriedade `transition` é usada para definir a transição entre dois estados de um elemento. As propriedades de transição incluem:

- `transition-property`: Define a propriedade a ser animada (exemplo: `transition-property: transform`).
- `transition-duration`: Define a duração da transição (exemplo: `transition-duration: 1s`).
- `transition-timing-function`: Define a curva de aceleração da transição (exemplo: `transition-timing-function: ease`).
  - `ease`: Valor padrão.
  - `ease-in`: Suave no início.
  - `ease-out`: Suave no final.
  - `ease-in-out`: Suave no início e no final.
  - `linear`: Velocidade constante.
- `transition-delay`: Define o atraso antes de iniciar a transição (exemplo: `transition-delay: 0.3s`).

### Sintaxe

É possível definir todos os quatro parâmetros em uma única linha usando a propriedade `transition`, respeitando a ordem:

```css
.btn {
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-in;
  transition-delay: 0.3s;
  /* ou */
  transition: transform 1s ease-in 0.3s;
}
```

### Aplicação a Múltiplas Propriedades

Se houver mais de uma propriedade para a qual você deseja aplicar a mesma transição, ou se deseja aplicar a transição a todas as propriedades de um elemento, use a palavra-chave `all`:

```css
.btn {
  transition-property: all;
}
```

## Lição 3: KEYFRAMES

Para realizar animações mais complexas.

### Sintaxe

```css
@keyframes animationName {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0px);
  }
}
```

0% representa o início da animação, e 100% representa o final.

Para aplicar a animação no elemento desejado colocamos a palavra reservada animation dentro da classe CSS do elemento.

A propriedade `animation` é usada para definir a animação de um elemento. As propriedades de animation incluem:

- `animation-name`: Define os keyframes da propriedade a ser animada (exemplo: `animation-name: slideInLeft`).

- `animation-duration`: Define o tempo que demora para a animação completar um ciclo (exemplo: `animation-duration: 1s`).

- `animation-timing-function`: Define a curva de aceleração para a animação (exemplo: `animation-timing-function: ease-in`).

  - `ease`: Valor padrão.
  - `ease-in`: Suave no início.
  - `ease-out`: Suave no final.
  - `ease-in-out`: Suave no início e no final.
  - `linear`: Velocidade constante.

- `animation-delay`: Define o tempo de espera até a animação ser disparada (exemplo: `animation-delay: 0.2s`).

- `animation-iteration-count`: Define quantos ciclos a animação vai ter (exemplo: `animation-iteration-count: 4`).

- `animation-direction`: Define se a animação irá ocorrer normalmente ou em reverso (exemplo: `animation-direction: reverse`).

- `animation-fill-mode`: Define como a animação irá aplicar os estilos do keyframe definido antes e depois de sua execução (exemplo: `animation-fill-mode: fowards`).
  - `fowards`: Aplica o estilo final quando a animação termina
  - `backwards`: Aplica o estilo final quando a animação começa
  - `both`: Aplica o estilo final quando a animação começa e quando termina
  - `none`: Não faz nada

```css
.btn {
  animation-name: slideInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  /* ou */
  animation: slideInLeft 1s ease-in 0.2s infinite normal none;
}
```

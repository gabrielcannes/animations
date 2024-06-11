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
    transition: transform 1s ease-in 0.3s;
    /* ou */
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: ease-in;
    transition-delay: 0.3s;
}
```

### Aplicação a Múltiplas Propriedades

Se houver mais de uma propriedade para a qual você deseja aplicar a mesma transição, ou se deseja aplicar a transição a todas as propriedades de um elemento, use a palavra-chave `all`:

.btn {
    transition-property: all;
}

Com essas lições, você pode criar animações suaves e interativas usando apenas CSS!

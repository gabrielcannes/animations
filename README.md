# Anotações de Estudos de CSS

Este repositório contém anotações sobre conceitos de CSS, especialmente focados em animações usando CSS.

## Índice

1. [Lição 1: HOVER](#lição-1-hover)
2. [Lição 2: TRANSFORM](#lição-2-transform)

## Lição 1: HOVER

A pseudo-classe `:hover` é usada para ativar o estilo de um elemento quando o usuário passa o mouse sobre ele.

### Exemplo de Uso

```css
.btn:hover {
  /* Estilos aplicados ao elemento quando o mouse está sobre ele */
  color: #fff;
  background-color: #007bff;
}
```

Neste exemplo, a classe `.btn:hover` aplica estilos ao elemento quando ele é "hovered", ou seja, quando o cursor do mouse está sobre ele.

## Lição 2: TRANSFORM

A propriedade `transform` permite aplicar uma transformação a um elemento, como mover, escalar, girar ou distorcer.

### Transformações Comuns

- **translateY()**: Move o elemento verticalmente.
- **translateX()**: Move o elemento horizontalmente.
- **translateZ()**: Move o elemento horizontalmente.

### Exemplo de Uso

```css
/* Mover elemento para cima */
.elemento {
  transform: translateY(-20px);
}

/* Mover elemento para baixo */
.elemento {
  transform: translateY(20px);
}

/* Mover elemento para a direita */
.elemento {
  transform: translateX(20px);
}

/* Mover elemento para a esquerda */
.elemento {
  transform: translateX(-20px);
}
```

### Observações

- Valores positivos movem o elemento para cima ou para a direita.
- Valores negativos movem o elemento para baixo ou para a esquerda.

## Conclusão

Essas são as anotações básicas sobre as pseudo-classes e propriedades de CSS focadas em animações. Compreender e aplicar esses conceitos é fundamental para criar interfaces de usuário interativas e atraentes.

# Guia
## instalar pug
`npm i -g pug`
`npm i -g pug-lint`

## compilar pug

`pug -w ./pug/index.pug -o ./ --pretty`

`--pretty` hace que no se comprima el html

## Glosario

- mb: margin-bottom

### padding vs margin

El padding es interno
El margin es la distancia entre elementos hermanos

## Flex

Si quiero poner dos elementos hermanos uno arriba del otro
y que tenga una separacion lo hago asi: `.flex.flex-col.gap-4`

## git 

`git add .` agrega todos los cambios a la rama actual

`git commit -m"se puso otro bg en la home"` se crea un mensaje explicando los cambios

`git push` eso

# Importar fuentes descargadas

```css
@font-face {
  font-family: 'apodo-de-la-fuente'; /* Nombre que le asignas a la fuente */
  src: url('../fonts/baca.ttf') format('truetype'); /* Ruta relativa a la carpeta de fuentes y formato de la fuente */
}

body {
  font-family: 'apodo-de-la-fuente', sans-serif; /* Utiliza la fuente definida */
}
```

# Usar fuentes de google-fonts

```pug
    link(rel="preconnect" href="https://fonts.googleapis.com")
    link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
    link(href="https://fonts.googleapis.com/css2?family=Bacasime+Antique&family=Calligraffitti&family=Poppins&display=swap" rel="stylesheet")
```

Esto es en el index, o en el template
```pug
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title Mi Proyecto Vanilla
    // Enlace a Tailwind CSS
    link(rel="preconnect" href="https://fonts.googleapis.com")
    link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
    link(href="https://fonts.googleapis.com/css2?family=Bacasime+Antique&family=Calligraffitti&family=Poppins&display=swap" rel="stylesheet")
  body
   //-...cosas
  ```

  En el css lo usamos asi: 
  
```css
  body {
  font-family: 'apodo-de-la-fuente', sans-serif; /* Utiliza la fuente definida */
  font-family: 'Calligraffitti', sans-serif;
}
```
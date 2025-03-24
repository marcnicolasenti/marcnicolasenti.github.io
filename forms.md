# Formularios en HTML

Cuando queremos crear un formulario en HTML, siempre tenemos que usar la etiqueta `<form>`. Si ponemos un botón fuera de un formulario, este no sabrá qué acción tiene que realizar, ya que está “fuera de contexto”. Además, `<form>` es una etiqueta que se comporta como un bloque.

## Formulario 1
```html
<form>
  <p><input type="text" name="nombre" /></p>
  <p><input type="number" name="edad" value="18" min="1" max="120" /></p>
  <p><input type="submit" /></p>
</form>

¿Qué pasa en este formulario?
Los campos <input> son elementos en línea, pero lo recomendable es meterlos dentro de contenedores en bloque como <p> u otras etiquetas semánticas. Las etiquetas <input> son auto-cerradas (unitarias) y para que funcionen correctamente deben tener como mínimo dos atributos: type (que indica el tipo de campo) y name (que es la clave o identificador del campo).
Si no ponemos el atributo type, se asumirá automáticamente que es text. El atributo name es fundamental para poder acceder a los datos del formulario cuando se envía.
También podemos usar placeholder para mostrar un texto guía dentro del campo. En el caso del campo de número, value="18" pone un valor inicial, y con min y max limitamos los valores permitidos.

## Formulario 2
```html
<form>
  <p><input type="password" name="pass" /></p>
  <p><input type="submit" /></p>
</form>

Aquí simplemente pedimos una contraseña. El type="password" hace que lo que se escriba se oculte visualmente (con puntos o asteriscos).




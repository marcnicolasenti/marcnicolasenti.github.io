Formularios en HTML
Cuando queremos crear un formulario en HTML, siempre tenemos que usar la etiqueta <form>. Si ponemos un botón fuera de un formulario, este no sabrá qué acción tiene que realizar, ya que está “fuera de contexto”. Además, <form> es una etiqueta que se comporta como un bloque.

Ejemplo 1 de formulario
html
Copy
Edit
<form>
  <p><input type="text" name="nombre" /></p>
  <p><input type="number" name="edad" value="18" min="1" max="120" /></p>
  <p><input type="submit" /></p>
</form>
¿Qué pasa en este formulario?
Los campos <input> son elementos en línea, pero lo recomendable es meterlos dentro de contenedores en bloque como <p> u otras etiquetas semánticas. Las etiquetas <input> son auto-cerradas (unitarias) y para que funcionen correctamente deben tener como mínimo dos atributos: type (que indica el tipo de campo) y name (que es la clave o identificador del campo).
Si no ponemos el atributo type, se asumirá automáticamente que es text. El atributo name es fundamental para poder acceder a los datos del formulario cuando se envía.
También podemos usar placeholder para mostrar un texto guía dentro del campo. En el caso del campo de número, value="18" pone un valor inicial, y con min y max limitamos los valores permitidos.

Ejemplo 2 de formulario
html
Copy
Edit
<form>
  <p><input type="password" name="pass" /></p>
  <p><input type="submit" /></p>
</form>
Aquí simplemente pedimos una contraseña. El type="password" hace que lo que se escriba se oculte visualmente (con puntos o asteriscos).

Ejemplo 3 de formulario más completo
html
Copy
Edit
<form>
  <p><label for="campo-nombre">Nombre</label><input type="text" name="nombre" id="campo-nombre" /></p>
  <p><label for="campo-contraseña">Contraseña</label><input type="password" name="pass" id="campo-contraseña" /></p>
  <p><input type="date" name="nacimiento" /></p>
  <p><input type="number" name="edad" value="18" min="1" max="120" /></p>
  <p><input type="color" name="favorito" /></p>
  <p>
    <input type="checkbox" name="subscribe" id="subscribe" />
    <label for="subscribe">Suscríbete para recibir un email semanal sobre Ciberseguridad</label>
  </p>
  <p><input type="submit" /></p>
</form>
Explicación del formulario
Cada elemento en una página HTML puede tener un atributo id, que sirve tanto para identificarlo con CSS como para vincularlo con otros elementos.
Por ejemplo, los <label> se pueden asociar a un campo mediante for, que debe coincidir con el id del campo. Esto no solo ayuda a organizar el código, sino que mejora mucho la accesibilidad, ya que los lectores de pantalla pueden decir correctamente qué es cada campo.
En este ejemplo también se usan diferentes tipos de <input> como fechas, colores y casillas de verificación (checkbox).

Extra: línea divisoria en Markdown
Si estamos usando Markdown, una forma sencilla de separar secciones visualmente es escribiendo tres guiones seguidos (---) en una línea en blanco. Esto genera una línea horizontal que organiza mejor el contenido.


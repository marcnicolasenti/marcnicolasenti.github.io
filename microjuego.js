let numero = Math.floor(Math.random() * 100) + 1;
  let contador = 0;
  let max_attempts = 10;

  function compara_numero() {
    const my_num_input = document.getElementById("field-number");
    const submit_input = document.getElementById("field-submit");
    const resultado = document.getElementById("resultado");

    let my_num = Number(my_num_input.value);

    if (my_num_input.value === "") {
      resultado.innerHTML = "<em class='error'>Es obligatorio poner un número</em>";
      return;
    }

    if (my_num < 1 || my_num > 100) {
      resultado.innerHTML = "<em class='error'>El número debe estar entre 1 y 100</em>";
      return;
    }

    contador++;

    if (contador >= max_attempts) {
      resultado.innerHTML = "<em class='error'>El límite de intentos es 10, mala suerte!</em>";
      submit_input.disabled = true;
      return;
    }

    if (my_num > numero) {
      resultado.innerHTML = "<em class='error'>El número es <strong>más pequeño</strong> que " + my_num + "</em>";
      resultado.style.color = "red";
    } else if (my_num < numero) {
      resultado.innerHTML = "<em class='error'>El número es <strong>más grande</strong> que " + my_num + "</em>";
      resultado.style.color = "red";
    } else {
      resultado.innerHTML = "<em class='acierto'>¡OLE! El número era " + my_num + " 🎉</em>";
      resultado.style.color = "green";
      submit_input.disabled = true;
    }

    my_num_input.value = "";
    my_num_input.focus();
  }
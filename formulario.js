document.addEventListener("DOMContentLoaded", () => {
  const name_field = document.getElementById("name-field");
  const birthday_field = document.getElementById("birthday-field");
  const color_field = document.getElementById("color-field");
  const message_field = document.getElementById("message-field");
  const checkbox_field = document.getElementById("checkbox-field");
  const contact_form = document.getElementById("contact-form");

 
  if (checkbox_field) {
    checkbox_field.addEventListener("click", (event) => {
      if (event.target.checked) {
        console.log("Te he robado todo");
      } else {
        console.log("Marca la casilla, no te arrepentirás");
      }
    });
  }


  contact_form.addEventListener("submit", (event) => {
    let send = true;


    if (name_field.value.length <= 2 || name_field.value.length > 32) {
      send = false;
      name_field.style.border = "1px solid red";
    } else {
      name_field.style.border = "1px solid green";
    }

  
    if (birthday_field) {
      const value = birthday_field.value;
      if (value === "" || value.length !== 10) {
        send = false;
        birthday_field.style.border = "1px solid red";
      } else {
        const [year, month, day] = value.split("-").map(Number);
        console.log("Fecha recibida:", year, month, day);

        if (
          isNaN(year) || isNaN(month) || isNaN(day) ||
          year <= 0 || year > 2025 ||
          month <= 0 || month > 12 ||
          day <= 0 || day > 31
        ) {
          send = false;
          birthday_field.style.border = "1px solid red";
        } else {
          birthday_field.style.border = "1px solid green";
        }
      }
    }


    if (color_field && (color_field.value.length !== 7 || color_field.value[0] !== "#")) {
      send = false;
      color_field.style.border = "1px solid red";
    } else if (color_field) {
      color_field.style.border = "1px solid green";
    }


    if (message_field.value.length < 5 || message_field.value.length > 255) {
      send = false;
      message_field.style.border = "1px solid red";
    } else {
    
      message_field.value = message_field.value.replace(/'/g, "\\'");
      message_field.style.border = "1px solid green";
    }

    if (!send) {
      console.log("Formulario con errores. No se ha enviado.");
      event.preventDefault();
    } else {
      console.log("Formulario validado correctamente. ¡Enviando!");
    }
  });
});

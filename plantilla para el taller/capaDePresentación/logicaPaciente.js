const formPaciente = document.getElementById("formPaciente");
const pacienteSelect = document.getElementById("pacienteSelect");
const btnAgregarPaciente = document.getElementById("btnAgregarPaciente");

// habilita/deshabilita el botón según la validez del formulario
formPaciente.addEventListener("input", () => {
  btnAgregarPaciente.disabled = !formPaciente.checkValidity();
});

formPaciente.addEventListener("submit", (e) => {
  e.preventDefault();

  const tipoIdentificacion = document.getElementById("identificacionPaciente").value;
  const identificacion = document.getElementById("numero-identificacionPaciente").value;
  const nombres = document.getElementById("nombresPaciente").value; 
  const apellidos = document.getElementById("apellidosPaciente").value;
  const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
  const genero = generoSeleccionado ? generoSeleccionado.value : null;
  const correoElectronico = document.getElementById("correo-electronico").value;

  const paciente = gestionarPacientes.registrarPaciente(tipoIdentificacion, identificacion, nombres, apellidos, correoElectronico, genero);
  console.log("Paciente registrado:", paciente);
  
  // actualizar select
  const option = document.createElement("option");

  option.value = paciente.id;
  option.textContent = `${paciente.nombres} ${paciente.apellidos}`;
  pacienteSelect.appendChild(option);

  formPaciente.reset();
  btnAgregarPaciente.disabled = true;

  mostrarNotificacion(`Paciente ${paciente.nombres} ${paciente.apellidos} registrado con éxito`);
});



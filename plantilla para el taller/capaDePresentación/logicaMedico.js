const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("medicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");

// habilita/deshabilita el botón según la validez del formulario
formMedico.addEventListener("input", () => {
  btnAgregarMedico.disabled = !formMedico.checkValidity();
});

formMedico.addEventListener("submit", (e) => {
  e.preventDefault();

  const tipoIdentificacion = document.getElementById("identificacionMedico").value;
  const identificacion = document.getElementById("numero-identificacionMedico").value;
  const nombres = document.getElementById("nombresMedico").value;
  const apellidos = document.getElementById("apellidosMedico").value;
  const especialidad = document.getElementById("especialidadMedico").value;
  const horario_atencion = document.getElementById("horarioAtencionMedico").value;
  const anios_experiencia = parseInt(document.getElementById("aniosExperienciaMedico").value);
  const bibliografia = document.getElementById("bibliografiaMedico").value;

  const medico = gestionarMedicos.registrarMedico(tipoIdentificacion, identificacion, nombres, apellidos, especialidad, horario_atencion, anios_experiencia, bibliografia);
  console.log("Médico registrado:", medico);

  // actualizar select
  const option = document.createElement("option");
  option.value = medico.id;
  option.textContent = `${medico.nombres} ${medico.apellidos}`;
  medicoSelect.appendChild(option);

  formMedico.reset();
  btnAgregarMedico.disabled = true;

  mostrarNotificacion(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
});


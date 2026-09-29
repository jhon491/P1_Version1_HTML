class GestionarPacientes {
  constructor(repoPaciente) {
    this.repoPaciente = repoPaciente;
  }

  registrarPaciente(tipoIdentificacion, identificacion, nombres, apellidos, correoElectronico, genero) {
    const id = this.repoPaciente.siguienteId();
    const paciente = new Paciente(id, tipoIdentificacion, identificacion, nombres, apellidos, correoElectronico, genero);
    this.repoPaciente.agregar(paciente);
    return paciente;
  }

  listarPacientes() {
    return this.repoPaciente.obtenerTodos();
  }

  buscarPaciente(id) {
    return this.repoPaciente.buscarPorId(id);
  }
}

const gestionarPacientes = new GestionarPacientes(pacienteRepo);


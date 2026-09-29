class GestionarMedicos {
  constructor(repoMedico) {
    this.repoMedico = repoMedico;
  }

  registrarMedico(tipoIdentificacion, identificacion, nombres, apellidos, especialidad, horario_atencion, anios_experiencia, bibliografia) {
    const id = this.repoMedico.siguienteId();
    const medico = new Medico(id, tipoIdentificacion, identificacion, nombres, apellidos, especialidad, horario_atencion, anios_experiencia, bibliografia);
    this.repoMedico.agregar(medico);
    return medico;
  }

  listarMedicos() {
    return this.repoMedico.obtenerTodos();
  }

  buscarMedico(id) {
    return this.repoMedico.buscarPorId(id);
  }
}

const gestionarMedicos = new GestionarMedicos(medicoRepo);

 

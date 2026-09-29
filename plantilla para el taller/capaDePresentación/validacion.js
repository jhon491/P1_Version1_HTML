
function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCorreo(campo, errorElement,mensaje) {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;
    if (!correoRegex.test(campo.value)) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    if (campo.value.length < min || campo.value.length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// Función principal que valida todo el formulario
function validarFormulario() {

    const inputTipoIdentificacionPaciente = document.getElementById('identificacionPaciente');
    const inputNumeroIdentificacionPaciente = document.getElementById('numero-identificacionPaciente');
    const inputNombresPaciente = document.getElementById('nombresPaciente');
    const inputApellidosPaciente = document.getElementById('apellidosPaciente');
    const inputGenero = document.getElementsByName('genero');
    const inputCorreoElectronico = document.getElementById('correo-electronico');

    const inputTipoIdentificacionMedico = document.getElementById('identificacionMedico');
    const inputNumeroIdentificacionMedico = document.getElementById('numero-identificacionMedico');
    const inputNombresMedico = document.getElementById('nombresMedico');
    const inputApellidosMedico = document.getElementById('apellidosMedico');

    const labelErrorTipoIdentificacionPaciente = document.getElementById('errorTipoIdentificacionPaciente');
    const labelErrorNumeroIdentificacionPaciente = document.getElementById('errorNumeroIdentificacionPaciente');
    const labelErrorNombresPaciente=document.getElementById('errorNombresPaciente');
    const labelErrorApellidosPaciente=document.getElementById('errorApellidosPaciente');
    const labelErrorGenero=document.getElementById('errorGenero');
    const labelErrorCorreo=document.getElementById('errorCorreo');

    const labelErrorTipoIdentificacionMedico = document.getElementById('errorTipoIdentificacionMedico');
    const labelErrorNumeroIdentificacionMedico = document.getElementById('errorNumeroIdentificacionMedico');
    const labelErrorNombresMedico=document.getElementById('errorNombresMedico');
    const labelErrorApellidosMedico=document.getElementById('errorApellidosMedico');
    
    validarCampoObligatorio(inputTipoIdentificacionPaciente, labelErrorTipoIdentificacionPaciente, 'El tipo de identificación es obligatorio');
    validarCampoObligatorio(inputNumeroIdentificacionPaciente, labelErrorNumeroIdentificacionPaciente, 'La identificación es obligatoria');
    validarLongitud(inputNombresPaciente,labelErrorNombresPaciente , 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    validarLongitud(inputApellidosPaciente,labelErrorApellidosPaciente , 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    validarGenero(inputGenero,labelErrorGenero,'El género es obligatorio' );
    validarCorreo(inputCorreoElectronico, labelErrorCorreo,'El correo debe tener el dominio @unicauca.edu.co');
    
    validarCampoObligatorio(inputTipoIdentificacionMedico, labelErrorTipoIdentificacionMedico, 'Seleccione un tipo de identificación');
    validarCampoObligatorio(inputNumeroIdentificacionMedico, labelErrorNumeroIdentificacionMedico, 'Ingrese un número de identificación');
    validarLongitud(inputNombresMedico,labelErrorNombresMedico , 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    validarLongitud(inputApellidosMedico,labelErrorApellidosMedico , 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    validarGenero(inputGenero,labelErrorGenero,'El género es obligatorio' );
    validarCorreo(inputCorreoElectronico, labelErrorCorreo,'El correo debe tener el dominio @unicauca.edu.co');
}

function validarCamposAlCambiarFoco()
{
    const inputTipoIdentificacionPaciente = document.getElementById('identificacionPaciente');
    const inputNumeroIdentificacionPaciente = document.getElementById('numero-identificacionPaciente');
    const inputNombresPaciente = document.getElementById('nombresPaciente');
    const inputApellidosPaciente = document.getElementById('apellidosPaciente');
    const inputCorreoElectronico = document.getElementById('correo-electronico');
    const inputGenero = document.getElementsByName('genero');

    const inputTipoIdentificacionMedico = document.getElementById('identificacionMedico');
    const inputNumeroIdentificacionMedico = document.getElementById('numero-identificacionMedico');
    const inputNombresMedico = document.getElementById('nombresMedico');
    const inputApellidosMedico = document.getElementById('apellidosMedico');

    const labelErrorTipoIdentificacionPaciente = document.getElementById('errorTipoIdentificacionPaciente');
    const labelErrorNumeroIdentificacionPaciente = document.getElementById('errorNumeroIdentificacionPaciente');
    const labelErrorNombresPaciente=document.getElementById('errorNombresPaciente');
    const labelErrorApellidosPaciente=document.getElementById('errorApellidosPaciente');
    const labelErrorGenero=document.getElementById('errorGenero');
    const labelErrorCorreo=document.getElementById('errorCorreo');

    const labelErrorTipoIdentificacionMedico = document.getElementById('errorTipoIdentificacionMedico');
    const labelErrorNumeroIdentificacionMedico = document.getElementById('errorNumeroIdentificacionMedico');
    const labelErrorNombresMedico=document.getElementById('errorNombresMedico');
    const labelErrorApellidosMedico=document.getElementById('errorApellidosMedico');
    
    inputTipoIdentificacionPaciente.addEventListener('blur', () => validarCampoObligatorio(inputTipoIdentificacionPaciente, labelErrorTipoIdentificacionPaciente, 'El tipo de identificación es obligatorio.'));
    inputNumeroIdentificacionPaciente.addEventListener('blur', () => validarCampoObligatorio(inputNumeroIdentificacionPaciente, labelErrorNumeroIdentificacionPaciente, 'El número de identificación es obligatorio.'));
    inputNombresPaciente.addEventListener('blur', () => validarLongitud(inputNombresPaciente, labelErrorNombresPaciente, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres.'));
    inputApellidosPaciente.addEventListener('blur', () => validarLongitud(inputApellidosPaciente, labelErrorApellidosPaciente, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres.'));
    inputCorreoElectronico.addEventListener('input', () => validarCorreo(inputCorreoElectronico, labelErrorCorreo,'El correo debe tener el dominio @unicauca.edu.co'));
    Array.from(inputGenero).forEach(input => input.addEventListener('blur', () => validarGenero(inputGenero, labelErrorGenero,'El género es obligatorio')));
    
    inputTipoIdentificacionMedico.addEventListener('blur', () => validarCampoObligatorio(inputTipoIdentificacionMedico, labelErrorTipoIdentificacionMedico, 'El tipo de identificación es obligatorio.'));
    inputNumeroIdentificacionMedico.addEventListener('blur', () => validarCampoObligatorio(inputNumeroIdentificacionMedico, labelErrorNumeroIdentificacionMedico, 'El número de identificación es obligatorio.'));
    inputNombresMedico.addEventListener('blur', () => validarLongitud(inputNombresMedico, labelErrorNombresMedico, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres.'));
    inputApellidosMedico.addEventListener('blur', () => validarLongitud(inputApellidosMedico, labelErrorApellidosMedico, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres.'));
    
}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);


export function PerfilPaciente(){
    return(
        <div className="container">
      <h2>Perfil del Paciente</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>CI:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Nombre del Paciente:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Apellido del Paciente:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Dirección:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Correo electrónico:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Fecha de nacimiento:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
          <tr>
            <td>Antecedentes médicos:</td>
            <td>
              <p className="form-control-plaintext">{}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}
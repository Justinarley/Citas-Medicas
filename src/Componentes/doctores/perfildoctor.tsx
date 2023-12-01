

export function PerfilDoctor() {
//     const [foto, setFoto] = useState(null);
//     const [idDoctor, setIdDoctor] = useState('');
//     const [nombre, setNombre] = useState('');
//     const [apellidos, setApellidos] = useState('');
//     const [telefono, setTelefono] = useState('');
//     const [especialidad, setEspecialidad] = useState('');
  
    return (
      <div className="container">
        <h2>Perfil del Doctor</h2>
  
        <div>
          <label htmlFor="foto">Foto del Doctor en formato PDF:</label>

          {/* {foto && <p>Archivo seleccionado: {foto.name}</p>} */}
        </div>
  
        <table className="table">
          <tbody>
            <tr>
              <td>ID del Doctor:</td>
              <td>
              <p className="form-control-plaintext">{}</p>
              </td>
            </tr>
            <tr>
              <td>Nombre:</td>
              <td>
              <p className="form-control-plaintext">{}</p>
              </td>
            </tr>
            <tr>
              <td>Apellidos:</td>
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
              <td>Especialidad:</td>
              <td>
              <p className="form-control-plaintext">{}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
import Table from "react-bootstrap/Table";

function Listado({ colaboradores, BaseColaboradores, setCollaborators }) {
  const eliminar = (colaborador) => {
    setCollaborators((collaborators) => {
      BaseColaboradores = BaseColaboradores.filter((collaborator) => colaborador.id !== collaborator.id);
      return collaborators.filter((collaborator) => colaborador.id !== collaborator.id);
    });
  };
  return (
    <Table striped bordered hover responsive variant="light" className="table">
      <thead>
        <tr className="text-center">
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr className="text-center" key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <button class="btn btn-delete" onClick={() => eliminar(colaborador)}>
                <span className="boton-eliminar"> 🐱‍👤 Eliminar</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;

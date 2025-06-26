import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">CRUD Database</h1>
        <table className="tableCRUD">
          <thead className="theadCRUD">
            <tr className="trTheadCRUD">
              <th className="thCRUD">ID</th>
              <th className="thCRUD">Nome</th>
              <th className="thCRUD">Sobrenome</th>
              <th className="thCRUD">E-mail</th>
              <th className="thCRUD">Telefone</th>
              <th className="thCRUD">Endereço</th>
              <th className="thCRUD">Emprego</th>
              <th className="thCRUD">Ação</th>
            </tr>
          </thead>
          <tbody className="TbodyCRUD">
            <tr className="trTbodyCRUD">
              <td className="tdCRUD">01</td>
              <td className="tdCRUD">Geovana</td>
              <td className="tdCRUD">Assis</td>
              <td className="tdCRUD">geovanaassis073@gmail.com</td>
              <td className="tdCRUD">(33) 99937-9387</td>
              <td className="tdCRUD">São Felix de Minas - MG</td>
              <td className="tdCRUD">Aluna</td>
              <td className="tdCRUD">
                <div className="ContentButtons">
                  <button className="buttonEdit">Editar</button>
                  <button className="buttonDel">Excluir</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="buttonAdd">Adicionar novo item</button>
      </div>
    </div>
  );
};

export default App;

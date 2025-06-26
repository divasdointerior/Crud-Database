import "./App.css";

const pessoas = [
  {
    id: 1,
    nome: "Geovana",
    sobrenome: "Assis",
    email: "geovanaassis073@gmail.com",
    telefone: "(33) 99937-9387",
    localizacao: "São Felix de Minas - MG",
    cargo: "Aluna",
  },
  {
    id: 2,
    nome: "Sofia",
    sobrenome: "Stefany",
    email: "Sofiatefany.@email.com",
    telefone: "(11) 98888-1234",
    localizacao: "São Paulo - SP",
    cargo: "Aluna",
  },
  {
    id: 3,
    nome: "Mariana",
    sobrenome: "Oliveira",
    email: "mariana.oliveira@email.com",
    telefone: "(21) 97777-5678",
    localizacao: "Rio de Janeiro - RJ",
    cargo: "Aluna",
  },
  {
    id: 4,
    nome: "João",
    sobrenome: "Costa",
    email: "joao.costa@email.com",
    telefone: "(31) 96666-4321",
    localizacao: "Belo Horizonte - MG",
    cargo: "Aluno",
  },
  {
    id: 5,
    nome: "Aline",
    sobrenome: "Souza",
    email: "aline.souza@email.com",
    telefone: "(41) 95555-8765",
    localizacao: "Curitiba - PR",
    cargo: "Aluna",
  },
];

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
            {pessoas.map((item, index) => (
              <tr className="trTbodyCRUD" key={item.id}>
                <td className="tdCRUD">{item.id}</td>
                <td className="tdCRUD">{item.nome}</td>
                <td className="tdCRUD">{item.sobrenome}</td>
                <td className="tdCRUD">{item.email}</td>
                <td className="tdCRUD">{item.telefone}</td>
                <td className="tdCRUD">{item.localizacao}</td>
                <td className="tdCRUD">{item.cargo}</td>
                <td className="tdCRUD">
                  <div className="ContentButtons">
                    <button className="buttonEdit">Editar</button>
                    <button className="buttonDel">Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="buttonAdd">Adicionar novo item</button>
      </div>
    </div>
  );
};

export default App;

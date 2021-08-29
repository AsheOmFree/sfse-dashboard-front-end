import "./App.css";
import DataTable, { createTheme } from "react-data-table-component";

const Fields = ["id", "name", "email", "address", "city", "state"];
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "State",
    selector: (row) => row.state,
  },
];

const data = [
  {
    id: 1,
    name: "Ash",
    email: "1988@email.com",
    address: "123 Main St.",
    city: "Atlanta",
    state: "Georgia",
  },
  {
    id: 2,
    name: "Ash",
    email: "1988@email.com",
    address: "123 Main St.",
    city: "Atlanta",
    state: "Georgia",
  },
];

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#FFFFFF",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

function App() {
  const inputFields = Fields.map((field) => (
    <div className="five wide column" key={field}>
      {" "}
      <input placeholder={field} className="inputs"></input>{" "}
    </div>
  ));
  return (
    <div>
      <input placeholder="Search"></input>

      <div className="ui grid all-fields">{inputFields}</div>
      <DataTable columns={columns} data={data} theme="solarized" />
    </div>
  );
}

export default App;

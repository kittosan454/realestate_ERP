import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/customer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    name: "나동빈",
    birthday: "9182098",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    name: "신윤승",
    birthday: "9182098",
    gender: "남자",
    job: "직장인",
  },
];

function App() {
  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;

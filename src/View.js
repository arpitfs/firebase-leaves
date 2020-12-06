import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Input } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { db } from "./firebase_config";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function DenseTable() {
  const classes = useStyles();

  const [getData, setData] = useState([]);

  async function getFromDb() {
    console.log("Get Todos method");
     db.collection("Arpit Malik").onSnapshot(function (querySnapshot) {
      setData(
        querySnapshot.docs.map((doc) => ({
          holidayFrom: doc.data().holidayFrom,
          holidayTill: doc.data().holidayTill,
          TotalDays: doc.data().TotalDays
          
        }))
      );
      console.log("Inner");
    });
    console.log(getData);
  }

  useEffect(() => {
    getFromDb();
  }, [])

  function createData(name, vacationFrom, vacationTill, totalDays) {
    return {name, vacationFrom, vacationTill, totalDays}
  }
  
  const rows = [
    // createData(getData.name, getData.VacationFrom, getData.VacationTill, getData.TotalDays),
    createData("Arpit Malik", "12/12/2020", "15/12/2020", 4)
  ];
  

  return (
    <div  style={{
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      marginLeft:"400px",
      marginTop:"50px"
    }}>
      <TableContainer component={Paper}>       
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ fontWeight: "bold", textDecoration: "bold" }}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Vacation From</TableCell>
              <TableCell align="right">Vacation Till</TableCell>
              <TableCell align="right">Total Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={getData.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">12/12/2020</TableCell>
                <TableCell align="right">15/12/2020</TableCell>
                <TableCell align="right">4</TableCell>
                <Button>X</Button>
              </TableRow>
             
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
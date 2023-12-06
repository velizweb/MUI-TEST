import { Grid, TablePagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import HouseCard from "../componentes/HouseCard";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  /*const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));*/

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  useEffect(() => {
    fetch(
      `http://localhost:3000/products?_page=${page + 1}&_limit=${rowsPerPage}`
    )
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    // setPage(0);
  };

  return (
    <>
      {/* <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Item>sm=6</Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>sm=6</Item>
        </Grid>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} item xs={12} sm={6}>
            <Product />
          </Grid>
        ))}
      </Grid> 
      
      <Grid container spacing={2} sx={{ mt: 5 }}>
        {houses.map((item) => (
          <Grid key={item} item xs={12} sm={6} md={4}>
            <VelizCard />
          </Grid>
        ))}
      </Grid>
      */}

      <Grid container spacing={2} sx={{ mt: 5 }}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <HouseCard
              id={item.id}
              title={item.title}
              image={item.image}
              content={item.content}
            />
          </Grid>
        ))}
      </Grid>

      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[8, 16, 32, 74]}
      />
    </>
  );
};

export default Home;

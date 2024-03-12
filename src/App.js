import { Box, Container } from "@mui/material";
import "./App.css";
import { BetButtons } from "./Components/BetButtons";

function App() {
  const Data = [
    { num: 1, bgColor: "green" },
    { num: 2, bgColor: "green" },
    { num: 3, bgColor: "green" },
    { num: 4, bgColor: "green" },
    { num: 5, bgColor: "green" },
    { num: 6, bgColor: "red" },
    { num: 7, bgColor: "red" },
    { num: 8, bgColor: "red" },
    { num: 9, bgColor: "red" },
    { num: 10, bgColor: "red" },
  ];
  return (
    <Container maxWidth="sm" sx>

    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
      <Box  display={"flex"}  flexWrap={"wrap"} mt={10}  >
        {Data.map((value) => {
          return (
            <BetButtons
              key={value.num}
              num={value.num}
              bgColor={value.bgColor}
            />
          );
        })}
       
          <Box  sx={{backgroundColor:"green",cursor:"pointer"}}  width={"10.2%"} textAlign={'center'} p={2} m={1} >G</Box>
          <Box  sx={{backgroundColor:"red",cursor:"pointer"}}  width={"10.2%"} textAlign={'center'} p={2} m={1}>R</Box>
      
      </Box>
    </Box>
  </Container>
  );
}

export default App;

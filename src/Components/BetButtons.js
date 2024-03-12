import Box from '@mui/material/Box';
export function BetButtons({num,bgColor}) { 
  return (
   <Box  sx={{backgroundColor:bgColor,cursor:"pointer"}}  width={'10.2%'} textAlign={'center'} p={2} m={1}>
     {num}
   </Box>
  );
}

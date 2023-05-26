import { Grid } from "@chakra-ui/react";

const CardContainer = ({ children }: { children: JSX.Element[] }) => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={4}>
      {children}
    </Grid>
  );
};

export default CardContainer;

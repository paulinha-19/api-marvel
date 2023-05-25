import NavBar from "../components/NavBar/index";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <Box>
            <NavBar />
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout

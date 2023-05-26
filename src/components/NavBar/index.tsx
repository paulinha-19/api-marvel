import React from "react";
import {
  Box,
  Flex,
  Link,
  Input,
  IconButton,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo/iron-man.png";
import { useLocation } from "react-router-dom";
import { searchCharacters, searchComics } from "../../util/requests";
import { useMutation } from "react-query";
import { useSearch } from "../../context/Search/useSearch";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchTerm, setSearchTerm } = useSearch();
  const { pathname } = useLocation();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchMutation = useMutation(
    pathname === "/personagens" ? searchCharacters : searchComics,
    {
      onSuccess: (data) => {
        if (pathname === "/personagens") {
          console.log("Resultados da pesquisa de personagens:", data);
        } else if (pathname === "/quadrinhos") {
          console.log("Resultados da pesquisa de quadrinhos:", data);
        }
      },
      onError: (error) => {
        if (pathname === "/personagens") {
          console.log("Erro na pesquisa de personagens:", error);
        } else if (pathname === "/quadrinhos") {
          console.log("Erro na pesquisa de quadrinhos:", error);
        }
      },
    }
  );
  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    searchMutation.mutate(searchTerm);
  };

  return (
    <Box as="header" p={4} bg={colorMode === "light" ? "gray.100" : "gray.900"}>
      <Flex
        align="center"
        justify={{ base: "space-between", md: "flex-start" }}
      >
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          mr={2}
        />
        <Box display={{ base: "none", md: "flex" }}>
          <img src={logo} alt="Logo" height={50} width={50} />
        </Box>
        <Flex align="center" justify="center" flex={1}>
          <form onSubmit={handleSearchSubmit}>
            <Input
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleSearchChange}
              display={{ base: "none", md: "flex" }}
              mr={2}
            />
          </form>
        </Flex>
        <Flex align="center">
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            ml={2}
          />
          <Link href="/" ml={4} display={{ base: "none", md: "block" }}>
            Home
          </Link>
          <Link
            href="/personagens"
            ml={4}
            display={{ base: "none", md: "block" }}
          >
            Personagens
          </Link>
          <Link
            href="/quadrinhos"
            ml={4}
            display={{ base: "none", md: "block" }}
          >
            Quadrinhos
          </Link>
        </Flex>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MARVEL-API</DrawerHeader>
            <DrawerBody>
              <form onSubmit={handleSearchSubmit}>
                <Input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  mb={2}
                />
              </form>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                my={5}
              >
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
                <Link href="/personagens" mt={5} onClick={onClose}>
                  Personagens
                </Link>
                <Link href="/quadrinhos" mt={5} onClick={onClose}>
                  Quadrinhos
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavBar;

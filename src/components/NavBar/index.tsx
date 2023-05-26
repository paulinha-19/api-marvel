import React, { useState } from "react";
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

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Pesquisar:", searchValue);
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
              value={searchValue}
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
                  value={searchValue}
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

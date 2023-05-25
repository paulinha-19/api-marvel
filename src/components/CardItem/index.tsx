import { Card, CardBody, Image, Text, Link, Flex } from "@chakra-ui/react";
import { IResult } from "../../pages/Characters/interface";
import { useNavigate } from "react-router-dom";

interface CharacterCardProps {
  character: IResult;
}

const CardItem = ({ character }: CharacterCardProps) => {
  const { name, thumbnail } = character;
  let navigate = useNavigate();
  return (
    <Link>
      <Card
        borderWidth="1px"
        overflow="hidden"
        p="4"
        height="100%"
        width="100%"
        key={character.id}
        onClick={() =>
          navigate(`/details/${character.id}`, { state: { character } })
        }
      >
        <Flex direction="column" align="center">
          <CardBody>
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={name}
              objectFit="cover"
              height="200px"
              width="100%"
            />
            <Text mt="2" fontWeight="semibold">
              {name}
            </Text>
          </CardBody>
        </Flex>
      </Card>
    </Link>
  );
};

export default CardItem;

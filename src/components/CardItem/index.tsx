import { Card, CardBody, Image, Text, Link, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IThumbnail } from "../../interface/";

interface CardItemProps<T> {
  item: T;
  nameKey: keyof T;
  thumbnailKey: keyof T;
  idKey: keyof T;
  pathname?: string;
}

const CardItem = <T,>({
  item,
  nameKey,
  thumbnailKey,
  idKey,
  pathname,
}: CardItemProps<T>) => {
  const name = item[nameKey] as string;
  const thumbnail = item[thumbnailKey] as IThumbnail;
  const id = item[idKey] as string;
  let navigate = useNavigate();
  return (
    <Link>
      <Card
        borderWidth="1px"
        overflow="hidden"
        p="4"
        height="100%"
        width="100%"
        key={(item as any).id}
        onClick={() =>
          navigate(`${pathname}/${id}`, { state: { item } })
        }
      >
        <Flex direction="column" align="center">
          <CardBody>
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={name}
              objectFit="cover"
              height="300px"
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

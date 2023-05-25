import { Button, Flex } from "@chakra-ui/react";
interface LoadMoreProps {
  onLoadMore: () => void;
}

const LoadMore = ({ onLoadMore }: LoadMoreProps) => {
  return (
    <Flex justifyContent="center">
      <Button my={8} onClick={onLoadMore}>
        Carregar mais
      </Button>
    </Flex>
  );
};

export default LoadMore;

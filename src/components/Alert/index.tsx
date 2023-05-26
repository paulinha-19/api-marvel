import {
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

const AlertContainer = (error: any) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>
        {error}
      </AlertDescription>
    </Alert>
  );
};

export default AlertContainer;

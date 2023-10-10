import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";

const GenericProfileContact = () => {
  return (
    <Box
      minH={"20vh"}
      background={"#fff"}
      border={"1px solid #eee"}
      boxShadow={"sm"}
      borderRadius={"7px"}
      padding={"20px"}
      margin={"0 0 14px 0"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"0 0 8px 0"}
      >
        <Heading
          color={"#000000DE"}
          fontSize={"lg"}
          fontWeight={"bold"}
          margin={"0"}
        >
          Profile
        </Heading>

        <Button leftIcon={<EditIcon />} colorScheme="twitter" variant="outline">
          Edit
        </Button>
      </Box>
      <hr />

      <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} padding={"10px 0"}>
        <Box padding={"10px"}>
          <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
            Name
          </Text>
          <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
            Vishal Kumar
          </Text>
        </Box>
        <Box padding={"10px"}>
          <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
            Name
          </Text>
          <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
            Vishal Kumar
          </Text>
        </Box>
        <Box padding={"10px"}>
          <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
            Name
          </Text>
          <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
            Vishal Kumar
          </Text>
        </Box>
        <Box padding={"10px"}>
          <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
            Name
          </Text>
          <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
            Vishal Kumar
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default GenericProfileContact;

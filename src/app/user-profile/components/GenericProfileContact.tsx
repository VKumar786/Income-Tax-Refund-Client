import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";

const GenericProfileContact = (props: GenericProfileContactType) => {
  const { title, EditUrl, gridTemplateColumn, data } = props;
  return (
    <Box
      minH={"20vh"}
      background={"#fff"}
      border={"1px solid #eee"}
      boxShadow={"sm"}
      borderRadius={"7px"}
      padding={"20px"}
      margin={"0 0 30px 0"}
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
          {title}
        </Heading>

        <Link href={EditUrl}>
          <Button
            leftIcon={<EditIcon />}
            colorScheme="twitter"
            variant="outline"
          >
            Edit
          </Button>
        </Link>
      </Box>
      <hr />

      <Box
        display={"grid"}
        gridTemplateColumns={gridTemplateColumn}
        padding={"10px 0"}
      >
        {/* Box */}
        {title === "Contact" && (
          <>
            <Text
              fontSize={"md"}
              color={"#000000"}
              fontWeight={"600"}
              padding={"10px"}
            >
              Mobile
            </Text>
            <Box />
          </>
        )}
        {title === "Contact" &&
          data.map((item, idx) => {
            if (idx <= 3)
              return (
                <Box key={idx} padding={"10px"}>
                  <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
                    {item.title}
                  </Text>
                  <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
                    {item.value}
                  </Text>
                </Box>
              );
            return "";
          })}
        {title === "Contact" && (
          <>
            <Text
              fontSize={"md"}
              color={"#000000"}
              fontWeight={"600"}
              padding={"10px"}
            >
              Email
            </Text>
            <Box />
          </>
        )}
        {title === "Contact" &&
          data.map((item, idx) => {
            if (idx > 3)
              return (
                <Box key={idx} padding={"10px"}>
                  <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
                    {item.title}
                  </Text>
                  <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
                    {item.value}
                  </Text>
                </Box>
              );
            return "";
          })}
        {title !== "Contact" &&
          data.map((item, idx) => {
            return (
              <Box key={idx} padding={"10px"}>
                <Text fontSize={"sm"} color={"rgba(0, 0, 0, 0.6)"}>
                  {item.title}
                </Text>
                <Text fontSize={"sm"} color={"#000000"} fontWeight={"600"}>
                  {item.value}
                </Text>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

type GenericProfileContactType = {
  title: "Contact" | "Profile";
  EditUrl: string;
  gridTemplateColumn: string;
  data: {
    title: string;
    value: string;
  }[];
};

export default GenericProfileContact;

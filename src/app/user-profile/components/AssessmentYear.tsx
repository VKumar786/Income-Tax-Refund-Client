import {
  Box,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const RefundStages: RefundStagesType[] = [
  {
    color: "error",
    status: "Return filed on",
    date: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  },
  {
    color: "warning",
    status: "Return verified on",
    date: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  },
  {
    color: "info",
    status: "Return processing",
    date: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  },
  {
    color: "success",
    status: "Processing Completion",
    date: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  },
];

const AssessmentYear = () => {
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
      <Heading
        color={"#000000DE"}
        fontSize={"lg"}
        fontWeight={"500"}
        padding={"0 0 16px 0"}
      >
        Assessment Year 2023-24 filling
      </Heading>

      <Alert
        status="success"
        background={"#EDF6EF"}
        borderRadius={"4px"}
        minH={"15vh"}
        border={"solid 1px rgba(33, 135, 55.0.118)"}
      >
        <AlertIcon />
        <Box>
          <AlertTitle fontSize={"lg"} fontWeight={"500"} color={"#1f7f34"}>
            Filed successfully!
          </AlertTitle>
          <AlertDescription margin={"10px 0"}>
            <Text fontWeight={"600"} as="span">
              Note
            </Text>
            : We will process your filing and make sure it is completed at the
            earliest. Please find the return processing status below.
          </AlertDescription>
        </Box>
      </Alert>

      <Box margin={"27px 0 0 0"}>
        <Text
          fontSize={"md"}
          color={"#000000DE"}
          as={"span"}
          margin={"0 5px 0 0"}
        >
          Refund Awaited:
        </Text>

        <Text
          fontSize={"lg"}
          color={"#000000DE"}
          as={"span"}
          fontWeight={"bold"}
        >
          ₹42,874*
        </Text>
      </Box>

      <Alert
        status={RefundStages[3].color}
        borderRadius={"7px"}
        margin={"16px 0 0 0"}
      >
        <AlertIcon />
        <Text
          fontSize={"md"}
          color={"#000000DE"}
          as={"span"}
          margin={"0 5px 0 0"}
        >
          Work Status:
        </Text>

        <Text
          fontSize={"lg"}
          color={"#000000DE"}
          as={"span"}
          fontWeight={"bold"}
        >
          {RefundStages[0].status} ({RefundStages[0].date})
        </Text>
      </Alert>
    </Box>
  );
};

type RefundStagesType = {
  color: "error" | "warning" | "info" | "success";
  status: string;
  date: string;
};

export default AssessmentYear;

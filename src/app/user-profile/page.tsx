"use client";
import {
  useEffect,
  useRef,
  useContext,
  useState,
  ChangeEvent,
  useCallback,
} from "react";

// Chakra-ui
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

//component
import ShortUserProfile from "./components/ShortUserProfile";
import AssessmentYear from "./components/AssessmentYear";
import GenericProfileContact from "./components/GenericProfileContact";

export default function UserProfile() {
  return (
    <Box maxH={"100vh"} background={"#f6f7fb"}>
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 2fr"}
        padding={"3rem 5rem"}
        gap={"2rem"}
      >
        <ShortUserProfile />
        <Box width={"100%"}>
          <AssessmentYear />
          <GenericProfileContact />
        </Box>
      </Box>
    </Box>
  );
}

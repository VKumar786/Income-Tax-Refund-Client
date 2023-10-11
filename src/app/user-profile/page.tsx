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
    <Box background={"#f6f7fb"}>
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 2fr"}
        padding={"3rem 5rem"}
        gap={"2rem"}
      >
        <ShortUserProfile />
        <Box width={"100%"}>
          <AssessmentYear />
          <GenericProfileContact
            title="Profile"
            EditUrl="/"
            gridTemplateColumn="1fr 1fr 1fr"
            data={[
              { title: "Name", value: "BACHAN LAL" },
              { title: "Date of Birth", value: "10-Apr-1983" },
              { title: "PAN", value: "AFGPL0807B" },
              { title: "Gender", value: "Male" },
              { title: "PAN Status", value: "Active" },
              { title: "Aadhaar Number", value: "XXXXXXXX8668" },
              { title: "Citizenship", value: "Indian" },
              { title: "Do you have a valid Passport Number?", value: "No" },
              { title: "Passport Number", value: "--" },
              { title: "Residential Status", value: "Resident" },
            ]}
          />
          <GenericProfileContact
            title="Contact"
            EditUrl="/"
            gridTemplateColumn="1fr 2fr"
            data={[
              { title: "Primary (Self)", value: "+91 9484144881" },
              { title: "Secondary", value: "--" },
              { title: "Residential/ Office (Mobile)", value: "--" },
              { title: "Residential/Office (Landline)", value: "+91 --" },
              { title: "Primary (Friend)", value: "yadav23adu@gmail.com" },
              { title: "Secondary", value: "--" },
              {
                title: "Address",
                value:
                  "SERH, R, Kharah B.O, Bali, JAMMU, 181203, Jammu and Kashmir, INDIA",
              },
              {
                title: "Communication to be addressed to",
                value: "Both Primary and Secondary",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}

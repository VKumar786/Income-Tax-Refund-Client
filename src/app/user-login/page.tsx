"use client";

import {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
} from "react";

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useToast,
  HStack,
  PinInputField,
  PinInput,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  Center,
  Text,
} from "@chakra-ui/react";

import { UserContext } from "../context/user";
import Link from "next/link";

const btnStages = ["Send OTP", "Verify"];
const oneTimePwd = "1234";

export default function Multistep() {
  const toast = useToast();
  const [show, setShow] = useState(false);

  const { setPan, setPhone } = useContext(UserContext);
  const panInputRef = useRef<HTMLInputElement | null>(null);
  const otpInputRef = useRef<HTMLInputElement | null>(null);
  const [formStage, setFormStage] = useState<number>(0);
  const [data, setData] = useState<DataType>({
    pan: "",
    phoneNumber: "",
    otp: "0000",
  });

  useEffect(() => {
    if (panInputRef.current) panInputRef.current.focus();
  }, []);

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = useCallback(() => {
    if (formStage === 0) {
      // validate pan number
      const pattern = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
      const isValid = pattern.test(data.pan);

      if (!isValid) {
        toast({
          title: "Invalid PAN.",
          description: "Please 🙏 Enter Valid PAN",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      setPan(data.pan);

      // validate Phone number
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if (!regex.test(data.phoneNumber)) {
        toast({
          title: "Invalid Phone Number.",
          description: "Please 🙏 Enter Valid Phone Number",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      setPhone(data.phoneNumber);

      setFormStage(1);

      setTimeout(() => {
        if (otpInputRef.current) otpInputRef.current?.focus();
      }, 300);
      // TODO : send otp
    } else if (formStage === 1) {
      // TODO : verify otp
      if (data.otp !== oneTimePwd) {
        toast({
          title: "Invalid OTP.",
          description: "Please 🙏 Enter Valid OTP",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: "LogIn Successfully.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        window.location.href = "/user-profile";
      }, 1000);
    }
  }, [
    data.otp,
    data.pan,
    data.phoneNumber,
    formStage,
    setPan,
    setPhone,
    toast,
  ]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const pressedKey = e.key;
      if (pressedKey === "Enter") {
        handleSubmit();
      }
    };
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleSubmit]);

  return (
    <>
      <Box
        width={"100%"}
        bgImage="url('https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        bgSize="cover"
        bgPosition="center center"
        minHeight={"60vh"}
        padding={"3rem 0 3rem 0"}
      >
        <Box
          borderWidth="1px"
          rounded="lg"
          background={"#ffffff"}
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          minWidth={400}
          p={6}
          m="0 auto"
          as="form"
        >
          <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
              Welcome back! ✌️
            </Heading>
            {/* PAN */}
            <FormControl>
              <FormLabel htmlFor="pan" fontWeight={"normal"}>
                PAN
              </FormLabel>
              <Input
                type="text"
                ref={panInputRef}
                placeholder="Enter 10-character PAN"
                name="pan"
                onChange={handleChanges}
                value={data.pan}
                background={"#F7FAFC"}
              />
              {/* <FormHelperText>We&apos;ll never share your PAN.</FormHelperText> */}
            </FormControl>

            {/* Phone Number */}
            <FormControl>
              <FormLabel htmlFor="phoneNumber" fontWeight={"normal"} mt="2%">
                Phone Number
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChanges}
                background={"#F7FAFC"}
              />
            </FormControl>

            {/* OTP */}
            {formStage === 1 && (
              <FormControl>
                <FormLabel htmlFor="otp" fontWeight={"normal"} mt="2%">
                  OTP
                </FormLabel>
                <HStack>
                  <PinInput>
                    <PinInputField
                      ref={otpInputRef}
                      value={data.otp[0]}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          otp: e.target.value + prev.otp.slice(1),
                        }))
                      }
                      background={"#F7FAFC"}
                    />
                    <PinInputField
                      value={data.otp[1]}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          otp:
                            prev.otp.slice(0, 1) +
                            e.target.value +
                            prev.otp.slice(2),
                        }))
                      }
                      background={"#F7FAFC"}
                    />
                    <PinInputField
                      value={data.otp[2]}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          otp:
                            prev.otp.slice(0, 2) +
                            e.target.value +
                            prev.otp.slice(3),
                        }))
                      }
                      background={"#F7FAFC"}
                    />
                    <PinInputField
                      value={data.otp[3]}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          otp: prev.otp.slice(0, 3) + e.target.value,
                        }))
                      }
                      background={"#F7FAFC"}
                    />
                  </PinInput>
                </HStack>
              </FormControl>
            )}
          </>
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                {/* Google */}
                {/* <Button w={"full"} variant={"outline"} leftIcon={""}> */}
                <Link href="/admin-login">
                  <Button w={"full"} variant={"outline"}>
                    <Center>
                      <Text>👨🏻‍💻 Admin Login</Text>
                    </Center>
                  </Button>
                </Link>
              </Flex>
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                {btnStages[formStage]}
              </Button>
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}

type DataType = {
  pan: string;
  phoneNumber: string;
  otp: string;
};

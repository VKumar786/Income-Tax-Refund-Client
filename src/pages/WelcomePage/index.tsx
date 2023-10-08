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

// Context
import { UserContext } from "@/app/context/user";

const btnStages = ["Continue", "Send OTP", "Verify"];

export default function WelcomePage() {
  const { setPan, setPhone } = useContext(UserContext);
  const panInputRef = useRef<HTMLInputElement | null>(null);
  const [formStage, setFormStage] = useState<number>(1);
  const [data, setData] = useState<DataType>({
    pan: "",
    phoneNumber: "",
    otp: "0000",
  });
  const [isErr, setIsErr] = useState<string>("");

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
        setIsErr("Please Enter Valid PAN");
        setTimeout(() => {
          setIsErr("");
        }, 2500);
        return;
      }

      setFormStage(1);
      setPan(data.pan);
    } else if (formStage === 1) {
      // validate Phone number
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if (!regex.test(data.phoneNumber)) {
        setIsErr("Please Enter Valid Phone Number");
        setTimeout(() => {
          setIsErr("");
        }, 2500);
        return;
      }

      setFormStage(2);
      setPhone(data.phoneNumber);
      // TODO : send otp
    } else if (formStage === 2) {
      // TODO : verify otp

      
    }
  }, [data.pan, data.phoneNumber, formStage, setPan, setPhone]);

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
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Welcome back! ✌️</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Please log in to access your account.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {formStage === 0 ? (
              <FormControl id="email">
                <FormLabel>PAN</FormLabel>
                <Input
                  type="text"
                  ref={panInputRef}
                  placeholder="Enter your 10-character PAN"
                  name="pan"
                  onChange={handleChanges}
                  value={data.pan}
                />
              </FormControl>
            ) : (
              <>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    value={data.phoneNumber}
                    onChange={handleChanges}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>OTP</FormLabel>
                  <HStack>
                    <PinInput>
                      <PinInputField
                        value={data.otp[0]}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            otp: e.target.value + prev.otp.slice(1),
                          }))
                        }
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
                      />
                      <PinInputField
                        value={data.otp[3]}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            otp: prev.otp.slice(0, 3) + e.target.value,
                          }))
                        }
                      />
                    </PinInput>
                  </HStack>
                </FormControl>
              </>
            )}
            {isErr.length !== 0 && (
              <Stack spacing={10}>
                <Alert status="error" borderRadius={"7px"}>
                  <AlertIcon />
                  <AlertTitle wordBreak={"break-word"} width={"180px"}>
                    {isErr}
                  </AlertTitle>
                </Alert>
              </Stack>
            )}
            <Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                {btnStages[formStage]}
              </Button>
              {/* <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  setData({
                    pan: "ARTPA3327L",
                    phoneNumber: "",
                    otp: "",
                  });
                  handleSubmit();
                }}
              >
                FILL1
              </Button> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

type DataType = {
  pan: string;
  phoneNumber: string;
  otp: string;
};

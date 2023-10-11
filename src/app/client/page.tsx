"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { CLIENT_DATA } from "./client.constant";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  const [readMore, setReadMore] = useState(true);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "1fr", // 0px
            sm: "1fr 1fr", // ~480px. em is a relative unit and is dependant on the font size.
            md: "1fr 1fr 1fr", // ~768px
            lg: "1fr 1fr 1fr", // ~992px
            xl: "1fr 1fr 1fr", // ~1280px
            "2xl": "1fr 1fr 1fr", // ~1536px
          }}
          gap={{ base: 10, md: 4, lg: 10 }}
        >
          {CLIENT_DATA.map((item, idx) => {
            if (readMore) {
              if (idx < 6)
                return (
                  <Testimonial key={idx}>
                    <TestimonialContent>
                      <TestimonialHeading>{item.heading}</TestimonialHeading>
                      <TestimonialText>{item.content}</TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar
                      src={item.user.profile}
                      name={item.user.name}
                      title={item.user.title}
                    />
                  </Testimonial>
                );
            } else
              return (
                <Testimonial key={idx}>
                  <TestimonialContent>
                    <TestimonialHeading>{item.heading}</TestimonialHeading>
                    <TestimonialText>{item.content}</TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={item.user.profile}
                    name={item.user.name}
                    title={item.user.title}
                  />
                </Testimonial>
              );
          })}
        </Box>
        <Center p={8}>
          <Button
            w={"full"}
            maxW={"md"}
            colorScheme={"messenger"}
            leftIcon={
              readMore ? (
                <MdKeyboardDoubleArrowDown />
              ) : (
                <MdKeyboardDoubleArrowUp />
              )
            }
            onClick={() => setReadMore((prev) => !prev)}
          >
            <Center>
              <Text>{readMore ? "Read More" : "Read Less"}</Text>
            </Center>
          </Button>
        </Center>
      </Container>
    </Box>
  );
}

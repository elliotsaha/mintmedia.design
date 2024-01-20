"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  Container,
  Button,
  SimpleGrid,
  Stack,
  StackDivider,
  Icon,
  Image,
  VStack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

import { FiArrowRight, FiMail } from "react-icons/fi";

import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

import { ReactElement, ReactNode } from "react";

import NextLink from "next/link";

interface FeaturePropsStory {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const FeatureStory = ({ text, icon, iconBg }: FeaturePropsStory) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={400} color={"white"}>
    {children}
  </Text>
);

export default function Home() {
  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.900, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text color="green.300" fontWeight="bold" fontSize="large" mb="-4">
              mintmedia
            </Text>
            <Text color="white" fontWeight={600} mb="-4" fontSize="18">
              Experience the art of visual storytelling
            </Text>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            >
              Elevating design, one pixel at a time.
            </Text>
            <Stack direction={"row"}>
              <Button
                rounded={"md"}
                colorScheme="green"
                as={NextLink}
                href="mailto:elliotsaha@gmail.com"
                rightIcon={<Icon as={FiArrowRight} />}
              >
                Contact us
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Container maxW="container.xl">
        <Box mt="14">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              title={"Innovative Design Solutions"}
              text={
                "Blending creativity with modern technology, we offer unique design perspectives tailored to your brand's vision."
              }
            />
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={"Comprehensive Project Management"}
              text={
                "Our team ensures seamless project flow, from conceptualization to final execution, prioritizing client satisfaction."
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={"Efficient Turnaround Time"}
              text={
                "Experience prompt and reliable delivery of your design projects, maintaining the highest standards of quality."
              }
            />
          </SimpleGrid>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt="24">
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
              px="4"
            >
              Our Philosophy
            </Text>
            <Heading>A Digital Product Design Agency</Heading>
            <Text color={"gray.500"} fontSize={"lg"} pb="8">
              At the heart of our agency is a passion for cutting-edge design
              and a commitment to client-centric solutions. Our approach
              combines artistic creativity with practical functionality,
              creating digital products that not only look great but also
              deliver exceptional user experiences.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <FeatureStory
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Creative Exploration"}
              />
              <FeatureStory
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Digital Branding"}
              />
              <FeatureStory
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"User Experience"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Box bg={"gray.800"} position={"relative"} mt="24">
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: "none", lg: "flex" }}
          backgroundImage="url('/templates/stats-grid-with-image.png')"
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={"absolute"}
          width={"50%"}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={"linear(to-r, gray.800 10%, transparent)"}
            w={"full"}
            h={"full"}
          />
        </Flex>
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"gray.400"}
              justify={{ lg: "center" }}
              py={{ base: 16, md: 48, xl: 60 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"gray.500"}
                >
                  Creative Innovation
                </Text>
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  Cutting-edge Design Techniques
                </Heading>
                <Text fontSize={"xl"} color={"gray.400"}>
                  Explore the forefront of design technology with us. Our
                  innovative approaches ensure your projects stand out in the
                  digital era.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text
                      fontFamily={"heading"}
                      fontSize={"3xl"}
                      color={"white"}
                      mb={3}
                      fontWeight={700}
                    >
                      {stat.title}
                    </Text>
                    <Text fontSize={"xl"} color={"gray.400"}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Stack spacing={4} my="16">
          <Flex maxW="lg" flexDirection="column" gap="4">
            <Heading as="h1">
              Contact Us Today for a Premium Design Experience
            </Heading>
            <Text color="gray.500">
              Reach out to explore how our design expertise can bring your
              vision to life. We are committed to delivering excellence and
              innovation in every project.
            </Text>
            <Stack direction="row">
              <Button
                rounded={"md"}
                colorScheme="green"
                as={NextLink}
                href="mailto:elliotsaha@gmail.com"
                leftIcon={<Icon as={FiMail} />}
              >
                Contact us
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Container>

      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text fontSize="large" color="green.500" fontWeight="bold">
            mintmedia
          </Text>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 mintmedia. All rights reserved
        </Text>
      </Box>
    </>
  );
}

const stats = [
  {
    title: "Innovation",
    content: (
      <>
        <StatsText>Design Innovation</StatsText> at the core of every project
      </>
    ),
  },
  {
    title: "Collaboration",
    content: (
      <>
        <StatsText>Team Collaboration</StatsText> to ensure creative synergy in
        all endeavors
      </>
    ),
  },
  {
    title: "Excellence",
    content: (
      <>
        <StatsText>Commitment to Excellence</StatsText> in every aspect of our
        work
      </>
    ),
  },
  {
    title: "Vision",
    content: (
      <>
        <StatsText>Forward-Thinking</StatsText> driving our approach to design
        challenges
      </>
    ),
  },
];

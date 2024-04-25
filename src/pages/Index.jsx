// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaClone, FaHeart, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl">
          Clone Yourself
        </Heading>
        <Button leftIcon={<FaInfoCircle />} colorScheme="teal">
          Learn More
        </Button>
      </Flex>
      <VStack spacing={8} py={8}>
        <Image src="https://images.unsplash.com/photo-1591131734170-f736a72437a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG9uZSUyMGNvbmNlcHR8ZW58MHx8fHwxNzE0MDI0ODk3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Clone Concept" />
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Why Clone Yourself?
          </Heading>
          <Text mt={4}>Cloning yourself can significantly boost your productivity, allowing you to accomplish multiple tasks simultaneously. Imagine being able to attend a meeting, manage your emails, and work on your projects all at once!</Text>
        </Box>
        <Button rightIcon={<FaClone />} colorScheme="pink" size="lg">
          Start Cloning
        </Button>
        <Text fontSize="xl" color="gray.600">
          <FaHeart /> Loved by thousands of productivity enthusiasts worldwide!
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;

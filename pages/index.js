import { Box, Flex, Heading, Text, Button, Grid, Link } from "@chakra-ui/core";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/eventreg.jpg')"
      bgPos="center"
      bgSize="cover"
      h="100vh"
      w="100%"
      color="#fff"
      overflowX="hidden"
    >
      <Flex align="center" justify="center" px={10} pt="250px">
        <Box mb={20} textAlign="center">
          <Heading as="h1" fontSize="6xl">
            Your go-to partner for fast, easy, <br />
            successful event registration.
          </Heading>
          <Text fontSize="xl" py={6}>
            A-Teo is a simple online event registration platform which is
            powered by a<br />
            team of experts who give off their best daily because of you.
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" w={{ md: "80%" }} mx="auto">
            <NextLink href="/events" passHref>
              <Button
                type="submit"
                height={16}
                colorScheme="green"
                aria-label="submit button"
                mt={10}
                color="#fff"
                // isLoading={isSubmitting}
              >
                Check out Events
              </Button>
            </NextLink>
            <NextLink href="/register" passHref>
              <Button
                type="submit"
                height={16}
                colorScheme="red"
                aria-label="submit button"
                mt={10}
                color="#fff"
                onClick={() => "/register"}
                href="/register"
                // isLoading={isSubmitting}
              >
                Get a Ticket
              </Button>
            </NextLink>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

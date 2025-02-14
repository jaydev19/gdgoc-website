import  { useState } from "react";
import {
  Box,
  Button,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../contexts/themecontext";
function Signup() {
  const { colorMode } = useThemeContext();
  const { googleSignIn, githubSignIn } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const history = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      toast.success("logged in")
      history("/");
    } catch (err) {
      console.log(err);
      toast.error("Failed to login")
    }
    setLoading(false);
  };

  const handleGithubSignIn = async () => {
    try {
      setLoading(true);
      await githubSignIn();
     toast.success("logged in")
      history("/");
    } catch (err) {
      toast.error("Failed to login")
      console.log(err);
     
    }
    setLoading(false);
  };

  return (
    <Box
    width="100%"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignContent="center"
  >
    <Box
      display="flex"
      width={["100vw", null, null, "40vw"]}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexDirection="column"
    >
      <Box width="90%" maxW="400px" boxShadow="lg" px={6} py={8} rounded="lg">
        <Text fontSize="2xl" fontWeight="semibold" mb={4}>
          SignUp
        </Text>
        <Button
          width="100%"
          mt={4}
          py={6}
          colorScheme="blue"
          onClick={handleGoogleSignIn}
          isLoading={loading}
          bg={colorMode === "dark" ? "white" : "black"}
                        color={colorMode === "dark" ? "black" : "white"}
                        mb={5}
        >
          Sign up with Google
        </Button>
        <Button
          width="100%"
          mt={4}
          py={6}
          colorScheme="gray"
          onClick={handleGithubSignIn}
          isLoading={loading}
          bg={colorMode === "dark" ? "white" : "black"}
                        color={colorMode === "dark" ? "black" : "white"}
                        mb={5}
        >
          Sign up with GitHub
        </Button>
      </Box>
      <Text mt={8} fontWeight="normal" fontSize="lg">
        already  have an account?{" "}
        <Link to="/login">
          <ChakraLink color="blue.400">Sign In</ChakraLink>
        </Link>
      </Text>
    </Box>
  </Box>
  );
}

export default Signup;

import { Image, Box, Stack, Heading } from "@chakra-ui/react";
import ImageCursor from "../assets/img/cursor.png";
import ImageButton from "../assets/img/button.png";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const buttonStart = () => { // un boton que me lleve a la pagina del surtidor
        navigate("/surtidor");
    };

    return (

       <div> Desde Home de pages

            <Box w="100%">

                <Stack
                    spacing={8}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >

                    <Box
                        p={5} // propiedad de responsive.
                        borderRadius="10"
                        borderWidth="1px"
                        bgGradient="linear (to-r, teal.500, green.500)" // que se vaya a la derecha
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        cursor="pointer"
                        shadow="base"
                        _hover={{ shadow: "2xl" }}
                        onClick={buttonStart}
                    >

                        <div>
                            <Heading fontSize="6xl" color="black">
                                Empezar
                            </Heading>

                            <Heading fontSize="4xl" color="black">
                                Pulsa aquí
                            </Heading>
                        </div>


                        <Image src={ImageCursor} alt="Click here" width="150px" />

                    </Box>


                    <Box

                        p={5} // propiedad de responsive.
                        borderRadius="10"
                        borderWidth="1px"
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        cursor="pointer"
                        shadow="md"
                    >

                        <Heading fontSize="4xl"> Identificarse como cliente </Heading>
                        <Image src={ImageButton} alt="Client" width="100px" />

                    </Box>

                </Stack>

            </Box>
        </div>
    );
}

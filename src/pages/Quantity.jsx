import { useState, useEffect } from "react";
import { Grid, Heading, GridItem, Button, Stack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


export default function Quantity() {

    const navigate = useNavigate();

    const [counter, setCounter] = useState("");

    const sumaCounter = (number) => { // setiar el estado con el numero que se pase por ahí
        setCounter(counter + number);
    };

    const clearCounter = () => { //limpiar el counter, setiar vacío
        setCounter(""); 
    };



    useEffect(() => {
        localStorage.setItem("Cantidad", counter);
    });


    return (
        <>

            Desde Quantity de pages


            <Grid marginBottom={5}>

                <Heading size="lg"> Pulse la cantidad de litros a cargar </Heading>

                <Heading size="lg" fontWeight="800">
                    {counter ? <> {counter}</> : <> 0 </>} 
                    {/* si tiene datos, aparezaca contador, si no aparezaca cero */}
                    
                </Heading>

            </Grid>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>

                {numbers.map((number) => ( // no index, porque no es objeto.

                    <GridItem
                        key={number}
                        w="100%"
                        h="20"
                        bgGradient="linear(to-r, gray.200, gray.500)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="700"
                        boxShadow="0px 4px 10px -3px rgb(117, 117, 177)"
                        cursor="pointer"
                        fontSize="40px"
                        _hover={{ shadow: "2xl" }}
                        onClick={() => sumaCounter(number)}
                    >

                        {number}

                    </GridItem>
                ))}

            </Grid>

            <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="30px">

                <GridItem
                    w="100%"
                    h="20"
                    bgGradient="linear(to-r, gray.200, gray.500)"
                    colSpan={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    fontWeight="700"
                    fontSize="40px"
                    bg="rgb(48, 207, 207)"
                    textAlign="center"
                    boxShadow="0px 4px 10px -3px rgb(117, 117, 177)"
                    _hover={{ shadow: "2xl" }}
                    onClick={clearCounter}
                >
                    Borrar
                </GridItem>

            </Grid>

            <Box marginTop="40px">
                
                <Stack
                    direction="row"
                    spacing={4}
                    cursor="pointer"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        colorScheme="teal"
                        variant="outline"
                        size="lg"
                        onClick={() => navigate("/metodo-pago")}
                    >
                        Volver atrás
                    </Button>

                    <Button
                        leftIcon={<ArrowForwardIcon />}
                        colorScheme="teal"
                        variant="solid"
                        size="lg"
                        onClick={() => navigate("/resumen")}
                    >
                        Continuar a resumen

                    </Button>
                </Stack>
            </Box>
        </>
    );
}
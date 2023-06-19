import { Heading, Grid, GridItem, Image, Box, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import ImageGasoil from "../assets/img/gasoil.png";
import ImageGasoilA from "../assets/img/diesel.png";
import ImageAdBlue from "../assets/img/adblue.png";
import ImageDieselPlus from "../assets/img/diesel-plus.png";

import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Product() {

    const navigate = useNavigate();

    const typeGasoil = [

        { type: "Gasolina SP 95", price: "12000", imageSrc: ImageGasoil, },
        { type: "Gasóleo A", price: "8800", imageSrc: ImageGasoilA, },
        { type: "Biodiesel A", price: "7500", imageSrc: ImageAdBlue, },
        { type: "Diesel Plus", price: "19.000", imageSrc: ImageDieselPlus, },
    ];

    const clickGasoil = (typeGasoil, pricesGasoil) => { // recibe las variables y las guarda en el LocalStorage

        localStorage.setItem("TipoGasoil", typeGasoil);
        localStorage.setItem("PrecioGasoil", pricesGasoil);

        navigate("/metodo-pago");
    };

    return (
        <>

            Desde Product de pages

            <Heading textAlign="center" size="lg" marginBottom={10}>
                Selecciona el producto
            </Heading>

            <Grid templateColumns="repeat(2, 1fr)" gap={9}>  {/* gap propiedad responsibe del gid, los espacios dentro del contenedor */}

                {typeGasoil.map((gasoilX, index) =>

                    <GridItem

                        key={index}
                        w="100%"
                        borderRadius="10"
                        padding="4"
                        cursor="pointer"
                        textAlign="center"
                        boxShadow="0px 4px 10px -3px rgb(117,117,177);"
                        _hover={{
                            bgGradient: "linear(to-r, orange.100, yellow.100)",
                            shadow: "2xl",
                        }}
                        onClick={
                            () => clickGasoil(gasoilX.type, gasoilX.price) // envía todos variables.
                        }
                    >
                        <Box>

                            <Heading size="md" fontWeight="extrabold">
                                {gasoilX.type}
                            </Heading>

                            <Box
                                display="flex"
                                justifyContent="space-evenly"
                                alignItems="center"
                                marginTop={4}
                                marginBottom={3}
                            >
                                <Heading size="sm">Precio Actual: </Heading> {/* sm es small */}

                                <Heading size="md" fontWeight="extrabold"> {/* md es medium */}
                                     ${gasoilX.price}
                                </Heading>

                            </Box>

                        </Box>

                        <Image
                            src={gasoilX.imageSrc}
                            alt={gasoilX.type}
                            width={100}
                            margin="0 auto" // auto, es automatico a los lados
                        />

                    </GridItem>
                )}

            </Grid>

            <Box marginTop="40px">

                <Stack // este es un componente tipo contenedor.
                    direction="row"
                    spacing={4}
                    cursor="pointer"
                    onClick={
                        () => navigate("/surtidor")
                    }
                >
                    <Button
                        leftIcon={<ArrowBackIcon />} // esto es un componente particular
                        colorScheme="teal"
                        variant="outline"
                    >
                        Volver al surtidor

                    </Button>

                </Stack>

            </Box>
        </>
    );
}

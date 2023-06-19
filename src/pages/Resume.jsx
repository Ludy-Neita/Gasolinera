import { Grid, GridItem, Heading, Box, Image, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ImageConfeti from "../assets/img/confeti.png";
import ImageCar from "../assets/img/car.png";
import ImageGasoil from "../assets/img/gasoil.png";
import ImageMarranito from "../assets/img/money-pig.png";
import ImageDrop from "../assets/img/drop.png";
import ImageMonedas from "../assets/img/capital.png";

export default function Resume() {

    const navigate = useNavigate();

    const surtidor = localStorage.getItem("Surtidor"); // Surtidor:  localStorage.setItem("Surtidor", id);
    const typeGasoil = localStorage.getItem("TipoGasoil"); // Product: localStorage.setItem("TipoGasoil", typeGasoil);
    const priceGasoil = localStorage.getItem("PrecioGasoil"); // Product: localStorage.setItem("PrecioGasoil", pricesGasoil);
    const methodPayment = localStorage.getItem("FormaPago"); // MethodPayment: localStorage.setItem("FormaPago", paymentName);
    const quantity = localStorage.getItem("Cantidad"); // Quantity: localStorage.setItem("Cantidad", counter);

    const finalPrice = priceGasoil.replace(",", ".") * quantity; // DUDA QUE SIGNIFICA :replace(",", ".")???

    const resumeData = [

        { title: "Surtidor:", result: surtidor, image: ImageCar, },
        { title: "Tipo de producto:", result: typeGasoil, image: ImageGasoil, },
        { title: "Método de pago:", result: methodPayment, image: ImageMarranito, },
        { title: "Cantidad:", result: `${quantity} Litros`, image: ImageDrop, },
    ];

    const returnHome = () => {

        navigate("/"); // ir a la pagina inicial 
        localStorage.clear(); // limpiar todo.
        
    };

    return (
        <>
            Desde Resume de pages

            <Grid marginBottom={5} textAlign="center">
                <Heading size="lg"> Suministro del combustible </Heading>
                <Image
                    src={ImageConfeti}
                    alt="Congratulations"
                    width="100px"
                    margin="0 auto"
                />
            </Grid>

            <Grid textAlign="center" paddingBottom="4rem">

                <Heading marginBottom="40px" size="lg">
                    Resumen del pedido:
                </Heading>

                <Grid templateColumns="repeat(2, 1fr)" gap={9}>

                    {resumeData.map((data, index) => (

                        <GridItem
                            w="100%"
                            borderRadius="10"
                            boxShadow="0px 4px 10px -3px rgb(117, 117, 177);"
                            padding="25px 15px"
                            key={index}
                        >

                            <Box minHeight="50px">

                                <Heading size="sm">{data.title}</Heading>
                                <Heading size="md" fontWeight="800">
                                    {data.result}
                                </Heading>

                            </Box>

                            <Image
                                src={data.image}
                                alt={data.title}
                                width="100px"
                                margin="0 auto"
                            />
                        </GridItem>
                    ))}
                </Grid>


                <Grid
                    marginTop="20px"
                    padding="20px"
                    boxShadow="0px 4px 10px -3px  rgb(117, 117, 177);"
                    borderRadius="10"
                >
                    <Heading size="sm"> Precio total a pagar:</Heading>

                    <GridItem borderRadius="10">

                        <Heading size="md">$ {finalPrice}</Heading>

                        <Image
                            src={ImageMonedas}
                            alt="price"
                            width="100px"
                            margin="0 auto"
                        />
                    </GridItem>

                </Grid>
                <Box marginTop="40px">
                    <Stack
                        direction="row"
                        spacing={4}
                        cursor="pointer"
                        onClick={returnHome}
                    >
                        <Button
                            leftIcon={<ArrowBackIcon />}
                            colorScheme="teal"
                            variant="outline"
                        >
                            Volver al inicio
                        </Button>
                    </Stack>
                </Box>

            </Grid>
        </>
    );
}
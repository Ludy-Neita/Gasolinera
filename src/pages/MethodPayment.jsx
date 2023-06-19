import { Box, Grid, Heading, GridItem, Button, Image, Stack } from "@chakra-ui/react";
import ImageEfectivo from "../assets/img/money.png";
import ImageCreditCard from "../assets/img/credit-card.png";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const payments = [

    { name: "Efectivo", image: ImageEfectivo, },
    { name: "Tarjeta de Crédito", image: ImageCreditCard, },
];

export default function MethodPayment() {

    const navigate = useNavigate();

    const clickPayment = (paymentName) => {

        localStorage.setItem("FormaPago", paymentName);

        navigate("/cantidad");
    };

    return (
        <>

            Desde MethodPayment de pages

            <Box textAlign="center" marginBottom={10}>

                <Heading marginBottom={7} size="lg">
                    Selecciona tu método de pago
                </Heading>

                <Grid templateColumns="repeat (2,1fr)" gap={9} marginTop={4}>

                    {payments.map((paymentX, index) => (

                        <GridItem

                            key={index}
                            padding="4"
                            borderRadius="10"
                            cursor="pointer"
                            boxShadow="0px 4px 10px -3px rgb(117,117,177);"
                            _hover={{
                                shadow: "2xl",
                            }}
                            onClick={
                                () => clickPayment(paymentX.name)
                            }
                        >

                            <Box
                                justifyContent="space-evenly"
                                alignItems="center"
                                marginTop={4}
                                marginBottom={3}
                            >

                                <Heading size="lg" minHeight="80px">
                                    {paymentX.name}
                                </Heading>

                                <Image
                                    src={paymentX.image}
                                    alt={paymentX.name}
                                    width={120}
                                    margin="0 auto"
                                />

                            </Box>
                        </GridItem>
                    ))}
                </Grid>

            </Box>

            <Box>

                <Stack
                    direction="row"
                    spacing={4}
                    cursor="pointer"
                    onClick={() => navigate("/producto")}
                >
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        color="teal"
                        variant="outline"
                    >
                        Volver atrás y cambiar el producto
                    </Button>

                </Stack>

            </Box>
        </>
    );
}
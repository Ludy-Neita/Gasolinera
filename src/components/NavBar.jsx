import { Image, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import ImageShop from '../assets/img/shop.png';

export default function NavBar() {

    const navigate = useNavigate();
    const redirect = () => { // si doy click a la inamgen me lleve al home
        navigate("/")
    }

    return (
        <div>
            Desde NavBar

            <Box
                display="block"
                alignItems="center"
                justifyContent="space-evenly"
                borderBottom="1px solid #ddd"
            >

                <Image
                    src={ImageShop}
                    alt="Logotipo"
                    width={75}
                    margin="0 auto"
                    cursor="pointer"
                    onClick={redirect}  // si doy click a la inamgen me lleve al home
                />

                <Heading
                    as="h1"
                    size="sm"
                    IsTruncated
                    textTransform="uppercase"
                    textAlign="center"
                    color="#ff6b6b"
                    fontWeight="900"
                    paddingBottom="5"


                >
                    Gasolinera Lu 
                    
                </Heading>
            </Box>
        </div>
    );

}

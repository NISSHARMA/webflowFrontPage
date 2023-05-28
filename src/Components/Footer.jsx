import { Box } from '@chakra-ui/react'
import { Input, HStack, Button, Text } from '@chakra-ui/react'
function Footer() {
    return (
        <>
            <Box w='100%' p={2} color='grey' mt={5} display={{ base: 'block', md: 'block', lg: "flex" }} >
                <Box p={2} color='grey' display={{ base: 'block', md: 'block', lg: "flex" }} w={{ base: '100%', md: '100%', lg: "50%" }} >
                        <Box w={{lg: "30%"}} p={2} h={{ lg: "20"}} color='grey.800' style={{ border: "1px solid black" }}>
                            SUBSCRIBE TO GET THE LATEST PRODUCT UPDATES
                        </Box>
                        <Input placeholder='Enter Your Email' w={{lg: "30%"}} h='20' style={{ border: "1px solid black", borderRadius: "0px" }} />
                        <Button colorScheme='blue' variant='solid' h='20' style={{ borderRadius: "0px" }}  >
                            Subscribe
                        </Button>


                </Box>
                <Box p={4} color='grey.800' display={{ base: 'block', md: 'block', lg: "flex" }} alignItems={'center'} justifyContent={'space-around'} w={{ base: '100%', md: '100%', lg: "50%" }}>
                    <Text fontSize='lg' >About</Text>
                    <Text fontSize='lg' >Shiping & Return</Text>
                    <Text fontSize='lg' >Cookie Preferance</Text>
                    <Text fontSize='lg' >Webflow Ecommerce</Text>
                </Box>
            </Box>
        </>
    )
}

export default Footer
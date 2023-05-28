import { Box, Text, Image, Grid } from '@chakra-ui/react'
import CardMap from './CardMap'
import data from "../data"

function Products() {
    return (
        <>
            <Box w='90%' pt={5} color='white' m='auto'>
                <Text as='b' fontSize='3xl' font color='black' mt={2}>All items</Text>
            </Box>

            <Box width='90%' m='auto' >
                <Grid templateColumns={{base:"repeat(1,1fr)" ,lg:"repeat(4,1fr)",md:"repeat(2,1fr)"}} gap={10}>
                    {
                        data.map((el, i) => (
                            <CardMap key={i} {...el} />
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Products
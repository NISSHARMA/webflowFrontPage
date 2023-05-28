import { Box,Image,Text,Spacer } from '@chakra-ui/react'
import "./cardmap.css"

function CardMap({image,name,price}){
    return(
        <>
        <Box cursor='pointer' >
            <Image className='image' bg="#F5F5F5"   width="150%" src={image}></Image>
             <Box display='flex'>
                <Text mt={5} fontSize='xl'>{name}</Text>
                <Spacer/>
                <Text fontSize='xl' mt={5}>$ {price}</Text>
             </Box>
        </Box>
        </>
    )
}

export default CardMap
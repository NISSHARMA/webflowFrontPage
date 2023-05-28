import { Box, Text, Container, Button, Image } from '@chakra-ui/react'

function MiddleSection() {
    return (
        <>
            <Box bg='#F5F5F5' w='90%' m='auto' mt='10' p={4} color='white' display={{ base: 'block', lg: "flex", md: 'block' }}>
                <Box w={{ base: '100%', md: '100%', lg: "40%" }} p={4} color='black'  >
                    <Text pt={5} pb={20}>
                        WEBFLOW CONF COLLECTION / 2022
                    </Text>
                    <Text fontSize='2xl' as='b'  >
                        Webflow Conf
                    </Text>
                    <Text pt={5}  >
                        You’re already a maker, creator, or visionary behind the world’s greatest websites — now, you can look like one. Whether you joined us online, in person, or you’re planning to watch the recordings, memorialize this year’s Webflow Conf with some seriously cool swag.
                    </Text>

                    <Button
                        variant={'solid'}
                        colorScheme={'twitter'}
                        size={{ base: 'sm', md: 'lg' }}
                        mt={10}
                        borderRadius='0'
                        bg='#4353FF'
                    >
                        Explore Collection
                    </Button>
                </Box>
                <Box w={{ base: '100%', md: '100%', lg: "60%" }} color='white'  >
                    <Image width='100%' height='100%' src='https://assets-global.website-files.com/5f8f37508eb9142de7c970e8/6363cff6ea04f680551a9a22_webflow-conf-banner-p-1080.jpg'></Image>
                </Box>
            </Box>
        </>
    )
}

export default MiddleSection
import { HStack, VStack, Spacer, Box, Image } from "@chakra-ui/layout"

import banner from "../public/H-banner-light.svg"

const Home = () => {
    return (
        <HStack>
            <Box boxSize="lg">
                <Image src="/H-banner-light.svg" layout="fill" alt="Hacktoberfest Logo"></Image>
            </Box>
            <VStack></VStack>
        </HStack>
    )
}

export default Home

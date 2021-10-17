import { HStack, VStack, Spacer, Box } from "@chakra-ui/layout"
import { Img, Text } from "@chakra-ui/react"

const Home = () => {
  return (
    <VStack backgroundColor="peachgreen.50" justifyContent="center">
      <Img width={{sm: "100%", md:"80%", lg: "35%"}} src="/H-banner-light.svg"></Img>
      <Text fontSize="2xl" fontWeight="700" color="peachgreen.200">GDSC KIIT x IOT Lab</Text>
      <Text align="center" fontSize="3xl" fontWeight="500" px="5" pt="3" pb="9">Open Source Contributors and Maintainers for 2021</Text>
    </VStack>
  )
}

export default Home

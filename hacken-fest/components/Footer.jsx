import { Box, VStack } from '@chakra-ui/react'
import { Logo } from './Logo'
import SocialMediaLinks from './SocialMediaLinks'
import ContactInfo from './ContactInfo'

const Footer = () => (
    <Box as="footer" role="contentinfo" py="12" backgroundColor="peachgreen.50">
        <VStack>
            <Logo />
            <SocialMediaLinks />
            <ContactInfo />
        </VStack>
    </Box>
)

export default Footer
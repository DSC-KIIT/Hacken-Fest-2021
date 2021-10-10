import { Box, VStack } from '@chakra-ui/react'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

const Footer = () => (
    <Box as="footer" role="contentinfo" py="12" backgroundColor="peachgreen.50">
        <VStack>
            <Logo />
            <SocialMediaLinks />
        </VStack>
    </Box>
)

export default Footer
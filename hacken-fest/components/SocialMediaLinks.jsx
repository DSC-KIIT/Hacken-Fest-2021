import { ButtonGroup, IconButton, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { 
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from 'react-icons/fa'

const SocialMediaLinks = (props) => (
  <VStack>
    <Text fontSize="28" fontWeight="bold" color="peachgreen.200">
      Follow us for more exiciting stuff
    </Text>
    <ButtonGroup variant="ghost" color="deepgray" {...props}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/company/dsckiit/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="24px" />}
      />
      <IconButton
        as="a"
        href="https://github.com/DSC-KIIT"
        aria-label="GitHub"
        icon={<FaGithub fontSize="24px" />}
      />
      <IconButton
        as="a"
        href="https://www.facebook.com/dsckiit/"
        aria-label="Facebook"
        icon={<FaFacebook fontSize="24px" />}
      />
      <IconButton
        as="a"
        href="https://www.instagram.com/dsckiit/"
        aria-label="Instagram"
        icon={<FaInstagram fontSize="24px" />}
      />
      <IconButton
        as="a"
        href="https://twitter.com/DscKiit"
        aria-label="Twitter"
        icon={<FaTwitter fontSize="24px" />}
      />
      <IconButton
        as="a"
        href="https://medium.com/dsckiit"
        aria-label="Medium"
        icon={<FaMedium fontSize="24px" />}
      />
    </ButtonGroup>
  </VStack>
);

export default SocialMediaLinks

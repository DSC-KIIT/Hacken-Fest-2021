import { Box, Text, Link, Stack } from '@chakra-ui/react'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'

const ContactInfo = () => (
  <Box pt={15}>
    <Stack isInline spacing={4}>
      <Box as={MdLocationOn} size="24px" />
      <Text>KIIT University, Bhubaneswar</Text>
      <Box as={MdEmail} size="24px" />
      <Link href="mailto:dsckiit@gmail.com">dsckiit@gmail.com</Link>
      <Box as={MdPhone} size="24px" />
      <Link href="tel:+919874948947">+919874948947 (Sayan Nath)</Link>
    </Stack>
  </Box>
);

export default ContactInfo
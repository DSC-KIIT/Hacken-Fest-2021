import * as React from 'react'
import Image from "next/image"
import { Box } from '@chakra-ui/layout'

export const Logo = () => {
    return (
        <Box>
            <Image src="/H-banner-light.svg" alt="Hacktoberfest Logo" width={400} height={200}></Image>
        </Box>
    )
}
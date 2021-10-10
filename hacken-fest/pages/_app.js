import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import "@fontsource/inter/100.css"
import "@fontsource/inter/200.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/inter/900.css"


const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter"
  },
  colors: {
    orange: "#F74700",
    red: "#B53A25",
    deepgray: "#2B3531",
    black: "#000000",
    white: "#ffffff",
    peachgreen: {
      50: "#f4f0e1",
      100: "#91A88C",
      200: "#A88771",
      300: "#677662"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
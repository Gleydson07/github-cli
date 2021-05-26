import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        body: "Poppins"
    },

    styles: {
        global: {
            body: {
                bg: "gray.900",
            }
        }
    }
})
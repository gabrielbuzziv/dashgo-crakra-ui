import { Box, Stack, Text } from "@chakra-ui/layout"
import { ReactNode } from "react"

interface NavSessionProps {
  title: string;
  children?: ReactNode
}

export function NavSession({ title, children }: NavSessionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>

      <Stack spacing="4" marginTop="8" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  )
}
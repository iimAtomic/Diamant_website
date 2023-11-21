'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
})

export default function Text2() {
  return (
    <Box p={4}>
      <Stack spacing={2} as={Container} maxW={'3xl'} textAlign={'start'}>
        <Heading fontSize={'3xl'}>Abonnement disponibles</Heading>
      </Stack>
    </Box>
  )
}
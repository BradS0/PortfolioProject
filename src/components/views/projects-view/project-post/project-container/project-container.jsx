import {
  Image, Text, Button, Flex,
  Box,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { GoMarkGithub } from 'react-icons/go';

function ProjectContainer({ projectData, projectImage }) {
  return (
    <Box
      border="2px solid #9CCE7185"
      borderRadius="5px"
      boxShadow="base"
      overflow="hidden"
      width="100%"
      mb="1.5rem"
    >
      <Flex
        direction={['column', 'column', 'row']}
        align="stretch"
      >
        <Box
          width={['100%', '100%', '40%']}
          height={['300px', '400px', '300px']}
          position="relative"
        >
          <Image
            src={projectImage}
            alt="Project Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <VStack
          width={['100%', '100%', '60%']}
          align="stretch"
          spacing="0"
          p="0.5rem"
        >
          <Box
            borderBottom="1px solid #9CCE7185"
            pb="0.25rem"
            mb="0.25rem"
          >
            <Text
              fontFamily="Quicksand"
              fontSize="1.2rem"
              fontWeight="semibold"
            >
              {projectData.name}
            </Text>
          </Box>

          <Text
            fontFamily="Quicksand"
            fontSize="0.9rem"
            flexGrow="1"
            mb="0.25rem"
          >
            {projectData.description}
          </Text>

          <HStack>
            <NextLink href={projectData.html_url} passHref>
              <Button
                size="sm"
                mt={['0.5rem', '0.5rem', '0']}
                variant="ghost"
                bg="#9CCE7150"
                leftIcon={<GoMarkGithub />}
                fontFamily="Quicksand"
              >
                Source
              </Button>
            </NextLink>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default ProjectContainer;

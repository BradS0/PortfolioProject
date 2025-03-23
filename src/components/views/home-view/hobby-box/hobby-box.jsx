import {
  Container, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

function HobbyBox() {
  const textStyle = { fontSize: '0.9rem', fontFamily: 'Quicksand' };
  return (
    <Container
      mx="0"
      my="1.5rem"
      minWidth="100%"
      border="1px solid #9CCE7185"
      borderRadius="5px"
      shadow="base"
      display="flex"
      px="1rem"
      flexDirection="column"
    >
      <Text
        fontFamily="Quicksand"
        fontSize="1.5rem"
        paddingTop="0.5rem"
        fontWeight="bold"
        borderBottom="1px solid #C6C6C6"
        maxWidth="15rem"
      >
        Technical Knowledge
      </Text>

      <Container
        m="0"
        paddingY="0.5rem"
        paddingX="0rem"
        minWidth="100%"
        display="flex"
        flexDirection="column"
      >
        <UnorderedList
          pl="0.5rem"
        >
          <ListItem>
            <Text style={textStyle}> Industry Web development experience using HTML, CSS and Modern JavaScript (including Angular and React), with some experience in TypeScript and PHP as well as developing progressive web apps. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Industry API development experience using Modern JavaScript and AWS Cloud technologies. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Application development experience using Java, Python, C++, Haskell and JavaScript (with Node.js). </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Mobile application development experience using Java and Maven (with Android Studio), as well as experience developing complete mobile applications using Dart (including Flutter) for iOS and Android compliance. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Industry experience in working with Git version control and maintenance / contribution to code repositories, including experience using Git automation with CI/CD. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Comfortable in a Windows and MacOS environment, with experience in Linux. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Competent with Bash commands and scripts. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Able to create and modify SQL queries, with experience using MariaDB, SQLite and Athena. </Text>
          </ListItem>
          <ListItem>
            <Text style={textStyle}> Proficient with the use of Adobe Photoshop, Figma and similar creative softwares. </Text>
          </ListItem>
        </UnorderedList>

        <Text
          fontFamily="Quicksand"
          fontSize="1.5rem"
          paddingTop="0.5rem"
          fontWeight="bold"
          borderBottom="1px solid #C6C6C6"
          maxWidth="11rem"
        >
          Technical Skills
        </Text>

        <UnorderedList m="0">
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Programming Languages
          </Text>
          <UnorderedList px="0.5rem">
            {/* <ListItem>
                <Text style={textStyle}> In order of confidence & familiarity </Text>
              </ListItem> */}
            <ListItem>
              <Text style={textStyle}> HTML, CSS & JavaScript </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Java </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Python </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> SQL </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> C++ </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Dart </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Haskell </Text>
            </ListItem>
          </UnorderedList>
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Cloud Technologies
          </Text>
          <UnorderedList px="0.5rem">
            <ListItem>
              <Text style={textStyle}> AWS </Text>
            </ListItem>
          </UnorderedList>
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Frontend Frameworks
          </Text>
          <UnorderedList px="0.5rem">
            <ListItem>
              <Text style={textStyle}> React & NextJS </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> AWS Amplify </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Flutter </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Angular </Text>
            </ListItem>
          </UnorderedList>
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Frontend Libraries
          </Text>
          <UnorderedList px="0.5rem">
            <ListItem>
              <Text style={textStyle}> ChakraUI </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Tailwind </Text>
            </ListItem>
          </UnorderedList>
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Server Frameworks
          </Text>
          <UnorderedList px="0.5rem">
            <ListItem>
              <Text style={textStyle}> Next </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> Express </Text>
            </ListItem>
          </UnorderedList>
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Databases
          </Text>
          <UnorderedList px="0.5rem">
            <ListItem>
              <Text style={textStyle}> SQLite </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> AWS DynamoDB </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> AWS Athena </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> MariaDB </Text>
            </ListItem>
          </UnorderedList>
          <Text
            fontFamily="Quicksand"
            fontSize="1.2rem"
            fontWeight="200"
          >
            Ops
          </Text>
          <UnorderedList px="0.5rem">
            <ListItem>
              <Text style={textStyle}> Gitlab CI/CD </Text>
            </ListItem>
            <ListItem>
              <Text style={textStyle}> AWS CloudFormation </Text>
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </Container>
    </Container>
  );
}

export default HobbyBox;

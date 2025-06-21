import React from 'react';
import {
  Box,
  Button,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
  Flex,
  Spacer,
  Badge,
  useColorModeValue
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { FiUsers, FiShield, FiAlertCircle, FiBarChart2, FiPackage } from 'react-icons/fi';

const HomeMain = () => {
      const navigate = useNavigate();
    
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  
  const handleEmployeeRegister = () => {
    console.log('Navigate to Employee Register');
    navigate('/h3')
    // Add your navigation logic here
  };

  const handleAdminLogin = () => {
    console.log('Navigate to Admin Panel');
     window.location.href = 'https://emp-inv-frontend2.vercel.app/';
    // Add your navigation logic here
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Main Content */}
      <Container maxW="6xl" py={12}>
        <VStack spacing={12}>
          {/* Hero Section */}
          <VStack spacing={6} textAlign="center">
            <Heading size="2xl" color="blue.600">
              Workplace Management System (EmpInv)
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Streamline your operations with our comprehensive management platform
            </Text>
          </VStack>

          {/* Action Buttons */}
          <HStack spacing={6}>
            <Button
              size="lg"
              colorScheme="blue"
              leftIcon={<Icon as={FiUsers} />}
              onClick={handleEmployeeRegister}
              px={8}
              py={6}
              fontSize="lg"
            >
              Employee Register
            </Button>
            <Button
              size="lg"
              colorScheme="green"
              leftIcon={<Icon as={FiShield} />}
              onClick={handleAdminLogin}
              px={8}
              py={6}
              fontSize="lg"
            >
              Admin Panel
            </Button>
          </HStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {/* Issue Reporting System */}
            <Card bg={cardBg} shadow="lg">
              <CardBody>
                <VStack spacing={4} align="start">
                  <HStack>
                    <Icon as={FiAlertCircle} color="red.500" boxSize={6} />
                    <Heading size="md">Issue Reporting System</Heading>
                  </HStack>
                  <Text color="gray.600">
                    Advanced issue tracking with date monitoring and automated workflow management.
                  </Text>
                  <VStack spacing={2} align="start" w="full">
                    <HStack justify="space-between" w="full">
                      <Text fontSize="sm" fontWeight="semibold">Resolution Time Improvement:</Text>
                      <Badge colorScheme="green" variant="solid">-30%</Badge>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">
                      Real-time date tracking and priority-based resolution
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Admin Panel */}
            <Card bg={cardBg} shadow="lg">
              <CardBody>
                <VStack spacing={4} align="start">
                  <HStack>
                    <Icon as={FiBarChart2} color="blue.500" boxSize={6} />
                    <Heading size="md">Admin Dashboard</Heading>
                  </HStack>
                  <Text color="gray.600">
                    Comprehensive admin panel for issue assignment and resolution management.
                  </Text>
                  <VStack spacing={2} align="start" w="full">
                    <HStack justify="space-between" w="full">
                      <Text fontSize="sm" fontWeight="semibold">Workflow Transparency:</Text>
                      <Badge colorScheme="blue" variant="solid">Enhanced</Badge>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">
                      Cross-department visibility and accountability
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Inventory Management */}
            <Card bg={cardBg} shadow="lg">
              <CardBody>
                <VStack spacing={4} align="start">
                  <HStack>
                    <Icon as={FiPackage} color="purple.500" boxSize={6} />
                    <Heading size="md">Inventory Management</Heading>
                  </HStack>
                  <Text color="gray.600">
                    Smart inventory allocation and tracking system with real-time updates.
                  </Text>
                  <VStack spacing={2} align="start" w="full">
                    <HStack justify="space-between" w="full">
                      <Text fontSize="sm" fontWeight="semibold">Update Accuracy:</Text>
                      <Badge colorScheme="purple" variant="solid">+40%</Badge>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">
                      Real-time item allocation and tracking
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8} mt={16}>
        <Container maxW="6xl">
          <VStack spacing={4}>
            <Flex w="full" direction={{ base: 'column', md: 'row' }} align="center">
              <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
                <Heading size="md">Workplace Management System (EmpInv)</Heading>
                <Text fontSize="sm" color="gray.400">
                  Empowering organizations with efficient management solutions
                </Text>
              </VStack>
              <Spacer />
              <HStack spacing={6} mt={{ base: 4, md: 0 }}>
                <Text fontSize="sm" color="gray.400">
                  © 2024 All rights reserved
                </Text>
              </HStack>
            </Flex>
            <Box w="full" h="1px" bg="gray.600" />
            <HStack spacing={8} fontSize="sm" color="gray.400">
              <Text>Issue Resolution: 30% faster</Text>
              <Text>Workflow Transparency: Enhanced</Text>
              <Text>Inventory Accuracy: 40% improved</Text>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeMain;
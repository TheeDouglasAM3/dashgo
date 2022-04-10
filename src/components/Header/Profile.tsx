import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Douglas Marcelino</Text>
          <Text color="gray.300" fontSize="small">
            douglasmarcelinodev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Douglas Marcelino"
        src="https://github.com/theedouglasam3.png"
      />
    </Flex>
  );
}

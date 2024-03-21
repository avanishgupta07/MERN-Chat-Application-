
import { FormLabel, FormControl } from '@chakra-ui/form-control';
import React, { useState } from 'react';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';

export const Signup= () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, Setpassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name'</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}

        />

      </FormControl>
    </VStack>
  );
};


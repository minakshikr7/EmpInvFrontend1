import header from '../Styles/header.scss'
import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import  { useContext } from 'react';
import { Context } from '../index';
import toast from 'react-hot-toast';

const Header = () => {
  const {userr} = useContext(Context);
  return (
    <> 
       <HStack bgColor={"blackAlpha.900"} p={'6'}  > 
      <Button ml={400} variant={'ghost'} colorScheme='messenger'>
  <Link to='/h2'>Home</Link>
      </Button>

     <>
      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/status'>Status</Link>
      </Button>

      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/report'>Report</Link>
      </Button>

      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/profile'>Profile</Link>
      </Button></> 
      
      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/about'>About</Link>
      </Button>

      
      </HStack>
  </>
  );
};








export default Header;
import {
	Box,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
} from '@chakra-ui/react';

import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FcAbout, FcHome, FcMenu } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
	<Flex p='2' borderBottom='1px' borderColor='yellow.600'>
		<Box fontSize='3xl' color='yellow.500' fontWeight='bold'>
			<Link href='/' paddingLeft='2'>
				Dubai Homes
			</Link>
		</Box>
		<Spacer />
		<Box fontSize='3xl' color='yellow.500' fontWeight='bold'>
			<Link href='/search' paddingLeft='2'>
				Search
			</Link>
		</Box>
		<Spacer />
		<Box fontSize='3xl' color='yellow.500' fontWeight='bold'>
			<Link href='/search?purpose=for-sale' paddingLeft='2'>
				Buy A Property
			</Link>
		</Box>
		<Spacer />
		<Box fontSize='3xl' color='yellow.500' fontWeight='bold'>
			<Link href='/search?purpose=for-rent' paddingLeft='2'>
				Rent A Property
			</Link>
		</Box>
		<Spacer />
		<Box fontSize='3xl' color='yellow.500' fontWeight='bold'></Box>
		<Spacer />
		<Box>
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<FcMenu />}
					variant='outlined'
					color='yellow.400'
					borderColor='yellow.500'
				/>
				<MenuList>
					<Link href='/' passHref>
						<MenuItem icon={<FcHome />}>Home</MenuItem>
					</Link>
					<Link href='/search' passHref>
						<MenuItem icon={<BsSearch />}>Search</MenuItem>
					</Link>
					<Link href='/search?purpose=for-sale' passHref>
						<MenuItem icon={<FcAbout />}>Buy A Property</MenuItem>
					</Link>
					<Link href='/search?purpose=for-rent' passHref>
						<MenuItem icon={<FiKey />}>Rent A Property</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Box>
	</Flex>
);
export default Navbar;

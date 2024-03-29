import {Box,Image,Flex,} from "@chakra-ui/react"
import {Link,NavLink} from "react-router-dom"
import styles from "../Components/Navbar.module.css"
const links = [

    { path: "/", title: "Home" },
    { path: "/women", title: "Women" },
    { path: "/men", title: "Men" },
    { path: "/Kids", title: "Kids" },
    { path: "/designers", title: "Designers" },
    { path: "/community", title: "Community" },
    { path: "/sale", title: "Sale" },
    { path: "/why ", title: "Why" },
    { path: "/country", title: "Country" },

   
  ];

  const links2=[
    { path: "/login ", title: "Login" },
    { path: "/signup", title: "Signup" },
  ]

function Navbar(){
    return (
        <Box boxSize="90%" margin={"auto"}>
          <Flex >
            <Box>
               <Image boxSize='100px'  src='https://cdn.modesens.com/static/img/20190228newlogo-black.svg'/> 
            </Box>
   
        {/* <Image src='https://cdn.modesens.com/static/img/20190228newlogo-black.svg' /> */}
            <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "45%",
        margin: "auto",
       
      }}
  >
    {links.map((link)=>(
 
      <NavLink
       className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
      ><Box>{link.title}</Box></NavLink>
    ))}

    
    
  </Box>

  <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "20%",
        margin: "auto",
       
      }}
  >
    {links2.map((link)=>(
 
      <NavLink
       className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
      ><Box>{link.title}</Box></NavLink>
    ))}

    
    
  </Box>


 
          </Flex>




        </Box>
    )
}
export default Navbar;




// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from '@chakra-ui/react';
// import {FaCartPlus } from "react-icons/fa"
// import {FiUser} from "react-icons/fi";
// import {BsSearch} from "react-icons/bs";
// //import {FaBiUser} from "react-icon/fa"
// import {Link as RouterLink} from "react-router-dom"
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <Flex
//         bg={useColorModeValue('white', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}
//         minH={'60px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}>
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}>
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//           <Text
//             textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//             fontFamily={'heading'}
//             color={useColorModeValue('gray.800', 'white')}>
//             MODERN
//           </Text>

//           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
         

//           flex={{ base: 1, md: 0 }}
//           justify={'flex-end'}
//           direction={'row'}
//           spacing={6}
//             >
          
//          <button
//          marginTop={20}
//          height={200}>
//           <FaCartPlus size={"28"}/>
//           </button>
          
//           <Button
//             as={'a'}
//             fontSize={'sm'}
//             fontWeight={400}
//             variant={'link'}
//             href={'#'}>
//               <RouterLink to="/Login">
//                <FiUser size={"28"}/> 
//                 </RouterLink>
            
//           </Button>
          
//           <Button
//             display={{ base: 'none', md: 'inline-flex' }}
//             fontSize={'sm'}
//             fontWeight={600}
//             color={'black'}
//             word-spacing={8}
           
//             href={'#'}
//             _hover={{
//               bg: 'pink.300',
//             }}>
//               <BsSearch size={"24"}/>
//             SEARCH

//           </Button>
//         </Stack>
        
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200');
//   const linkHoverColor = useColorModeValue('gray.800', 'white');
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

//   return (
//     <Stack direction={'row'} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={'hover'} placement={'bottom-start'}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? '#'}
//                 fontSize={'sm'}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: 'none',
//                   color: linkHoverColor,
//                 }}>
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={'xl'}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={'xl'}
//                 minW={'sm'}>
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//   return (
//     <Link
//       href={href}
//       role={'group'}
//       display={'block'}
//       p={2}
//       rounded={'md'}
//       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//       <Stack direction={'row'} align={'center'}>
//         <Box>
//           <Text
//             transition={'all .3s ease'}
//             _groupHover={{ color: 'pink.400' }}
//             fontWeight={500}>
//             {label}
//           </Text>
//           <Text fontSize={'sm'}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={'all .3s ease'}
//           transform={'translateX(-10px)'}
//           opacity={0}
//           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//           justify={'flex-end'}
//           align={'center'}
//           flex={1}>
//           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       p={4}
//       display={{ md: 'none' }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }: NavItem) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? '#'}
//         justify={'space-between'}
//         align={'center'}
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text
//           fontWeight={600}
//           color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: 'WOMEN',
//     children: [
//       {
//         label: 'Explore Design Work',
//         subLabel: 'Trending Design to inspire you',
//         href: '#',
//       },
//       {
//         label: 'New & Noteworthy',
//         subLabel: 'Up-and-coming Designers',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'MEN',
//     children: [
//       {
//         label: 'Job Board',
//         subLabel: 'Find your dream design job',
//         href: '#',
//       },
//       {
//         label: 'Freelance Projects',
//         subLabel: 'An exclusive list for contract work',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'BEAUTY',
//     href: '#',
//   },
//   {
//     label: 'KIDS',
//     href: '#',
//   },
//   {
//       label: 'HOME',
//       subLabel: 'An exclusive list for contract work',
//       href: '#',
//     },
//     {
//       label: 'DESIGNER',
//       subLabel: 'An exclusive list for contract work',
//       href: '#',
//     },
//     {
//       label: 'COMMUNITY',
//       subLabel: 'An exclusive list for contract work',
//       href: '#',
//     },
//     {
//       label: 'SALE',
//       subLabel: 'An exclusive list for contract work',
//       href: '#',
//     },
//     {
//       label: 'GIFT GUIDE',
//       subLabel: 'An exclusive list for contract work',
//       href: '#',
//     },
    
// ];
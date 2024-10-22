// // @/components/DisableBodyScroll.js
// import React, { useEffect, useMemo } from 'react';

// interface Props {
//   isToggle: boolean
// }

// const DisableBodyScroll = ({ isToggle }: Props) => {
//    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   useMemo(() => {
//     const isMobileScreen = window.innerWidth <= 768;
//     console.log(isMobileScreen)
//     isToggle && isMobileScreen
//       ? (document.getElementsByTagName('body')[0].classList.add("overflow-y-hidden"),
//         document.getElementsByTagName('html')[0].classList.add("overflow-y-hidden"))
//       : (document.getElementsByTagName('body')[0].classList.remove("overflow-y-hidden"),
//         document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden"));
//   }, [isToggle]);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <></>
//   )
// }

// export default DisableBodyScroll;
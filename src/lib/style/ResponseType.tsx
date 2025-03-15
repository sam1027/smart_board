import React,{ Fragment } from 'react';
import {useMediaQuery} from 'react-responsive';


interface IProps {
  children : React.ReactNode,
}
export const Mobile = ({children}:IProps) => {
  const isMobile = useMediaQuery({maxWidth:768});
  return <Fragment>{isMobile && children}</Fragment>
}

export const PC = ({children}:IProps) => {
  const isPc = useMediaQuery({minWidth : 1367});
  return <Fragment>{isPc && children}</Fragment>
}


export const Tablet = ({children}:IProps) => {
  const isTablet =  useMediaQuery({ maxWidth: 1366 , minWidth : 769}) ;
  return <Fragment>{isTablet && children}</Fragment>
}


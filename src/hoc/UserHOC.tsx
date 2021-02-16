




import React from 'react';
import {UserClassComponent} from './UserClassComponent';


 export  const accordionUser = (WrappedComponent:any)=>{
    return (props:any)=>{
        return <UserClassComponent>HOC {WrappedComponent ({...props}) }</UserClassComponent>
    }
}
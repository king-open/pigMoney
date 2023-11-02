import {Icon} from './Icon.tsx';
import React from 'react';

interface Props{
  title?:string
}
export const Topnav:React.FC<Props> = ({title = 'pigMoney'}) =>{
  return (
    <div text-white flex items-center pt-24px pb-8px px-24px>
      <Icon name="menu" className="w-24px h-24px mr-16px" />
      <h1 text-24px>{title}</h1>
    </div>
  )
}
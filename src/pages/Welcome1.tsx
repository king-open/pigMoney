import * as React from 'react';
import p from '../assets/images/welcome1.svg'
import {Link} from 'react-router-dom';

export const Welcome1:React.FC = ()=>{
  return (
    <div>
      <img src={p} w-128px h-130px />
      <h2>
        会挣钱 <br/>
        还要会省钱
      </h2>
      <div mt-64px>
        <Link text-32px color="#6035BF" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>
  )
}

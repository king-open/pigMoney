import styled from 'styled-components';
import {AddItemFloatButton} from '../components/AddItemFloatButton.tsx';
import {TimeRangePicker} from '../components/TimeRangePicker.tsx';
import {Topnav} from '../components/Topnav.tsx';
import {ItemsList} from './ItemsList.tsx';
import {ItemsSummary} from './ItemsSummary.tsx';
import React from 'react';

const Div = styled.div`
  background: linear-gradient(0deg,rgba(143,76,215,1) 0%,
  rgba(92,51,190,1) 100%);
`

export const ItemsPage:React.FC = ()=>{
  return  (
    <div>
      <Div>
        <Topnav/>
        <TimeRangePicker/>
      </Div>
      <ItemsSummary/>
      <ItemsList/>
      <AddItemFloatButton/>
    </div>
  )
}
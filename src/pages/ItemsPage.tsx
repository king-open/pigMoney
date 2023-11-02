import styled from 'styled-components';
import {AddItemFloatButton} from '../components/AddItemFloatButton.tsx';
import {TimeRange, TimeRangePicker} from '../components/TimeRangePicker.tsx';
import { TopMenu } from '../components/TopMenu'

// @ts-ignore
import { TopNav } from '../components/TopNav'
import { useMenuStore } from '../stores/useMenuStore'
import {ItemsList} from './ItemsPage/ItemsList.tsx';
import {ItemsSummary} from './ItemsPage/ItemsSummary.tsx';
import React, {useState} from 'react';


const Div = styled.div`
  background: linear-gradient(0deg,rgba(143,76,215,1) 0%,
  rgba(92,51,190,1) 100%);
`

export const ItemsPage:React.FC = ()=>{
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const { visible ,setVisible} = useMenuStore()
  return  (
    <div>
      <Div>
        <TopNav />
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
      </Div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
      <TopMenu visible={visible} onClickMask={() => { setVisible(false) }} />
    </div>
  )
}
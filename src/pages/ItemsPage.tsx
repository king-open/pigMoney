import styled from 'styled-components';
import {AddItemFloatButton} from '../components/AddItemFloatButton.tsx';
import {TimeRange, TimeRangePicker} from '../components/TimeRangePicker.tsx';
import { TopMenu } from '../components/TopMenu'
import {Gradient} from '../components/Gradient.tsx';
import {Icon} from '../components/Icon.tsx';

// @ts-ignore
import { TopNav } from '../components/TopNav'
import { useMenuStore } from '../stores/useMenuStore'
import {ItemsList} from './ItemsPage/ItemsList.tsx';
import {ItemsSummary} from './ItemsPage/ItemsSummary.tsx';
import React, {useState} from 'react';




export const ItemsPage:React.FC = ()=>{
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const { visible ,setVisible} = useMenuStore()
  return  (
    <div>
      <Gradient>
        <TopNav title="账目列表" icon={
          <Icon name="menu" className="w-24px h-24px"
                onClick={() => { setVisible(!visible) }} />
        } />
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
      </Gradient>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
      <TopMenu visible={visible} onClickMask={() => { setVisible(false) }} />
    </div>
  )
}
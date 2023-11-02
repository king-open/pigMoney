import styled from 'styled-components';
import {AddItemFloatButton} from '../components/AddItemFloatButton.tsx';
import {TimeRange, TimeRangePicker} from '../components/TimeRangePicker.tsx';
import {Topnav} from '../components/Topnav.tsx';
import {ItemsList} from './ItemsPage/ItemsList.tsx';
import {ItemsSummary} from './ItemsPage/ItemsSummary.tsx';
import {useState} from 'react';


const Div = styled.div`
  background: linear-gradient(0deg,rgba(143,76,215,1) 0%,
  rgba(92,51,190,1) 100%);
`

export const ItemsPage:React.FC = ()=>{
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }, {
      id: 2,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }
  ])
  return  (
    <div>
      <Div>
        <Topnav/>
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
      </Div>
      <ItemsSummary/>
      <ItemsList items={items}/>
      <AddItemFloatButton/>
    </div>
  )
}
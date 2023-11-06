import type { MockMethod } from 'vite-plugin-mock'
import { itemsMock } from './items.mock'
import { meMock } from './me.mock'
import {sessionMock} from '../../mock/session.mock.ts';
export default [
  meMock,
  itemsMock,
  sessionMock
] as MockMethod[]
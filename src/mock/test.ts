import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/v1/me',
    method: 'get',
    timeout:1000,
    response: (): Resource<User> => {
      return {
        id: 1,
        email: 'tomesking@hotmail.com',
        updated_at: '2023-08-01T00:00:00.000Z',
        created_at: '2023-08-01T00:00:00.000Z',
      }
    },
  },
  {
    url: '/api/v1/items',
    method: 'get',
    response: (): Resource<Item> => {
      return {
      resource:[],
        pager: {
          page: 1,
          per_page: 25,
          count: 0
        }
      }
    },
  },
] as MockMethod[]
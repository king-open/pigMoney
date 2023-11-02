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
    timeout:1000,
    response: (): Resource<Item> => {
      return {
        resources: [{
          id: 1,
          user_id: 1,
          amount: 1000,
          tag_ids: [1, 2],
          happen_at: '2023-08-01T00:00:00.000Z',
          created_at: '2023-08-01T00:00:00.000Z',
          updated_at: '2023-08-01T00:00:00.000Z',
          kind: 'expenses',
        }],
        pager: {
          page: 1,
          per_page: 25,
          count: 100
        }
      }
    },
  },
] as MockMethod[]
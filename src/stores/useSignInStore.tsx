import create from 'zustand'

interface Data {
  email: string
  code: string
}

interface SignIn {
  data: Data
}

export const useSignInStore = create<SignIn>((set) => (
  {
    data: {
      email: '',
      code: ''
    },
    setData: (data: Partial<Data>) => {
      set(state => ({
        data: {
          ...state.data,
          ...data
        }
      }))
    },
  }
))
export {}

declare global {
  interface process {
    env: {
      REACT_APP_ROOT_API_URL: string
    }
  }
}

export interface LoginParams {
  username: string
  password: string
}

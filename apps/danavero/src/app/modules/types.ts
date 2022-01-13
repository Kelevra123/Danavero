export interface IUser {
  login: string,
  id: number,
  avatar_url: string | null,
  html_url: string,
  name: string | null,
  company: string | null,
  blog: string | Array<string> | null,
  location: string | null,
  email: string | null,
  bio: string | null,
  public_repos: number | null,
  followers: number | null
}

export interface ITableElement {
  avatar_url: string | null,
  login: string | null,
  html_url: string | null
  id: number
}

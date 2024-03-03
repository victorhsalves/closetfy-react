export type ClothingInfo = {
  name: string
  primaryImageUrl: string
  imagesUrl: Array<string>
  rating: number
  sizes: Array<string | number>
  description: string
  style: string
}

export type Product = {
  id: string | null
  nameOfProduct: string | null
  nameOfCollection: string | null
  dateOfCollection: string | null
  closetId: string | null
  like: string | null
  image: string | null
  created_at: string | null
}

export type Category = {
  id: string | null
  nameOfCategory: string | null
}

export type Closet = {
  id: string
  name: string
  user: User
  created_at: string
  product: Array<Product>
  category: Array<Category>
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  cpfNumber: string
  created_at: string
  image: string
}

export type API  = {
  retrieveClosetById: Closet
}
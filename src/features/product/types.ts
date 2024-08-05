export interface ProductDemensions {
  width: number
  height: number
  depth: number
}

export interface ProductReview {
  rating: number
  comment: string
  date: Date
  reviewerName: string
  reviewerEmail: string
}

export interface ProductMeta {
  createdAt: Date
  updatedAt: Date
  barcode: string
  qrCode: string
}

export interface Product {
  id: string
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: ProductDemensions
  warrantlyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: ProductReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: ProductMeta
  thumbnail: string
  images: string[]
}

export interface ProductPagingResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

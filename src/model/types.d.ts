
// Context
interface IContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  mode: boolean;
  setMode: React.Dispatch<any>;
}


// Sub Categories
interface ISubCategory {
  id: number
  name: string
  slug: string
  description?: string
  category_id: number
  image: string
  is_active: number
  created_at: string
  updated_at: string
  order: number
  img_url: string
}


// Categories
interface ICategories {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  created_at: string;
  updated_at: string;
  order: number;
  img_url: string;
}


// Revies
interface IReviews {
  id: number
  full_name: string
  address: string
  comment: string
  image: string
  created_at: string
  updated_at: string
  img_url: string
}


// API Response
interface IResponse {
  status: boolean;
  message: string;
  data: ICategories[] | IReviews[];
}


// Product Type

interface IProduct {
  id: number
  product_id: string
  description: any
  sub_category_id: number
  image: string
  price: string
  is_active: number
  created_at: string
  updated_at: string
  order: number
  img_url: string
  sub_category_name: string
  sub_category: SubCategory
}

interface SubCategory {
  id: number
  name: string
  slug: string
  description: any
  category_id: number
  image: string
  is_active: number
  created_at: string
  updated_at: string
  order: number
  img_url: string
}

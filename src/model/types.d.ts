interface IProduct {
  id: number;
  name: string;
  price: number;
  product_id: string;
  rate: number;
}

interface IContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  mode: boolean;
  setMode: React.Dispatch<any>;
}

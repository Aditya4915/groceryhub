import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

interface ProductType { id: string; name: string; weight: string; MRP: number; discount: number; price: number;}

interface ProductState 
{
  items: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => 
    {
      try 
      {
        const querySnapShot = await getDocs(collection(db, "products"));
        const products = querySnapShot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<ProductType, "id">),}));  
        return products;
      } 
      catch (error) 
      {
        console.log(error);
      }
    }
);


export const addProduct = createAsyncThunk("products/addProduct",
  async (product: Omit<ProductType, "id">) => 
  {
    try 
    {
      const docref = await addDoc( collection(db, "products"), product );
      return { id: docref.id, ...product, };
    } 
    catch (error) 
    {
      console.log(error);
    }
  }
);

const productSlice = createSlice(
{
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => 
  {
    builder

      // FETCH PRODUCTS
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ADD PRODUCT
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })

      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
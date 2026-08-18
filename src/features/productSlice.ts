import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

interface ProductType {
  id: string;
  name: string;
  weight: string;
  MRP: number;
  discount: number;
  price: number;
}

interface ProductState {
  items: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  ProductType[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: ProductType[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<ProductType, "id">),
    }));

    return products;
  } catch (error) {
    console.log("Fetch Products Error:", error);
    return rejectWithValue("Failed to fetch products");
  }
});

export const addProduct = createAsyncThunk<
  ProductType,
  Omit<ProductType, "id">,
  { rejectValue: string }
>("products/addProduct", async (product, { rejectWithValue }) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);

    return { id: docRef.id, ...product };
  } catch (error) {
    console.log("Add Product Error:", error);

    return rejectWithValue("Failed to add product");
  }
});

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

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
        state.error = action.payload ?? "Something went wrong";
      })

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

        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export default productSlice.reducer;

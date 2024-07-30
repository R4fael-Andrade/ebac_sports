import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((item) => item.id === favoritos.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== favoritos.id
        )
      }
    }
  }
})

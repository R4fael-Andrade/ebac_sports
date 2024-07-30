import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

// import { adicionar } from '../../store/reducers/carrinho'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  // adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  // adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  // function adicionar() {
  //   console.log('teste')
  // }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            // aoComprar={adicionar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

interface ProductImageProps {
  $imageUrl: string
}

export const ProductImage = styled.div<ProductImageProps>`
  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 380px;
  position: relative;
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0px 5px 3px #00000088;
  transition: all 300ms;

  &:hover {
    filter: brightness(0.5);

    button {
      display: block;
    }
  }
`

export const ProductInfo = styled.div`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  width: 300px;
  text-overflow: ellipsis;

  p {
    font-weight: 500;
  }

  p:nth-child(1) {
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const ButtonContainer = styled.div`
  padding: 1.25rem;
  width: 100%;
  position: absolute;
  bottom: 0;

  button {
    transition: all 300ms;
    display: none;
  }
`

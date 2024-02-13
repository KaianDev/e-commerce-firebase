import styled from 'styled-components'

export const CategoryDetailsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 1.25rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const CategoryDetailsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: max-content;
`

export const CategoryDetailsTitle = styled.h2`
  font-size: 1.3125rem;
  font-weight: bold;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
`

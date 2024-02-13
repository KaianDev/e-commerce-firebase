import styled from 'styled-components'

export const CategoryOverviewContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  overflow-x: auto;
`

export const CategoryOverviewTitle = styled.strong`
  font-size: 1.3125rem;
`

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  row-gap: 2.5rem;
  flex-wrap: wrap;
`

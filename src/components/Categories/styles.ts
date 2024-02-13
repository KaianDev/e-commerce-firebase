import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
`

export const CategoriesContent = styled.main`
  max-width: 1440px;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-areas:
    'a b'
    'c c'
    'd e';
  gap: 1rem;
  padding: 2rem;
`

interface CategoryItemProps {
  $imageUrl: string
}

export const CategoryItem = styled.div<CategoryItemProps>`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-blend-mode: color;
  background-color: #00000033;
  background-image: url(${(props) => props.$imageUrl});
  background-position: center center;
  background-size: cover;

  &:nth-child(1) {
    grid-area: a;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }

  &:nth-child(4) {
    grid-area: d;
  }

  &:nth-child(5) {
    grid-area: e;
  }
`

export const CategoryItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  background-color: ${Colors.bgOpacity};
  border-radius: 1rem;
  font-weight: 600;
  color: ${Colors.text.light};
  cursor: pointer;

  p {
    font-weight: 400;
  }
`

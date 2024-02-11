import styled from 'styled-components'

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
  padding: 1.25rem;
`

export const LoginContent = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: center;
`

export const LoginTitle = styled.h2`
  font-size: 1.3125rem;
  font-weight: 600;
`

export const LoginSubtitle = styled.p`
  font-size: 1rem;
`

import styled from 'styled-components'

type ICkecked = {
  isDone: boolean
}

export const Container = styled.div<ICkecked>`
  background-color: ${({ theme }) => theme.colors.gray500};
  /* Gray 400 */
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 12px;
  > div {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.75rem;
  }

  span {
    width: 100%;
    max-width: 632px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.18em;

    color: ${({ isDone, theme }) =>
      isDone ? theme.colors.gray300 : theme.colors.gray100};

    text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  }

  button {
    border: none;
    background-color: transparent;
  }
`

export const CkeckboxContainer = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: none;
`

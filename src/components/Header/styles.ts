import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray700};
  height: 12.5rem;
  position: relative;

  form {
    display: flex;
    position: absolute;
    height: 3.375rem;
    width: 100%;
    max-width: 46rem;
    gap: 0.5rem;
    padding: 0 1rem;
    bottom: calc(-3.375rem / 2);

    input {
      flex: 1;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.gray500};
      color: ${({ theme }) => theme.colors.gray100};
      border: 1px solid ${({ theme }) => theme.colors.gray700};
      font-size: 1rem;
      border-radius: 0.5rem;
      padding: 0 1rem;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray300};
      }
    }

    button {
      display: flex;
      align-items: center;
      height: 100%;
      border-radius: 0.5rem;
      padding: 0 1rem;
      border: none;
      background-color: ${({ theme }) => theme.colors.blue800};
      color: ${({ theme }) => theme.colors.gray100};
      gap: 0.375rem;
      font-weight: 700;
      font-size: 0.875rem;
      font-family: 'Inter';
    }
  }
`

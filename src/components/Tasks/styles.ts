import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 5.625rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.5rem;

    div {
      display: flex;
      gap: 0.8rem;
      align-items: center;

      strong {
        font-size: 0.875rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.blue400};
        font-family: 'Inter';

        &.purple {
          color: ${({ theme }) => theme.colors.purple400};
        }
      }

      span {
        font-family: 'Inter';
        font-size: 0.75rem;
        font-weight: 700;
        padding: 3px 9px;
        border-radius: 999px;
        background-color: ${({ theme }) => theme.colors.gray400};
        color: ${({ theme }) => theme.colors.gray200};
      }
    }
  }
`

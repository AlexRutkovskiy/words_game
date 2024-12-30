import { LevelProvider } from '@app/providers/LevelProvider';

import { Container } from '@components/container';

export const App = () => {
  return (
    <LevelProvider>
      <Container>
        <></>
      </Container>
    </LevelProvider>
  )
}

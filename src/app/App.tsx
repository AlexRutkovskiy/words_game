import { LevelProvider, ManageProvider } from '@app/providers';
import { Container } from '@components/container';

export const App = () => {
  return (
    <LevelProvider>
      <ManageProvider>
        <Container>
          <></>
        </Container>
      </ManageProvider>
    </LevelProvider>
  )
}

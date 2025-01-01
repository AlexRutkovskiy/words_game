import { ErrorPage } from '@pages/error';
import { LevelProvider, ManageProvider } from '@app/providers';
import { Container } from '@components/container';
import { Game } from '@components/game';

export const App = () => {
  return (
    <ErrorPage>
      <LevelProvider>
        <ManageProvider>
          <Container>
            <Game />
          </Container>
        </ManageProvider>
      </LevelProvider>
    </ErrorPage>
  )
}

import { LevelProvider, ManageProvider, StorageProvider } from '@app/providers';

import { ErrorBoundary } from '@widget/error';
import { GameScreen } from '@widget/gameScreen';
import { BrowserDetect } from '@widget/browserDetect';

import { Container } from '@components/container';
import { NotSuportedMode } from '@components/notSupportedMode';

export const App = () => {
  return (
    <ErrorBoundary>
      <LevelProvider>
        <StorageProvider>
          <ManageProvider>
            <BrowserDetect fallback={<NotSuportedMode />}>
              <Container>
                <GameScreen>
                  <>Game</>
                </GameScreen>
              </Container>
            </BrowserDetect>
          </ManageProvider>
        </StorageProvider>
      </LevelProvider>
    </ErrorBoundary>
  )
}

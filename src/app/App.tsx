import { LevelProvider, ManageProvider } from '@app/providers';

import { ErrorBoundary } from '@widget/error';

import { Game } from '@widget/game';
import { BrowserDetect } from '@widget/browserDetect';

import { Container } from '@components/container';
import { NotSuportedMode } from '@components/notSupportedMode';

export const App = () => {
  return (
    <ErrorBoundary>
      <LevelProvider>
        <ManageProvider>
          <BrowserDetect fallback={<NotSuportedMode />}>
            <Container>
              <Game />
            </Container>
          </BrowserDetect>
        </ManageProvider>
      </LevelProvider>
    </ErrorBoundary>
  )
}

import { LevelProvider, ManageProvider } from '@app/providers';

import { ErrorPage } from '@pages/error';

import { Game } from '@widget/game';
import { BrowserDetect } from '@widget/browserDetect';

import { Container } from '@components/container';
import { NotSuportedMode } from '@components/notSupportedMode';

export const App = () => {
  return (
    <ErrorPage>
      <LevelProvider>
        <ManageProvider>
          <BrowserDetect fallback={<NotSuportedMode />}>
            <Container>
              <Game />
            </Container>
          </BrowserDetect>
        </ManageProvider>
      </LevelProvider>
    </ErrorPage>
  )
}

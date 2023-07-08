import {Main} from './components/StyledComponents';

import {Logo} from './components/Logo';
import {Form} from './components/Form';
import {PackingList} from './components/PackingList';
import {Stats} from './components/Stats';

const App = () => {
  return (
    <Main>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </Main>
  )
}

export default App

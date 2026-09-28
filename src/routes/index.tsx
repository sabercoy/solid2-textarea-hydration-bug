import { Title } from '@solidjs/meta';
import Counter from '../components/Counter';
import { createSignal } from 'solid-js';

export default function Home() {
  const [text] = createSignal('test')
  return (
    <main>
      <Title>Home - Solid App</Title>
      <textarea value={text()} />
      <Counter />
    </main>
  );
}

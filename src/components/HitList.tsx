import { useHits } from 'react-instantsearch-hooks-web';
import Hit from './Hit';
import { SearchHit } from './types';

export default function HitList() {
  const { hits } = useHits<SearchHit>();

  return (
    <ul className="flex flex-col gap-3">
      {hits.map((hit) => (
        <li key={hit.objectID}>
          <Hit hit={hit} />
        </li>
      ))}
    </ul>
  );
}

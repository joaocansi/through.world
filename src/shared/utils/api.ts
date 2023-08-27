import { createClient } from 'contentful';
import Travel from '../models/travel';

interface Entry<T> { fields: T; }

const client = createClient({
  accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN),
  space: String(process.env.CONTENTFUL_SPACE_ID),
});

async function getTravels(): Promise<Travel[]> {
  const entries = await client.getEntries({ content_type: 'travel' }) as any;
  return entries.items.map((item: Entry<Travel>) => item.fields) as Travel[];
}

export default {
  getTravels,
};

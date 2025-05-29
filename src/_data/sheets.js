import settings from '../../settings.json' with { type: 'json' };

export default async function () {
  const url = settings.source;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
import ky from 'ky';

export default async function CallService(method, params = null, request = '') {
  try {
    if (request === 'post') {
      const json = await ky
        .post(serviceUrl + method, {
          json: params,
        })
        .json();

      return json;
    }

    const json = await ky
      .get(serviceUrl + method, {
        searchParams: params,
      })
      .json();

    return json;
  } catch (err) {
    throw new Error(err);
  }
}

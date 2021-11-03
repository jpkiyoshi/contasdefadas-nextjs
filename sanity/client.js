import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '4nd9464x',
    dataset: 'production',
    apiVersion: '2021-11-01',
    token: '', // or leave blank to be anonymous user
    useCdn: false // `false` if you want to ensure fresh data
});

export default client;
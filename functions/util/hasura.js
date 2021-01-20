const fetch = require('node-fetch');

exports.hasuraRequest = async function ({ query, variables} ) {
  
  const result = await fetch(process.env.HASURA_GRAPHQL_DATABASE_URL, {
    method: 'POST',
    headers: {
      'X-Hasura-Admin-Secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());

  if (!result || !result.data) {
    console.error("ERROR in hasura.js: ",result);
    return [];
  }
  
  return result.data;
};

// graphql queries are always sent as post.


// this is a helper function

// to send request to hasura and get the results back.
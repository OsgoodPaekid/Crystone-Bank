exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  console.log(body);
  return {
    statusCode: 200,
    body: 'Form data received'
  };
};

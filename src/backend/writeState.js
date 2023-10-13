export const writeState = async (data, id) => {
  const rawResponse = await fetch('./data/write.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: JSON.stringify(data), fname: id }),
  });
  if (rawResponse.ok) {
    const status = await rawResponse.json();
    console.log(status);
  }
};
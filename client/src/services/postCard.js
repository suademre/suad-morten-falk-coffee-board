export default function postCard(data) {
  console.log(data)
  return fetch('/api/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  }).then(res => res.json()) // Promise
}

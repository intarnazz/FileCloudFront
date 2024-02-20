const API_URL = import.meta.env.VITE_API_URL

export async function FilePost(token, file) {
  const formData = new FormData()
  formData.append('file', file)

  return await fetch(`${API_URL}api/addFile`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  })
    .then((request) => request.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      console.log(e)
    })
}

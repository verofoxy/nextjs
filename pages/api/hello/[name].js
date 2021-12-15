export default function handler(req, res) {
  const {name} = req.query

  res.end(`Post: Hello ${name} !`)
}
  
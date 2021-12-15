import {posts} from "./ressources"

const id = posts.length;


export default function handler(req, res) {

  const {method} = req;

  switch (method) {
    case "GET" : 
      res.status(200).send({posts});
      break;
    case "POST" :
      const {title, content} = req.body;
      if (!title || !content) {
        res.status(400).send("invalid");
        break;
      }
      posts.push({id, title, content, created_at: new Date()})
      id += 1;
      res.status(201).send("very intelligent vero");
      break;
    default: 
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Methode ${method} not allowed vero try next time ;)`)
  }
}
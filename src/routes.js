const express = require('express');
// const jobs = require('./data')
const fs = require('fs');
let rawData = fs.readFileSync('src/data.json')
const jobs = JSON.parse(rawData)

const routes = express.Router();

routes.get("/", (req, res) => {
  const data = {
    name: 'Anderson Dias',
    avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHPrcMiZfwBhw/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=evSFOVc9jMgut0jR4KWpjpXlzFAl7Bnzez2hdVJEC-M',
    role: 'Desenvolvedor full-stack'
  }
  return res.status(200).render('index', { itens: jobs, data })
})

routes.get("/portfolio-item", (req, res) => {
  const id = req.query.id
  
  if (id) {
    const job = jobs.find((job) => {
      if (job.id == id){
        return true
      } 
      if (!job){
        return res.status(404).send('This job do not exist.')
      }
    })
    return res.status(200).render('portfolio-item', { job })
  }
})

module.exports = routes;
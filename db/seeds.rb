# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Project.destroy_all
Skill.destroy_all
User.destroy_all


@user = User.create!(username:"jubran", password:"Jubran123")
blogger_app = Project.create!(name: "Blogger_app", image: "https://imgur.com/HKTl8ZU.png", github_url: "https://github.com/jubranNassar/Blogger-App", deployed_url: "https://bloggerapp.netlify.app/", description: "The Blogger-App will allow you to create and upload posts and save them for later.", user: @user )

gnome_a_zon = Project.create!(name: "Gnome-A-Zon", image: "https://imgur.com/fmohAeQ.png", github_url: "https://github.com/jubranNassar/Gnome-A-zon", deployed_url: "https://gnome-a-zon.netlify.app/", description: "Gnome-A-Zon is a garden gnome market place. It allows members to add garden gnomes for view/sale. It also allows the original creator to edit the product information. Users can browse garden gnomes and view details. Allows users to become members by signing up; authenticates members on sign in. Built using MERN stack (mongoDB, Express.js, React.js and Node.js) and heroku and netlify.", user: @user)

pp "#{Project.count} projects created!"

html = Skill.create(name: "HTML", image_url: "https://imgur.com/s8wa8hC.png")
css = Skill.create(name:"CSS", image_url: "https://imgur.com/bwnJcD8.png")
js = Skill.create(name: "JavaScript", image_url: "https://imgur.com/eD8LRpf.png")
react = Skill.create(name:"React.js", image_url:"https://imgur.com/DPdCHkk.png")
node = Skill.create(name: "Node.js", image_url: "https://imgur.com/PpW0fLL.png")
express = Skill.create(name: "Express.js", image_url: "https://imgur.com/dHxWvof.png")
mongoDB = Skill.create(name:"mongoDB", image_url: "https://imgur.com/xlmAQYr.png")
sql = Skill.create(name:"SQL", image_url: "https://imgur.com/XQQlqqf.png")
ruby = Skill.create(name: "Ruby", image_url: "https://imgur.com/M5EcPdg.png")
RoR = Skill.create(name: "Ruby on Rails", image_url: "https://imgur.com/0kCTZWS.png")
postgresql = Skill.create(name: "postgresql", image_url: "https://imgur.com/Pp0Qdew.png")
git = Skill.create(name: "git", image_url: "https://imgur.com/vXPRpPG.png")

pp "#{Skill.count} skills created!"

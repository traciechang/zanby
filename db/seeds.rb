# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# stormy = User.create(provider: "gmail", uid: "123", email: "stormy@pusheencorp.com")

Snake.create(user_id: 1, custom_id: "Pbrong-2016-TBC-M03", species: "Python brongersmai", common_name: "Blood Python", locality: "Sumatra", date_of_birth: "2016-07-01", sex: "Male", produced_by: "The Blood Cell", acquired_from: "Kara Norris", date_acquired: "2016-09-20", notes: "raspberry lineage", image_url: "https://res.cloudinary.com/dcf4iyb6t/image/upload/v1551471899/Zanby/seed%20pics/rasp.jpg")
Snake.create(user_id: 1, custom_id: "Pcurtus-2016-TBC-F01", species: "Python curtus", common_name: "Sumatran Short-Tailed Python", locality: "Sumatra", date_of_birth: "2016-07-04", sex: "Female", produced_by: "The Blood Cell", acquired_from: "Kara Norris", date_acquired: "2016-09-20", notes: "Jackson x Pitch lineage", image_url: "https://res.cloudinary.com/dcf4iyb6t/image/upload/v1551471941/Zanby/seed%20pics/6158-sumatran-short-tail-python-46a349e4.jpg")
Snake.create(user_id: 1, custom_id: "Pbrong-2222-VPI-F99", species: "Python brongersmai", common_name: "Blood Python", locality: "Sumatra", date_of_birth: "2018-07-04", sex: "Female", produced_by: "VPI", acquired_from: "Tracy Barker", date_acquired: "2018-09-20", name: "Moonlight", image_url:"https://res.cloudinary.com/dcf4iyb6t/image/upload/v1551472466/Zanby/seed%20pics/Ivory_3yr_013107_140o_1.jpg")
Snake.create(user_id: 1, custom_id: "BCC-2016-TBC-F81", species: "Boa constrictor constrictor", common_name: "Boa Constrictor", locality: "Guyana", date_of_birth: "2018-09-04", sex: "Female", produced_by: "Mike Eckert", acquired_from: "Mike Eckert", date_acquired: "2018-12-20", notes: "Parsons", image_url: "https://res.cloudinary.com/dcf4iyb6t/image/upload/v1551472547/Zanby/seed%20pics/414024953.jpg")
Snake.create(user_id: 1, custom_id: "BCC-3232-ME-F71", species: "Boa constrictor constrictor", common_name: "Boa Constrictor", locality: "Suriname", date_of_birth: "2018-10-04", sex: "Female", produced_by: "Mike Eckert", acquired_from: "Mike Eckert", date_acquired: "2018-09-20", name: "Ariana", image_url: "https://res.cloudinary.com/dcf4iyb6t/image/upload/v1551472510/Zanby/seed%20pics/414018048.jpg")
Snake.create(user_id: 1, custom_id: "Pbrong-2016-VVV-F01", species: "Python brongersmai", common_name: "Blood Python", locality: "Sumatra", date_of_birth: "2018-12-04", sex: "Female", produced_by: "The Blood Cell", acquired_from: "Kara Norris", date_acquired: "2018-09-20", name: "Imagine", morph: "T+ Albino", image_url:"https://res.cloudinary.com/dcf4iyb6t/image/upload/v1551472530/Zanby/seed%20pics/20181207_190550_resized.jpg")

Snake.create(user_id: 2, custom_id: "Pbrong-2016-VVV-M00", species: "Python brongersmai", common_name: "Blood Python", locality: "Sumatra", date_of_birth: "2018-12-05", sex: "Male", produced_by: "The Blood Cell", acquired_from: "Kara Norris", date_acquired: "2018-09-20", name: "Honeymoon", morph: "Het Flower")
Snake.create(user_id: 2, custom_id: "Pbrong-2016-KPO-F01", species: "Python brongersmai", common_name: "Blood Python", locality: "Sumatra", date_of_birth: "2018-12-11", sex: "Female", produced_by: "The Blood Cell", acquired_from: "Kara Norris", date_acquired: "2017-09-20", name: "NASA", morph: "Ivory het T+ Albino")
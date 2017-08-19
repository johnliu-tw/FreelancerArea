# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |d|
    FreelanceDocument.create!(
        title:"Document #{d}",
        description:"iMac Pro、iMac、MacBook Pro、MacBook，以及 MacBook Air，自訂你的電腦。免額外付費的運送服務 · 3 個月，0% 利率分期付款", 
        file_url:"https://drive.google.com/file/d/0BwiruVAV7TfFNWdZNWluMDVoMlo0NjNPZmxHSmNVVTNUM1FR/view?usp=sharing",
        image_url:"https://support.apple.com/content/dam/edam/applecare/images/en_US/mac/macfamily-productnav-imac_2x.png"
    )
end
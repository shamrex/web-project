const mongoose = require('mongoose')
const Scholarship = require('./models/Scholarship')

const scholarships = [
  { name: "Fulbright Scholarship", country: "USA", type: "Fully-funded", levels: ["masters","phd"], fields: ["any"], maxIncomeLevel: "high", minGPA: 75, deadline: "2026-08-15", link: "https://www.usefp.org/" },
  { name: "Chevening Scholarship", country: "UK", type: "Fully-funded", levels: ["masters"], fields: ["any"], maxIncomeLevel: "high", minGPA: 70, deadline: "2026-11-05", link: "https://www.chevening.org/" },
  { name: "DAAD Scholarship", country: "Germany", type: "Fully-funded", levels: ["masters","phd"], fields: ["any"], maxIncomeLevel: "high", minGPA: 65, deadline: "2026-10-01", link: "https://www.daad.de/en/" },
  { name: "Commonwealth Scholarship", country: "UK", type: "Need-based", levels: ["masters","phd"], fields: ["any"], maxIncomeLevel: "medium", minGPA: 70, deadline: "2026-12-15", link: "https://cscuk.fcdo.gov.uk/" },
  { name: "Erasmus Mundus", country: "European Union", type: "Fully-funded", levels: ["masters"], fields: ["any"], maxIncomeLevel: "high", minGPA: 65, deadline: "2027-01-15", link: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en" },
  { name: "Australia Awards", country: "Australia", type: "Need-based", levels: ["masters","phd"], fields: ["any"], maxIncomeLevel: "medium", minGPA: 60, deadline: "2027-04-30", link: "https://www.dfat.gov.au/people-to-people/australia-awards" },
  { name: "Turkiye Burslari", country: "Turkey", type: "Fully-funded", levels: ["bachelors","masters","phd"], fields: ["any"], maxIncomeLevel: "high", minGPA: 60, deadline: "2027-02-20", link: "https://www.turkiyeburslari.gov.tr/en" },
  { name: "KAUST Scholarship", country: "Saudi Arabia", type: "Fully-funded", levels: ["masters","phd"], fields: ["engineering","computerscience"], maxIncomeLevel: "high", minGPA: 70, deadline: "2027-01-31", link: "https://www.kaust.edu.sa/en/study/scholarship" },
  { name: "MEXT Scholarship", country: "Japan", type: "Fully-funded", levels: ["bachelors","masters","phd"], fields: ["any"], maxIncomeLevel: "high", minGPA: 65, deadline: "2027-05-31", link: "https://www.mext.go.jp/en/" },
  { name: "HEC Need-Based Scholarship", country: "Pakistan", type: "Need-based", levels: ["bachelors"], fields: ["any"], maxIncomeLevel: "low", minGPA: 50, deadline: "2026-09-30", link: "https://hec.gov.pk/" },
  { name: "PEEF Scholarship", country: "Pakistan", type: "Need-based", levels: ["intermediate","bachelors"], fields: ["any"], maxIncomeLevel: "low", minGPA: 45, deadline: "2026-08-31", link: "https://www.peef.org.pk/" }
]

mongoose.connect('mongodb://localhost:27017/scholarshipfinder')
  .then(async () => {
    console.log('Connected to MongoDB')
    await Scholarship.deleteMany()
    await Scholarship.insertMany(scholarships)
    console.log('Scholarships seeded successfully')
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
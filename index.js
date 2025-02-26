const emailer = require('./emailer')
const emailerList = require('./emailerList.json')

emailerList.emailId.forEach((email, index) => {
  console.log(email, index)
  emailer.sendEmail(
    email,
    'Testing Emails ' + index,
    'Hi Sukhi, Testing Emails'
  )
})

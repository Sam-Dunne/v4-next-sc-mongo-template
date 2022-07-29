// import * as Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import MailGun from 'mailgun.js';
import config from '../../config';


const mailgun = new(MailGun)(FormData).client({
          username: 'api',
          key: config.mailgun.apiKey
      })

export default async (req, res) => {
  
            try {
                const newEmail = req.body;
                    try {
                        const result = await mailgun.messages.create(config.mailgun.domain, {
                            to: config.mailgun.toEmail,
                            subject: newEmail.subject,
                            from: newEmail.from,
                            text: newEmail.message
                        })
                        
                        return res.json({result, newEmail})
                        // console.log(newEmail)
                    } catch (error) {
                        console.log(error.message);
                        res.status(500).json({ message: 'goof 500'})
                    }
                    
                    // const newEmail = req.body;
                    // try {
                    //     const result = mailgun.messages.create(config.mailgun.domain, {
                    //         to: newEmail.from,
                    //         subject: `Thanks for Contacting me...${newEmail.from}`,
                    //         from: config.mailgun.toEmail,
                    //         text: `Lorem ipsum`
                    //     })
                    //     res.json({result, newEmail})
                    // } catch (error) {
                    //     console.log(error.message);
                    //     res.status(500).json({ message: 'goof'})
                    // }

                // const jRes = await response.json();

                // res.status(200).send(jRes);
            } catch (error) {
                console.log(error);
                res.status(400);
            }
};
// export default async function Mail(req,res) {
//   const mailgun = new(MailGun)(FormData).client({
//       username: 'api',
//       key: config.mailgun.apiKey
//   })
//   const newEmail = req.body;
//     try {
//         const result = mailgun.messages.create(config.mailgun.domain, {
//             to: config.mailgun.toEmail,
//             subject: newEmail.subject,
//             from: newEmail.from,
//             text: newEmail.message
//         })
//         res.json({result, newEmail})
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'goof'})
//     }
    
//     // const newEmail = req.body;
//     try {
//         const result = mailgun.messages.create(config.mailgun.domain, {
//             to: newEmail.from,
//             subject: `Thanks for Contacting me...${newEmail.from}`,
//             from: config.mailgun.toEmail,
//             text: `Lorem ipsum`
//         })
//         res.json({result, newEmail})
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'goof'})
//     }
// };
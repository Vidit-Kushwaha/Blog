import { URL } from './index'
interface ContactMessage {
  name: string
  email: string
  message: string
}

export const EmailTemplate = (
  data: ContactMessage,
  reciver: 'ADMIN' | 'USER'
) => {
  const { name, email, message } = data

  switch (reciver) {
    case 'ADMIN':
      return `<div><h1>Name: ${name}</h1><h2>Email: ${email}</h2><p>Message: ${message}</p></div>`
    case 'USER':
      return `<!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:officedocumentsettings><o:pixelsperinch>96</o:pixelsperinch><o:allowpng></o:officedocumentsettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]--><style>*{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none}@media (max-width:520px){.desktop_hide table.icons-inner,.social_block.desktop_hide .social-table{display:inline-block!important}.icons-inner{text-align:center}.icons-inner td{margin:0 auto}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}</style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:500px;margin:0 auto" width="500"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%;padding-right:0;padding-left:0"><div class="alignment" align="left" style="line-height:10px"><div style="max-width:75px"><a href=${URL} target="_blank" style="outline:0" tabindex="-1"><img src="https://380e5da9a2.imgdist.com/pub/bfra/29lmbikv/8p7/mm5/j8b/B.jpg" style="display:block;height:auto;border:0;width:100%" width="75" height="auto"></a></div></div></td></tr></table><table class="heading_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><h1 style="margin:0;color:#000;direction:ltr;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:31px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:37.199999999999996px">Thank You for Your Message!</h1></td></tr></table><table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="color:#101112;direction:ltr;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:19.2px"><p style="margin:0;margin-bottom:16px">Hey ${name},</p><p style="margin:0;margin-bottom:16px">I hope you're well. Thank you for your message at<a href="https://blog.viditkushwaha.com" target="_blank" style="text-decoration:underline;color:#0068a5" rel="noopener"> blog.viditkushwaha</a>. I sincerely appreciate your time and effort in reaching out.</p><p style="margin:0;margin-bottom:16px">I have received your mail and will respond as soon as possible. Let's talk again soon.</p><p style="margin:0;margin-bottom:16px">Looking forward to our future conversation!</p><p style="margin:0">Best regards,<br>Vidit Kushwaha</p></div></td></tr></table><table class="social_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block"><tr><td style="padding:0 2px 0 2px"><a href="https://www.twitter.com/helloVidit" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png" width="32" height="auto" alt="Twitter" title="twitter" style="display:block;height:auto;border:0"></a></td><td style="padding:0 2px 0 2px"><a href="https://www.linkedin.com/in/vidit9011/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display:block;height:auto;border:0"></a></td><td style="padding:0 2px 0 2px"><a href="https://www.instagram.com/vidit_kushwaha_" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display:block;height:auto;border:0"></a></td></tr></table></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;background-color:#fff;width:500px;margin:0 auto" width="500"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;text-align:center"><tr><td class="pad" style="vertical-align:middle;color:#1e0e4b;font-family:Inter,sans-serif;font-size:15px;padding-bottom:5px;padding-top:5px;text-align:center"><table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="alignment" style="vertical-align:middle;text-align:center"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0;padding-right:0;mso-table-lspace:0;mso-table-rspace:0"><![endif]--><!--[if !vml]><!--><table class="icons-inner" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block;margin-right:-4px;padding-left:0;padding-right:0" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]--></table></td></tr></table></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>`
  }
}

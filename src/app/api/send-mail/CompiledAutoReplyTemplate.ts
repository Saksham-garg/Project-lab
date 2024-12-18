import Handlebars from 'handlebars'
import { AutoReply } from './AutoReply'
export const CompiledAutoReplyTemplate = (name:string) => {
    const tempalte = Handlebars.compile(AutoReply)
    const htmlBody = tempalte({
        name:name
    })
  return htmlBody
}

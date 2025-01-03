import { newsInformation } from './news-information/news-information.js'
import { agua } from './agua/agua.js'

import { curp } from './curp/curp.js'

import { extraClassification } from './extra-classification/extra-classification.js'

import { helpTiClassification } from './help-ti-classification/help-ti-classification.js'

import { newsClassification } from './news-classification/news-classification.js'

import { paymentClassification } from './payment-classification/payment-classification.js'

import { documentClassification } from './document-classification/document-classification.js'

import { generalClassification } from './general-classification/general-classification.js'

import { chat } from './chat/chat.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(newsInformation)
  app.configure(agua)

  app.configure(curp)

  app.configure(extraClassification)

  app.configure(helpTiClassification)

  app.configure(newsClassification)

  app.configure(paymentClassification)

  app.configure(documentClassification)

  app.configure(generalClassification)

  app.configure(chat)

  app.configure(user)

  // All services will be registered here
}

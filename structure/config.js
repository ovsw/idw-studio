import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const ConfigIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⚙️' />

export const ConfigMenu = S.listItem()
  .title('Configuration')
  .icon(ConfigIcon)
  .child(
    S.editor()
      .id('siteSettings')
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )

class MyInject {
  constructor (ctx) {
    this.app = ctx.app
  }

  pageTitle(routeName){
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  dateFormat (dateStr){
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', {dataStyle: 'medium'}
    )
    return dateTimeFormat.format(new Date(dateStr))
  }

  projectLinkTo(id, name = 'project-id-dashboard'){
    return { name, params: { id }}
  }
}

export default ({ app }, inject) => {
  inject('my', new MyInject({app}))
}
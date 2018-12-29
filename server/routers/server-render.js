const ejs = require('ejs')

module.exports = async(ctx, renderer, template) => {
  ctx.headers['Context-Type'] = 'text/html'

  const context = { url: ctx.path }
  console.log('context111', context)
  try {
    const appString = await renderer.renderToString(context)
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })

    ctx.body = html
  } catch (error) {
    console.log('render error', error)
    throw error
  }
}
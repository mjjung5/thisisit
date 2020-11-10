const structure = require.context(`../pages/common/`, true, /\.vue$/)
let routes = []
let alreadyCheck = (obj, key) => {
  return Array.isArray(obj) ? obj.findIndex(item => item.path == key || item.path == `/${key}`) : -1
}
structure.keys().forEach(name => {
  let filename = `common/${name.replace(/(^\.\/|\.vue$)/g, '')}`
  let depth = filename.split('/')
  let alreadyIndex
  depth.reduce(function(obj, key) {
    if (key === 'index') return false
    alreadyIndex = alreadyCheck(obj, key)
    if (alreadyIndex !== -1) {
      return obj[alreadyIndex]
    } else {
      if (Array.isArray(obj)) {
        obj.push({
          path: `/${key}`,
          component: () => import(/* webpackChunkName: "common" */ `@/pages/common/index.vue`)
        })
        return obj[obj.length - 1]
      } else {
        if (!('path' in obj)) {
          obj.path = key
          return obj
        } else {
          if (!('children' in obj)) {
            obj.children = []
          }
          alreadyIndex = alreadyCheck(obj.children, key)
          if (alreadyIndex === -1) {
            obj.children.push({
              path: key
            })
            return obj.children[obj.children.length - 1]
          } else {
            return obj.children[alreadyIndex]
          }
        }
      }
    }
  }, routes)
})

export default routes

import { trimStart } from 'lodash'

const Handsfree = window.Handsfree

/**
 * Load the Weboji library
 * @see https://github.com/jeeliz/jeelizWeboji
 */
Handsfree.prototype.loadWebojiDependencies = function() {
  // @FIXME let's use this.models.head.sdk
  if (!this.model.head.sdk) {
    const $script = document.createElement('script')
    $script.async = true
    $script.onload = () => {
      document.body.classList.remove('handsfree-loading')
      this.emit('dependenciesReady')
    }
    $script.src = trimStart(
      Handsfree.libSrc + 'models/jeelizFaceTransfer.js',
      '/'
    )
    document.getElementsByTagName('head')[0].appendChild($script)
    document.body.classList.add('handsfree-loading')
  } else {
    this.emit('dependenciesReady')
  }
}

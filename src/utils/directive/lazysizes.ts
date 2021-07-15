import { DirectiveOptions } from 'vue'

export default {
    bind (el, binding, vnode) {
        console.log('directive bind', el)
        if (vnode.tag !== 'img') {
            throw new Error(`${vnode.tag} is wrong element, use img element instead`)
        }

        el.classList.add('lazyload')
    },
    inserted(el) {
        console.log('directive inserted', el)
    },
    update (el, binding, vnode, oldVnode) {
        console.log('directive update')
        if (vnode?.data?.attrs && oldVnode?.data?.attrs) {
        //     const {
        //         data: {
        //             attrs: {'data-src': src}
        //         }
        //     } = vnode
        //     const {
        //         data: {
        //             attrs: { 'data-src': oldSrc }
        //         }
        //     } = oldVnode
        //     if (src === oldSrc) {
        //         return
        //     }
        //
            el.classList.remove('lazyload')
            el.classList.add('lazyloaded')
        }
    }
} as DirectiveOptions

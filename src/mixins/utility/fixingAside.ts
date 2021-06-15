import { Component, Mixins } from 'vue-property-decorator'
import resize from './resize'

@Component
class FixingAside extends Mixins(resize) {
    aside = {
        styles: {
            position: null as null | string,
            top: null as null | string,
            right: null as null | string,
            bottom: null as null | string
        },
        height: null as number | null,
        wrapperHeight: null as number | null,
        deviceCondition: null as boolean | null,
        scrollerNode: null as HTMLElement | Document | null
    }

    $refs!: {
        wrapper: HTMLElement
    }

    destroyed (): void {
        if (this.aside.deviceCondition) {
            this.removeResizeWidthEvent()
            if (this.aside.scrollerNode) {
                this.aside.scrollerNode.removeEventListener('scroll', this.onScroll)
            }
        }
    }

    initAsideFixing (
        {
            condition,
            scrollerNode = document,
            asideHeight
        }
        : {
            condition: boolean,
            scrollerNode?: HTMLElement | Document,
            asideHeight: number,
        }
    ): void {
        this.aside.deviceCondition = condition
        this.aside.scrollerNode = scrollerNode
        this.aside.height = asideHeight
        this.aside.wrapperHeight = this.$refs.wrapper.getBoundingClientRect().height
        this.onScroll()
        this.removeResizeWidthEvent()
        this.addResizeWidthEvent(this.onScroll)
        scrollerNode.removeEventListener('scroll', this.onScroll)
        scrollerNode.addEventListener('scroll', this.onScroll, { passive: true })
    }

    onScroll (): void {
        const wrapperRect = this.$refs.wrapper.getBoundingClientRect()
        if (this.aside.wrapperHeight !== wrapperRect.height) {
            this.$nextTick(() => this.initAsideFixing({
                condition: this.aside.deviceCondition!,
                scrollerNode: this.aside.scrollerNode!,
                asideHeight: this.aside.height!
            }))
            return
        }

        if (this.aside.deviceCondition && this.aside.height && wrapperRect.height > this.aside.height) {
            const offset = 40

            if (wrapperRect.top <= offset) {
                if (wrapperRect.bottom < offset + this.aside.height) {
                    this.aside.styles = {
                        position: 'absolute',
                        top: 'auto',
                        right: '0px',
                        bottom: '0px'
                    }
                } else {
                    this.aside.styles = {
                        position: 'fixed',
                        top: `${offset}px`,
                        right: `${window.innerWidth - wrapperRect.right - this.getScrollbarWidth()}px`,
                        bottom: null
                    }
                }
            } else {
                this.aside.styles = {
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    bottom: null
                }
            }
        } else {
            this.aside.styles = {
                position: null,
                top: null,
                right: null,
                bottom: null
            }
        }
    }

    getScrollbarWidth (): number {
        return window.innerWidth - document.documentElement.clientWidth
    }
}

export default FixingAside


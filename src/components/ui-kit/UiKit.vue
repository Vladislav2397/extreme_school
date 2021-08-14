<template lang="pug">
include ../../tools/mixins

+b.ui-kit
    +e.container.container
        +e.inner
            +e.n-component
                +e.n-title Some title
                +e.n-body
                    +e.n-workspace
                        +e.n-preview
                        +e.n-panel
                        +e.n-panel
                        +e.n-panel
                    // may be make float buttons as material
                    +e.n-controls
                        +e.UI-BUTTON-COMPONENT.n-button Settings
            +e.component(
                v-for="(component, index) in components"
            )
                +e.TITLE-COMPONENT.title(
                    tag="h1"
                    size="h1"
                    align="center"
                ) {{ component.name }}
                +e.body
                    +e.preview
                        component(
                            v-if="'vModel' in component"
                            :is="`${component.name}-component`"
                            v-bind="component.state"
                            v-on="component.listeners"
                            v-model="component.vModel"
                            ref="items"
                        ) {{ component.name }}
                        component(
                            :is="`${component.name}-component`"
                            v-bind="component.state"
                            v-on="component.listeners"
                            v-else
                            ref="items"
                        ) {{ component.name }}
                        p(
                            v-if="'vModel' in component"
                        ) v-model: {{ component.vModel }}
                        +e.buttons
                            +e.UI-BUTTON-COMPONENT.button(
                                @click="isSettingsActive = !isSettingsActive"
                            ) Settings
                            +e.UI-BUTTON-COMPONENT.button(
                                @click="isCodeActive = !isCodeActive"
                            ) Code
                        +e.settings(
                            :class="{ 'active': isSettingsActive }"
                        )
                            template(
                                v-for="(value, key) in component.attrs"
                            )
                                +e.SETTING-COMPONENT.item(
                                    :title="key"
                                    :attribute="value"
                                    v-model="component.state[key]"
                                )
                        +e.code {{ codes[index] }}

</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import Components from '@/components/ui-kit/Components'
import Setting from '@/components/ui-kit/UiSetting.vue'
import UiButton from '@/components/ui-kit/UiButton.vue'

import ButtonRender from '@/components/ui/ButtonRender.vue'
import Toggle from '@/components/ui/Toggle.vue'
import Select from '@/components/ui/Select.vue'

@Component({
    components: {
        'ui-button-component': UiButton,
        'button-render-component': ButtonRender,
        'setting-component': Setting,
        'toggle-component': Toggle,
        'select-component': Select,
    }
})
export default class UiKit extends Mixins(Components) {
    $refs!: {
        items: HTMLElement
    }

    codes = []

    isSettingsActive = false
    isCodeActive = false

    mounted (): void {
        this.components.forEach((item, index) => {
            this.codes.push(this.$refs.items[index].$el.outerHTML)
        })
    }

    getCode (index: number): string {
        return this.$refs?.items[index].outerHTML || ''
    }

    get itemHtml (): string {
        return this.$refs?.items?.outerHTML || ''
    }

    onChange (payload: any): void {
        payload.state[payload.name] = payload.value
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars/breakpoints';
@import '../../assets/scss/utility/functions';

@import './ui-kit';

.ui-kit {
    padding: 10rem 0;

    &__component {
        & + & {
            margin-top: 50px;
        }
    }

    &__title {
        margin-bottom: 40px;
    }

    &__body {
        width: 100%;
        min-height: toRem(200);
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + & {
            margin-top: 30px;
        }
    }

    &__preview {
        min-height: 20rem;
        vertical-align: top;
        box-shadow: 0 0 12px 1px #000000;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    &__settings {
        padding: toRem(20);
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #aaa;
        transition: transform 0.3s ease;
        transform: translateX(100%);

        &.active {
            transform: translateX(0);
        }
    }

    &__preview {
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        position: relative;
    }

    &__buttons {
        position: absolute;
        top: 0;
        left: 0;
    }

    &__button {
        & + & {
            margin-left: toRem(6);
        }
    }

    &__item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;

        & + & {
            margin-top: 16px;
        }

        h4 {
            display: inline-block;
            min-width: 100 / 12 * 1rem;
        }
    }
}
</style>

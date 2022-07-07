<template>
  <div ref="containerElement" :class="containerClass"><slot></slot></div>
</template>
<script setup lang="ts">
import blink from './blinker'
import { onMounted, getCurrentInstance } from 'vue'
const props = defineProps({
  customEvents: {
    type: Object,
    required: false,
    default() {
      return {}
    }
  },
  text: {
    type: String,
    required: false,
    default: ''
  },
  textSpeed: {
    type: Number,
    required: false,
    default: 95
  },
  cursor: {
    type: String,
    required: false,
    default: '&#9612;'
  },
  blinkSpeed: {
    type: Number,
    required: false,
    default: 0.05
  },
  cursorClass: {
    type: String,
    required: false,
    default: 'tiny-typer-cursor'
  },
  textClass: {
    type: String,
    required: false,
    default: 'tiny-typer-text'
  },
  containerClass: {
    type: String,
    required: false,
    default: 'tiny-typer-container'
  },
  staticCursor: {
    type: Boolean,
    required: false,
    default: false
  },
  staticText: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits(['animation-finished'])

let element: any = null
let internalInstance: any = null
let cursorEl: any = null
let textEl: any = null
let textString: any = null
let blinker: any = null
let finishedEventTriggered = false
const init = () => {
  element.innerHTML = ''
  element.innerText = ''
  element.appendChild(textEl)
  element.appendChild(cursorEl)

  if (!props.staticCursor) {
    blinker = blink(cursorEl, props.blinkSpeed)
  }
  if (!props.staticText) {
    animate()
  } else {
    redraw(textString)
  }
}
const animate = () => {
  const symbols = textString.split('')
  const result: any = []
  const animation = () => setTimeout(tick, props.textSpeed)

  const tick = () => {
    const character = symbols.shift()
    result.push(character)
    if (character in props.customEvents) {
      emit(props.customEvents[character])
    }
    redraw(result.join(''))
    if (symbols.length) {
      animation()
    } else {
      if (!finishedEventTriggered) {
        emit('animation-finished')
      }
      finishedEventTriggered = true
    }
  }

  animation()
}
const redraw = (text: string) => {
  textEl.innerText = text
}
onMounted(() => {
  // element = $refs.containerElement;
  internalInstance = getCurrentInstance()
  // element = internalInstance.ctx.$refs.containerElement;
  element = document.querySelector('.' + props.containerClass)
  cursorEl = document.createElement('span')
  textEl = document.createElement('span')

  textString = props.text || element.innerText

  textEl.className = props.textClass
  cursorEl.className = props.cursorClass
  cursorEl.innerHTML = props.cursor

  init()
})
</script>

import { createApp, type DirectiveBinding } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)

// Global custom directive for scrolling reveal animations
app.directive('reveal', {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add('reveal-hidden')
    
    // Optional delay passed via directive: v-reveal="200"
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value}ms`
    }
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-hidden')
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    // Let layout settle before observing to avoid flashes
    requestAnimationFrame(() => {
      observer.observe(el)
    })
  }
})

app.mount('#app')

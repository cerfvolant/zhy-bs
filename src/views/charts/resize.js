import {debounce} from '../../utils'

export default {
  data() {
    return {
      sidebarELm: null
    }
  },
  mounted() {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    },100)
    window.addEventListener('resize',this.__resizeHandler)

    // this.sidebarElm = document.getElementsByClassName('avtabItem')[0]
    // this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.graphResizeHandler)
  },
  methods: {
    // graphResizeHandler(e) {
    //   if(e.propertyName === 'width') {
    //     this.__resizeHandler()
    //   }
    // }
  }
}

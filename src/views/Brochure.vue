<template>
  <div
    id="app"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd"
    >
      <div class="action-bar">
        <left-icon
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <plus-icon
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Pagina {{ flipbook.page }} de {{ flipbook.numPages }}
        </span>
        <minus-icon
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <right-icon
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
  </div>
</template>

<script>
import 'vue-material-design-icons/styles.css'
import LeftIcon from 'vue-material-design-icons/ChevronLeftCircle'
import RightIcon from 'vue-material-design-icons/ChevronRightCircle'
import PlusIcon from 'vue-material-design-icons/PlusCircle'
import MinusIcon from 'vue-material-design-icons/MinusCircle'
import Flipbook from 'flipbook-vue'

export default {
  name: 'app',
  components: { Flipbook, LeftIcon, RightIcon, PlusIcon, MinusIcon },
  data() {
      return {
        pages: [],
        pagesHiRes: [],
        hasMouse: true,
        pageNum: null
      };
  },
  methods: {
    onFlipLeftStart: function(page) {
      return console.log('flip-left-start', page);
    },
    onFlipLeftEnd: function(page) {
      console.log('flip-left-end', page);
      return window.location.hash = '#' + page;
    },
    onFlipRightStart: function(page) {
      return console.log('flip-right-start', page);
    },
    onFlipRightEnd: function(page) {
      console.log('flip-right-end', page);
      return window.location.hash = '#' + page;
    },
    onZoomStart: function(zoom) {
      return console.log('zoom-start', zoom);
    },
    onZoomEnd: function(zoom) {
      return console.log('zoom-end', zoom);
    },
    setPageFromHash: function() {
      var n;
      n = parseInt(window.location.hash.slice(1), 10);
      if (isFinite(n)) {
        return this.pageNum = n;
      }
    }
  }, 
  mounted() {
      window.addEventListener('keydown', (function(_this) {
        return function(ev) {
          var flipbook;
          flipbook = _this.$refs.flipbook;
          if (!flipbook) {
            return;
          }
          if (ev.keyCode === 37 && flipbook.canFlipLeft) {
            flipbook.flipLeft();
          }
          if (ev.keyCode === 39 && flipbook.canFlipRight) {
            return flipbook.flipRight();
          }
        };
      })(this));
      setTimeout(((function(_this) {
        return function() {
          _this.pages = [null, 
            'images/brochure/1.jpg',
            'images/brochure/2.jpg',
            'images/brochure/3.jpg', 
            'images/brochure/4.jpg',
            'images/brochure/5.jpg',
            'images/brochure/6.jpg',
            'images/brochure/7.jpg',
            'images/brochure/8.jpg',
            'images/brochure/9.jpg',
            'images/brochure/10.jpg',
            'images/brochure/11.jpg',
            'images/brochure/12.jpg',
            'images/brochure/13.jpg',
            'images/brochure/14.jpg',
            'images/brochure/15.jpg',
            'images/brochure/16.jpg',
            'images/brochure/17.jpg',
            'images/brochure/18.jpg',
            'images/brochure/19.jpg',
            'images/brochure/20.jpg',
            'images/brochure/21.jpg',
            'images/brochure/22.jpg',
            'images/brochure/23.jpg',
            'images/brochure/24.jpg',
            'images/brochure/25.jpg',
            'images/brochure/26.jpg',
            'images/brochure/27.jpg',
            'images/brochure/28.jpg',
            'images/brochure/29.jpg',
            'images/brochure/30.jpg',
            'images/brochure/31.jpg',
            'images/brochure/32.jpg',
            'images/brochure/33.jpg',
            'images/brochure/34.jpg',
            'images/brochure/35.jpg',
            'images/brochure/36.jpg',
            'images/brochure/37.jpg',
            'images/brochure/38.jpg',
            'images/brochure/39.jpg',
            'images/brochure/40.jpg',
            'images/brochure/41.jpg',
            'images/brochure/42.jpg',
            'images/brochure/43.jpg',
            'images/brochure/44.jpg',
            'images/brochure/45.jpg',
            'images/brochure/46.jpg',
            'images/brochure/47.jpg',
            'images/brochure/48.jpg',
            'images/brochure/49.jpg',
            'images/brochure/50.jpg',
            'images/brochure/51.jpg',
            'images/brochure/52.jpg',
            'images/brochure/53.jpg',
            'images/brochure/54.jpg',
            'images/brochure/55.jpg',
            'images/brochure/56.jpg',
            'images/brochure/57.jpg',
            'images/brochure/58.jpg',
            'images/brochure/59.jpg',
            'images/brochure/60.jpg',
            'images/brochure/61.jpg',
            'images/brochure/62.jpg',
            'images/brochure/63.jpg',
            'images/brochure/64.jpg',
            'images/brochure/65.jpg',
            'images/brochure/66.jpg',
            'images/brochure/67.jpg',
            'images/brochure/68.jpg',
            'images/brochure/69.jpg',
            'images/brochure/70.jpg',
            'images/brochure/71.jpg',
            'images/brochure/3.jpg',
            'images/brochure/2.jpg',
            'images/brochure/72.jpg',];
          return _this.pagesHiRes = [null, 'images-large/1.jpg', 'images-large/2.jpg', 'images-large/3.jpg', 'images-large/4.jpg', 'images-large/5.jpg', 'images-large/6.jpg'];
        };
      })(this)), 1);
      window.addEventListener('hashchange', this.setPageFromHash);
      return this.setPageFromHash();
    }
}
  
</script>

<style scoped>

.flipbook {
  width: 90vw;
  height: 90vh;
}
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}

a {
  color: inherit;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-bar .btn {
  font-size: 30px;
  color: #999;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
</style>

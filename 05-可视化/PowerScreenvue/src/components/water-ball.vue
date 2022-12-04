<template>
  <div class="water-ball">
    <svg
      version="1.1"
      xmlns="https://www.w3.org/2000/svg"
      xmlns:xlink="https://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      style="display: none"
    >
      <!-- 定义可复用的 icon -->
      <symbol id="wave">
        <path
          d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
        ></path>
        <path
          d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
        ></path>
        <path
          d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
        ></path>
        <path
          d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
        ></path>
      </symbol>
    </svg>

    <div class="box" :style="{ width: size, height: size }">
      <div class="percent" :style="{ fontSize: countSize }">
        <div class="percentNum" id="count" ref="countRef">0</div>
        <div class="percentB">%</div>
      </div>
      <div id="water" class="water" ref="waterRef">
        <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
          <use xlink:href="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
          <use xlink:href="#wave"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: '190px',
  },
  countSize: {
    type: String,
    default: '40px',
  },
  percentage: {
    type: Number,
    default: 0,
  },
})

const countRef = ref(null)
const waterRef = ref(null)

watch(
  () => props.percentage,
  (newV, newO) => {
    startAnimation(newV)
  }
)

function startAnimation(percentage) {
  let currentCount = 0
  let interval = null

  let countEl = countRef.value
  let waterEl = waterRef.value

  // 1.定时更新数据
  interval = setInterval(() => {
    countEl.innerHTML = currentCount

    // 到达目标值停止
    if (currentCount >= percentage) {
      // 2.超过100不能移动
      clearInterval(interval)
    }

    if (currentCount <= 100) {
      waterEl.style.transform = `translateY(${100 - currentCount}%)`
    }

    currentCount++
  }, 60)
}
</script>

<style scoped>
.water-ball {
  position: relative;
}
.box {
  /* height: 200px;
  width: 200px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #020438;
  border-radius: 100%;
  overflow: hidden;
}
.box .percent {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  align-items: center;

  justify-content: center;
  color: #fff;
  font-size: 40px;
}
.box .water {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: translate(0, 50%);
  background: #00c6ff;
}
.box .water_wave {
  width: 200%;
  position: absolute;
  bottom: 100%;
}
.box .water_wave_back {
  right: 0;
  fill: #c7eeff;
  animation: moveWaveBack 1.7s linear infinite;
}
.box .water_wave_front {
  left: 0;
  fill: #00c6ff;
  margin-bottom: -1px;
  animation: moveWaveFront 0.7s linear infinite;
}
@keyframes moveWaveBack {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}
@keyframes moveWaveFront {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

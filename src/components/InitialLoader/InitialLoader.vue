<template>
  <div class="p-initial">
    <div class="p-initial__icon">
      <div class="p-initial__icon-inner">
        <div class="p-initial__icon-label-wrapper">
          <div class="p-initial__icon-label">L</div>
          <div class="p-initial__icon-label-cover"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { mapActions } from 'vuex'
import { UPDATE_INITIAL_STATE } from '@/store/action-types'

export default {
  name: 'p-initial-loader',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      _updateInitialState: UPDATE_INITIAL_STATE
    }),
    updateInitialState: debounce(function () {
      this._updateInitialState(false)
    }, 2000)
  },
  mounted () {
    // let updateInitialState = function () {
    //   this._updateInitialState(false)
    // }
    // setTimeout(updateInitialState.bind(this), 2000)
    this.updateInitialState()
  }
}
</script>

<style lang="scss" scoped>
@keyframes bottom-up {
  from {
    top: 100%;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes top-down {
  from {
    top: -100%;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes from-left {
  from {
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes from-right {
  from {
    left: 100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes slide-right {
  from {
    left: -100%;
  }
  to {
    left: 21px;
  }
}

@keyframes slide-left {
  from {
    left: -10%;
  }
  to {
    left: -150%;
  }
}

.p-initial {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: $z-index-initial;
  background-color: $color-title;
  &__icon {
    position: absolute;
    top: calc(50% - 5rem / 2);
    left: calc(50% - 5rem / 2);
    width: 5rem;
    height: 5rem;
    // transform: translate(-50%, -50%);
    &:before,
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      opacity: 0;
      background-color: $color-white;
    }
    &:before {
      top: 0;
      left: 0;
      animation: bottom-up 1s ease-out 0.5s forwards;
    }
    &:after {
      top: 0;
      right: 0;
      animation: top-down 1s ease-out 0.5s forwards;
    }
    &-inner {
      &:before,
      &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        opacity: 0;
        background-color: $color-white;
      }
      &:before {
        top: 0;
        left: 0;
        animation: from-left 1s ease-out 0.5s forwards;
      }
      &:after {
        bottom: 0;
        left: 0;
        animation: from-right 1s ease-out 0.5s forwards;
      }
    }
    &-label {
      position: absolute;
      top: 4px;
      left: -100%;
      font-size: 4rem;
      line-height: 1;
      color: $color-white;
      font-family: $ff-RobotoSlab;
      animation: slide-right 1.2s ease-out 1.5s forwards;
      &-wrapper {
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        overflow: hidden;
      }
      &-cover {
        position: absolute;
        top: 0;
        // left: -10%;
        // left: -35%;
        left: 0;
        // width: 120%;
        width: 50%;
        width: 21px;
        height: 100%;
        // transform: skew(20deg);
        background-color: $color-title;
        // animation: slide-left 1s ease-in 1.5s forwards;
      }
    }
  }
}
</style>

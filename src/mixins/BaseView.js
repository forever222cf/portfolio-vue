import { mapActions } from 'vuex'
import {
  UPDATE_POSITION,
  UPDATE_SLIDE_DIRECTION,
  UPDATE_TRANSITION_STATE,
  UPDATE_HEADER_STATE
} from '@/store/action-types'

const BaseView = {
  methods: {
    ...mapActions({
      _updatePosition: `transition/${UPDATE_POSITION}`,
      _updateSlideDirection: `transition/${UPDATE_SLIDE_DIRECTION}`,
      _updateTransitionState: `transition/${UPDATE_TRANSITION_STATE}`,
      _updateHeaderState: UPDATE_HEADER_STATE
    }),
    resetTransition () {
      this._updatePosition(0)
      this._updateSlideDirection('up')
      this._updateTransitionState(false)
      this._updateHeaderState(false)
    }
  },
  mounted () {
    this.resetTransition()
  }
}

export default BaseView

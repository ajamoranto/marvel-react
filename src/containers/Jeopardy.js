import { connect } from 'react-redux'
import { getQuestion } from '../actions/Jeopardy'
import JeopardyDisplay from '../components/jeopardydisplay/JeopardyDisplay'

const mapStateToProps = state => {
  return {
    question: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderQuestion: () => {
      dispatch(getQuestion())
    }
  }
}

const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default Questions
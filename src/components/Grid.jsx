import React from 'react'
import PropTypes from 'prop-types'

function Grid(props) {

const style = {
    gap: props.gap ? `${props.gap}` : '0'
}
const col = props.col ? `grid-col-lg-${props.col}` : '';
const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : '';
const smCol = props.smCol ? `grid-col-sm${props.smCol}` : '';
const xsCol = props.xsCol ? `grid-col-xs${props.xsCol}` : '';

  return (
    <div className={`grid ${col} ${mdCol} ${smCol} ${xsCol}`} style={style}>
        {props.children}
    </div>
  )
}


Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}
export default Grid
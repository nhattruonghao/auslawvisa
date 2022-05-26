import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const changeHandler = (e, label, props) => {
 
  let value = e.target.value;
  props.onChangeFunc(props.title, label, e);

  if (!props.onValidateFunc) return;

  let msg = null;
  if (!value && props.isReq) {
    msg = `Please select a option.`;
  }

  props.onValidateFunc(msg, props.name);
}


const RadioGroupItem = props => {
  const [checked, setChecked] = useState(false);
  const handleClickChecked = (value) => {
    setChecked(value)
  }
  useEffect(() => {
    setChecked(false);
  }, [props.options]);

  const inputProps = {
    type: "radio",
    name: props.name,
  }
  return (
    <div className={'form-outer'}>
      <label className="form-label">{props.title}</label>
      <div>
        {props.options.map((x, i) => <div key={i} className='form-input-radio-outer'>
          <input
           className="form-input-radio"
            {...inputProps}
            id={x.value}
            value={x.value}
            checked={checked === x.label}
            onClick={() => handleClickChecked(x.label)}
            onChange={e => changeHandler(e, x.label, props)}
            />
          <label
            className="form-item-radio-label"
            htmlFor={x.value}>
            {x.label}
          </label>
        </div>)}
      </div>
      {props.errorMsg && <span className="form-input-msg">{props.errorMsg === true ? `Please select a option.` : props.errorMsg}</span>}
    </div>
  )
}

RadioGroupItem.defaultProps = {
  name: '',
  title: '',
  className: 'form-check-input',
  outerClassName: 'mb-2',
  isVertical: false,
  value: '',
  options: [],
  onChangeFunc: () => { },
  isReq: null,
  onValidateFunc: () => { }
}

RadioGroupItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  outerClassName: PropTypes.string,
  isVertical: PropTypes.bool,
  value: PropTypes.any,
  options: PropTypes.array,
  onChangeFunc: PropTypes.func,
  isReq: PropTypes.bool,
  errorMsg: PropTypes.any,
  onValidateFunc: PropTypes.func
}

export default memo(RadioGroupItem);
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Selects from 'react-select';

const changeHandler = (e, props) => {
  let value = null;
  if (e) value = e.value;
  props.onChangeFunc(props.title, e.label);

  if (!props.onValidateFunc) return;

  let msg = null;
  if (!value && props.isReq) {
    msg = `Please select a options`;
  }

  props.onValidateFunc(msg, props.name);
};

const Select = (props) => {
  const inputProps = {
      question: props.question,
    name: props.name,
    placeholder: props.placeholder || `Select ${props.title}`,
    className: props.className,
    isClearable: props.isClearable,
    value: props.options.find((x) => x.value === props.value),
    options: props.options,
  };

  return (
    <div className='form-outer'>
      <label className="form-label">{props.title}</label>
      <Selects className='react-select-select' {...inputProps} onChange={(e) => changeHandler(e, props)} />
      {props.errorMsg && (
        <span className="form-input-msg">
          {props.errorMsg === true
            ? `Please select a options.`
            : props.errorMsg}
        </span>
      )}
    </div>
  );
};

Select.defaultProps = {
    question: '',
  name: '',
  title: '',
  placeholder: '',
  className: '',
  outerClassName: '',
  isClearable: true,
  value: '',
  options: [],
  onChangeFunc: () => {},
  isReq: null,
  onValidateFunc: () => {},
};

Select.propTypes = {
    question: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  outerClassName: PropTypes.string,
  isClearable: PropTypes.bool,
  value: PropTypes.any,
  options: PropTypes.array,
  onChangeFunc: PropTypes.func,
  isReq: PropTypes.bool,
  errorMsg: PropTypes.any,
  onValidateFunc: PropTypes.func,
};

export default memo(Select);

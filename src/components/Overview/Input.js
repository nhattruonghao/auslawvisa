import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
       });

    useEffect(() => {
        reset({
            answer:''
        });
      }, [props.onSubmit])
    
    return (
        <div className='wrap-form-overview'>
            <form
                onSubmit={handleSubmit(props.onSubmit)}
                className='form-outer'
            >
                <label className='form-label'>{props.title}</label>
                <input
                    className='form-input-text'
                    {...register(props.name, {
                        required: props.required,
                        minLength: 2,
                    })}
                    placeholder={props.placeholder}
                />
                {errors[props.name] && (
                    <span className='form-input-msg'>{props.errorMsg}</span>
                )}

                <input className='btn-temple' type='submit' value='Next' />
            </form>
        </div>
    );
}

export default Input;

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    required: PropTypes.bool,
    errorMsg: PropTypes.string,
};

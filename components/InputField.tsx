import React, { Fragment, ChangeEvent } from 'react';

interface InputFieldProps {
    name: string;
    type: string;
    labelTitle: string;
    placeholderTitle: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
    name,
    type,
    labelTitle,
    placeholderTitle,
    onInputChange
}: InputFieldProps) => {
    return (
        <Fragment>
            <label className="mt-3">{labelTitle}</label>
            <input
                name={name}
                type={type}
                id={labelTitle}
                onChange={onInputChange}
                className="form__input"
                placeholder={placeholderTitle} />
        </Fragment>
    );
};

InputField.defaultProps = {
    type: 'text'
};

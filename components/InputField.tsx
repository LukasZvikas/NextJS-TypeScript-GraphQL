import React, { Fragment, ChangeEvent } from 'react';

interface InputFieldProps {
    type: string;
    labelTitle: string;
    placeholderTitle: string;
    onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
    type,
    labelTitle,
    placeholderTitle,
    onTextChange
}: InputFieldProps) => {
    return (
        <Fragment>
            <label className="mt-3">{labelTitle}</label>
            <input
                type={type}
                id={labelTitle}
                onChange={onTextChange}
                className="form__input"
                placeholder={placeholderTitle} />
        </Fragment>
    );
};

InputField.defaultProps = {
    type: 'text'
};

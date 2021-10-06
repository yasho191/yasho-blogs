import React from 'react';
import {
    InputContainer,
    Input,
    InputLabel,
    TextArea
} from '../StyledComponents/StyledComponents';

const InputComponent = (props) => {
    return(
        <InputContainer>
            {
                props.textArea
                    ?
                <TextArea name={props.label.toLowerCase()} />
                    :
                <Input
                    placeholder={props.placeholder || ''}
                    error={props.error} type={props.type || "text"}
                    name={props.name.toLowerCase()}
                />
            }
            <InputLabel>{props.label}</InputLabel>
        </InputContainer>

    )
}

export default InputComponent;

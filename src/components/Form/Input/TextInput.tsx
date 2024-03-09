import { InputGroup, Label } from '@blueprintjs/core'
import { useField } from 'formik'
import styled from 'styled-components'

export const TextInput = ({
    label,
    name,
    onChangeHandler,
    placeholder,
    type,
}: {
    label: string
    name: string
    placeholder: string
    type?: 'password'
    onChangeHandler: any
}) => {
    const [, meta] = useField(name)

    return (
        <StyledInput>
            <StyledLabel>
                {label}
                <InputGroup
                    placeholder={placeholder}
                    name={name}
                    onChange={onChangeHandler}
                    type={type}
                />
            </StyledLabel>
            <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
        </StyledInput>
    )
}

const StyledInput = styled.div`
    margin-bottom: 30px;
    &:nth-last-child(2) {
        margin-bottom: 50px;
    }
`

const StyledLabel = styled(Label)`
    margin-bottom: 3px !important;
`

const ErrorMessage = styled.span`
    color: #cd4246;
`

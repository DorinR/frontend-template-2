import { Label } from '@blueprintjs/core'
import { DateInput2 } from '@blueprintjs/datetime2'
import { useField } from 'formik'
import { useState } from 'react'
import styled from 'styled-components'
import { format, parse, sub } from 'date-fns'

export const DatetimeInput = ({
    label,
    name,
}: {
    label: string
    name: string
}) => {
    const [, meta, { setValue }] = useField(name)
    const [dateValue, setDateValue] = useState<string | null>(null)
    const dateFnsFormat = 'dd-MM-yyyy'
    const formatDate = (date: Date) => format(date, dateFnsFormat)
    const parseDate = (str: string) => parse(str, dateFnsFormat, new Date())

    const onChangeHandler = (newDate: any) => {
        setValue(new Date(newDate).toISOString())
        setDateValue(newDate)
    }

    return (
        <StyledInput>
            <StyledLabel>
                {label}
                <DateInput2
                    formatDate={formatDate}
                    onChange={onChangeHandler}
                    parseDate={parseDate}
                    placeholder={dateFnsFormat}
                    value={dateValue}
                    disableTimezoneSelect
                    minDate={sub(new Date(), { years: 150 })}
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

import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

export const NumberField = (props: TextFieldProps): JSX.Element => {
    const {
        type,
        onChange,
        ...otherProps
    } = props;

    return (
        <TextField {...otherProps} type="number" onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (!onChange) {
                return;
            }

            if (event.target.value === "" && !!(event.nativeEvent as any).data) {
                // This is the workaround for the problem with typing "." (dot).
                // When dot is typed event.target.value is empty string which is parsed to NaN.
                // Note: tried out what is suggested here https://mui.com/components/text-fields/#type-quot-number-quot
                // but didn't work.
                return;
            } else {
                onChange(event);
            }
        }}/>
    );
}
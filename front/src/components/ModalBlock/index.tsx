import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {Typography} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {useStylesSignIn} from "../../pages/Signin";

interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;

}

export const ModalBlock: React.FC<ModalBlockProps> = ({title, children, onClose, visible = false}): React.ReactElement | null => {
    if (!visible) {
        return null;
    }

        return (
            <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <IconButton onClick={onClose} color="primary" aria-label="close">
                        <CloseIcon style={{ fontSize: 22 }} color="primary" />
                    </IconButton>
                    <Typography variant={"h6"}>{title}</Typography>
                </DialogTitle>
                <DialogContent>
                    {children}
                    </DialogContent>
            </Dialog>
        );
};
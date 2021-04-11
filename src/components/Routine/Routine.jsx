import React, { useState } from 'react';
import { Button, Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';

function Routine() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(true);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Button onClick={toggleOpen}>Add</Button>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer('right', false)}
            >
                <RoutineForm />
            </Drawer>
        </>
    );
}

export default Routine;

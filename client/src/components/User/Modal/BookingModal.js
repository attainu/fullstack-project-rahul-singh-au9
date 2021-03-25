import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Fade, Button, Backdrop } from '@material-ui/core';
import useStyles from './styles';

const BookingModal = ({orderedBy, session}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(orderedBy);

  return (
      <div>

        <Button color="primary" variant="contained" onClick={handleOpen}>Payment info</Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >

        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" color="primary">Transaction Information</h2>
            <br/><br/>
            <p id="transition-modal-description">Payment Intent: {session.payment_intent}
            </p><br/>

            <p>Payment Status: {session.payment_status}</p><br/>

            <p> Amount Total: {session.currency.toUpperCase()}
              {" "} {session.amount_total / 100}
            </p><br/>

            <p> Stripe Customer Id: {session.customer}</p><br/>

            <p> Customer: {orderedBy.name}</p><br/>
          </div>
        </Fade>

        </Modal>

      </div>
  );
}

export default BookingModal;
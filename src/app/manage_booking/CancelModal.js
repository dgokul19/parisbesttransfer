"use client";

// CSS
import classes from "./page.module.scss";

const CancelModal = ({ isOpen, bookingInfo, onCancel, onConfirm }) => {

    return (
        <>
            <div className={`${isOpen ? classes.isOpen : null} ${classes.cancelWrapper}`}>
                <div className={classes.cancelModal}>
                    <i className={`fa fa-close ${classes.closeIc}`} onClick={onCancel}></i>
                    <div className={classes.modalTitle}>Cancel Booking - #{bookingInfo.booking_ref} ? </div>
                    <div className={classes.modalContent}>
                        <p>Are you sure you want to cancel the Booking ?</p>
                        <div className={classes.modalFoot}>
                            <button className={classes.cancelBtn} onClick={onCancel}>Cancel</button>
                            <button className={classes.confirmBtn} onClick={onConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CancelModal;
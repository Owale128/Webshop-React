import { useState } from "react";

export const ModalFunctions = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return {showModal, openModal, closeModal}
}
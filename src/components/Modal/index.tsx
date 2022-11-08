import { FC } from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { ModalProps } from "../../types";
import '../../assets/style/index.css';

const ReusableModal: FC<ModalProps> = ({ titleOpen, title, closeModal, submit, element, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button variant={'ghost'} onClick={onOpen}>{titleOpen}</Button>

            <Modal size={'xs'} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent className="modal-glass-effect" {...props}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {element}
                    </ModalBody>
                    <ModalFooter>
                        {closeModal ?
                            <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                            :
                            null
                        }
                        {submit ?
                            <Button variant='ghost' onClick={submit} >Submit</Button>
                            :
                            null
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ReusableModal;
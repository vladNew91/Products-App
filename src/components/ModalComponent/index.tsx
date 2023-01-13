import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Product } from "../../types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalComponentProps {
  data: Product;
  open: boolean;
  handleToggleModal: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  data,
  open,
  handleToggleModal,
}: ModalComponentProps): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={handleToggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Product info:
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ID: {data.id}
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Product name: {data.name}
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Product year: {data.year}
        </Typography>
      </Box>
    </Modal>
  );
};

import React, { useState } from "react";
import ModalInfo from "../components/Modals/ModalInfo";
import { useDispatch } from "react-redux";
import { setInitialValue } from "../store/features/forms/formSlice";
import { useNavigate } from "react-router";
import useForm from "../components/Hooks/useForm";

const Logout = () => {

//const {clearFormData} = useForm();
  const [showModal, setShowModal] = useState(true); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    dispatch(setInitialValue({ module: "", username: "", email: "", password: "" }));
    //clearFormData();
    setShowModal(false);
    navigate("/login"); 
  };

  const handleCancelLogout = () => {
    setShowModal(false);
    navigate("/login"); 
  };

  return (
    <>
      <ModalInfo
        visible={showModal}
        message={
          <>
            <p>¿Estás seguro de cerrar sesión?</p>
            <button
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleConfirmLogout}
            >
              Presionar para salir
            </button>
            
          </>
        }
        onClose={handleCancelLogout}
      />
    </>
  );
};

export default Logout;

import React, { useState, useEffect } from "react";
import Avatar from "react-avatar-edit";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";

// Assuming getUserData is a function that retrieves user data
import { getUserData } from "@/utils/token";

Modal.setAppElement('#root');

const ProfileSection = ({ onLogout }) => {
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const user = getUserData();
    const firstName = user?.name.split(" ")[0];
    setFirstName(firstName || "User");
  }, []);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 916800) {
      toast.error("File is too big!");
      elem.target.value = "";
    }
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveClick = () => {
    setIsModalOpen(false);
    toast.success("Profile picture updated!");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative">
        {preview ? (
          <img
            src={preview}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-2xl text-white">{firstName.charAt(0)}</span>
          </div>
        )}
        <button
          onClick={handleEditClick}
          className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full flex items-center justify-center"
        >
          <FaEdit />
        </button>
      </div>
      <p className="mt-2 text-lg font-semibold">{firstName}</p>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit Profile Picture"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={src}
        />
        <button
          onClick={handleSaveClick}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save
        </button>
      </Modal>

      <button
        onClick={onLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        <FaSignOutAlt />
      </button>
    </div>
  );
};

export default ProfileSection;

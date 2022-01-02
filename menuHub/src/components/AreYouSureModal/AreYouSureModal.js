const AreYouSureModal = () => {
  return (
    <>
      <Dialog open={openModal} onClose={handleClose}></Dialog>
    </>
  );
};

export default AreYouSureModal;

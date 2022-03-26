import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './Carousel.module.css'

const Carousel = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
          
        return (
              <div>
                <div className={styles.buttonCarusel} onClick={handleOpen}>Фотографии</div>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                  <Box sx={style} className={styles.boxModal}>
                        <div className={styles.carousel}>
                            <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <img src="https://32.img.avito.st/image/1/1.9X96i7axWZZMPNubHJS6Q-MoWZLGKlOU.LlHwhFyYbsE-8QpfZi3a9sKBIBFw0gr3ha-Alxk5DzI" className={style.caruselImg} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://51.img.avito.st/image/1/1.QsIu8rax7isYRWwmJu8N_rdR7i-SU-Qp.48Zat7lOXsuwhzrQkwd8LQ0AHUDZ1Q9MRrME2mlBpbk"  className={style.caruselImg} alt="..." />
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                        </div>
                  </Box>
                </Modal>
              </div>
            );
};

export default Carousel;
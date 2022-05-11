import React from "react";
import styles from "./ServiceCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditRemoveModal/EditModal";
import { useState } from "react";
import RemoveModal from "./EditRemoveModal/RemoveModal";
import moment, { HTML5_FMT } from "moment";
import ServiceAdd from "./ServiceAdd";
import { loadServices } from "../../../redux/features/organization";

const ServiceCategory = () => {
  const dispatch = useDispatch()
  const services = useSelector((state) => state.organization.services);
  const user = useSelector((state) => state.organization.user)
  //   console.log(services)


  const [currentItem, setCurrentItem] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [time, setTime] = useState(false)


  const handleTime = () => {
    setTime(!time)
  }

  const handleShowEdit = (item) => {
    setShowEdit(!showEdit);
    setCurrentItem(item);
  };
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const handleShowRemove = (item) => {
    setShowRemove(!showRemove);
    setCurrentItem(item);
  };

  const handleReload = () => {
    dispatch(loadServices())
  }

  return (

    <div className={styles.wrapper}>
      <div className={styles.servises}>
        <div className={styles.addServise}>
          <div style={{ display: 'flex', justyfyContent: 'space-between', alignItems: 'center' }}>
            <div onClick={handleReload} className={styles.reloadBtn}></div>
            <h3>Список активных услуг</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className={styles.addBtn} onClick={() => handleShowAdd()}>
              +Добавить услугу
            </button>
            <div onClick={handleTime} className={styles.clock} style={{ cursor: 'pointer', fontSize: '30px' }}>🕐</div>
          </div>


          {showAdd && (
            <ServiceAdd showAdd={showAdd} handleShowAdd={handleShowAdd} />
          )}

        </div>
        <div className={styles.ServisesMap}>
          <div
            style={{ fontSize: "24px", textAlign: "center" }}
          >
            {services.length > 0 ? "" : "Вы пока не разместили ни одну услугу"}
          </div>
          {services.map((item) => {

            return (
              <div className={styles.cart}>
                <div className={styles.name}>
                  <h2>{item.serviceName}</h2>
                  <h5 className={styles.time}>
                    {time ? moment(item.time).format('Y-MMM-DD HH:MM') : moment(item.time).fromNow()}
                  </h5>
                </div>
                <div className={styles.description}>
                  <h4>{item.description}</h4>
                </div>
                <div className={styles.imgs}>3 фото</div>
                <div className={styles.money}>
                  <h5>Бюджет: {item.price}р</h5>
                  <h5>Регион: {user ? user.city : "Загрузка..."}</h5>
                </div>
                <div
                  style={{ width: "80%", margin: "auto", textAlign: "center" }}
                >
                  <button
                    className={`${styles.editBtn} ${styles.button}`}
                    onClick={() => handleShowEdit(item)}
                    disabled={showEdit || showRemove}>
                    <span>Редактировать</span>
                  </button>
                  {showEdit ? (
                    <EditModal
                      showEdit={showEdit}
                      handleShowEdit={handleShowEdit}
                      item={currentItem}
                    />
                  ) : (
                    ""
                  )}

                  <button
                    className={`${styles.removeBtn} ${styles.button}`}
                    onClick={() => handleShowRemove(item)}
                    disabled={showEdit || showRemove}
                  >
                    <span>Удалить</span>
                  </button>
                  {showRemove ? (
                    <RemoveModal
                      showRemove={showRemove}
                      handleShowRemove={handleShowRemove}
                      item={currentItem}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default ServiceCategory;

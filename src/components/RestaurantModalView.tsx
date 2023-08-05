import React from "react";
import styled from "styled-components";
import {Restaurant} from "../types/Restaurant";

interface RestaurantViewProps {
    restaurant: Restaurant;
    closeModal: () => void;
    deleteRestaurant: (name: string) => void;
}


function RestaurantModalView({restaurant, closeModal, deleteRestaurant}: RestaurantViewProps) {

    const {name, distance, category, description} = restaurant;

    return (
        <>
            <div>
                <CategoryIcon>
                    <img src={category.image}/>
                </CategoryIcon>
                <div className="star-container"></div>
            </div>
            <h2 className="mt-16">{name.value}</h2>
            <RestaurantInfo>
                <p>캠퍼스로부터 {distance.value}분 내</p>
                <div className="mt-16 mb-16">{description}</div>
                <ButtonContainer>
                    <button onClick={() => deleteRestaurant(name.value)}>
                        삭제하기
                    </button>
                    <button onClick={() => closeModal()}>
                        닫기
                    </button>
                </ButtonContainer>
            </RestaurantInfo>
        </>
    )
}

export default RestaurantModalView;

const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: #f6a88a;

  img {
    width: 36px;
    height: 36px;
  }
`

const RestaurantInfo = styled.div`

  p {
    margin-top: 16px;
    color: #ec4a0a;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;

  button {
    width: 100%;
    height: 44px;
    margin: 0px 4px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
  }

  button:first-of-type {
    border: 1px solid #667085;
    background: transparent;
    color: #667085;
  }

  button:last-of-type {
    background: #ec4a0a;
    color: #ffffff;
  }
`
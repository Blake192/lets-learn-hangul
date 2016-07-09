import React from 'react';
import { play } from '../sound';

const SoundButton = ({url}) => (
  <div
    className="sound-button"
    onClick={(e) => {
      e.preventDefault();
      play(url);
    }}>
    <svg width="55px" height="55px" viewBox="0 0 55 55">
      <path fill="#FFFFFF" d="M33.795,19.879v15.894c0,0.917-0.734,1.651-1.651,1.651c-0.917,0-1.651-0.734-1.651-1.651V19.879 c0-0.917,0.734-1.651,1.651-1.651C33.061,18.229,33.795,18.962,33.795,19.879z M27.192,13.032c-0.917,0-1.651,0.734-1.651,1.651 v26.225c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651V14.683C28.843,13.766,28.109,13.032,27.192,13.032z M22.241,10.771c-0.917,0-1.651,0.734-1.651,1.651v30.81c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651v-30.81 C23.891,11.504,23.158,10.771,22.241,10.771z M12.399,23.425c-0.917,0-1.651,0.734-1.651,1.651v5.441 c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651v-5.441C14.049,24.158,13.316,23.425,12.399,23.425z M17.35,16.456c-0.917,0-1.651,0.734-1.651,1.651v19.378c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651V18.106 C19.001,17.189,18.267,16.456,17.35,16.456z M7.447,22.569c-0.917,0-1.651,0.734-1.651,1.651v7.213c0,0.917,0.734,1.589,1.651,1.589 c0.917,0,1.651-0.734,1.651-1.651v-7.152C9.098,23.302,8.364,22.569,7.447,22.569z M37.034,21.346c-0.917,0-1.651,0.734-1.651,1.651 v9.659c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651v-9.659C38.685,22.08,37.951,21.346,37.034,21.346z M46.938,23.425c-0.917,0-1.651,0.734-1.651,1.651v5.441c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651v-5.441 C48.588,24.158,47.855,23.425,46.938,23.425z M41.986,17.25c-0.917,0-1.651,0.734-1.651,1.651V36.69 c0,0.917,0.734,1.651,1.651,1.651c0.917,0,1.651-0.734,1.651-1.651V18.901C43.637,17.984,42.903,17.25,41.986,17.25z" />
    </svg>
  </div>
);

export default SoundButton;